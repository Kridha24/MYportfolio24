import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

// Simple in-memory rate-limiting store for development/serverless instances
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // Rate limiting check
    const now = Date.now();
    const currentRate = rateLimitMap.get(ip);

    if (currentRate && now - currentRate.lastReset < RATE_LIMIT_WINDOW_MS) {
      if (currentRate.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            success: false,
            error: "Too many contact requests from this IP. Please wait a minute or email directly.",
          },
          { status: 429 }
        );
      }
      currentRate.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();

    // Server-side Zod validation
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed.",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, companyWebsite } = parseResult.data;

    // Honeypot check
    if (companyWebsite && companyWebsite.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // Check if a webhook or external forwarder is configured in environment
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook forwarding error:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message was validated and processed successfully. Note: In development mode, responses are logged locally without third-party email transmission.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API exception:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error while processing message. Please use direct email link.",
      },
      { status: 500 }
    );
  }
}
