import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-8 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center mx-auto">
            <Terminal className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              STATUS_CODE :: 404_NOT_FOUND
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Requested Endpoint Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The routing table was unable to resolve the requested resource. The path may have
              been moved, renamed, or is currently unavailable.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono-tech text-slate-600 dark:text-slate-400 text-left">
            <div>&gt; resolver.lookup(requested_route)</div>
            <div className="text-red-500">&gt; ERROR: NO_MATCH_FOUND</div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="primary" size="md">
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
            <Button href="/projects" variant="outline" size="md">
              <ArrowLeft className="w-4 h-4" />
              <span>View Case Studies</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
