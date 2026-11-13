import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-brand-warm-ivory text-center">
      <div className="max-w-md">
        <span className="font-mono text-5xl font-bold text-brand-orange block mb-4">
          404
        </span>
        <h1 className="text-display-sm text-brand-primary-text mb-4">
          Page Not Located
        </h1>
        <p className="text-body text-brand-secondary-text mb-8">
          The requested architecture route does not exist or has been relocated to another endpoint.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/">
            Return to Homepage
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
