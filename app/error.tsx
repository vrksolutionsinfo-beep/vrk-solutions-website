"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-brand-warm-ivory text-center">
      <div className="max-w-md">
        <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-3">
          Runtime Exception
        </span>
        <h1 className="text-display-sm text-brand-primary-text mb-4">
          An Unexpected Error Occurred
        </h1>
        <p className="text-body text-brand-secondary-text mb-8">
          The requested view failed to render safely. Please attempt to recover by refreshing the application state.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-brand-orange hover:bg-brand-deep-orange text-white font-semibold rounded-md transition text-sm"
          >
            Attempt Recovery (Reset)
          </button>
          <Button variant="secondary" href="/">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
