"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/links";

export function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      companyWebsite: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmissionStatus("success");
        setResponseMessage(
          result.message ||
            "Thank you! Your message has been received. For immediate inquiries, feel free to use direct email."
        );
        reset();
      } else {
        setSubmissionStatus("error");
        setResponseMessage(
          result.error ||
            "Unable to submit message at this time. Please use the direct email link below."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmissionStatus("error");
      setResponseMessage(
        "Network connection error. Please use direct email to reach Mihir directly."
      );
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 p-6 sm:p-8 shadow-2xs">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Have an opportunity, internship inquiry, or technical question? Fill out the form or
          email directly.
        </p>
      </div>

      {submissionStatus === "success" ? (
        <div
          role="status"
          className="rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40 p-6 text-center space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-100">
              Message Validated & Recorded
            </h4>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed max-w-md mx-auto">
              {responseMessage}
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmissionStatus("idle")}
            >
              Send Another Message
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={SOCIAL_LINKS.email.mailto}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Launch Mail Client</span>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Honeypot field (hidden from screen readers and visual users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="companyWebsite">Leave this field blank</label>
            <input
              id="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("companyWebsite")}
            />
          </div>

          {/* Error Alert if submission failed */}
          {submissionStatus === "error" && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 dark:border-red-800/80 bg-red-50 dark:bg-red-950/40 p-3.5 flex items-start gap-3 text-xs sm:text-sm text-red-700 dark:text-red-300"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{responseMessage}</span>
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="e.g. Alex Morgan"
                className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 dark:border-slate-700 focus:border-blue-500"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-500 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="alex@company.com"
                className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 dark:border-slate-700 focus:border-blue-500"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-500 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-xs font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              placeholder="Internship opportunity / Technical inquiry"
              className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 transition-colors ${
                errors.subject
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-300 dark:border-slate-700 focus:border-blue-500"
              }`}
              {...register("subject")}
            />
            {errors.subject && (
              <p id="subject-error" className="text-xs text-red-500 font-medium">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-mono-tech uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Describe the opportunity, role requirements, or project details..."
              className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 transition-colors resize-y ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-300 dark:border-slate-700 focus:border-blue-500"
              }`}
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-500 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button & Mailto Fallback Notice */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting || submissionStatus === "loading"}
              disabled={isSubmitting || submissionStatus === "loading"}
              className="w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </Button>

            <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
              Prefer your default email client?{" "}
              <a
                href={SOCIAL_LINKS.email.mailto}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Send via mailto
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
