export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-brand-warm-ivory text-center" aria-live="polite" aria-busy="true">
      <div className="w-10 h-10 border-2 border-brand-orange border-t-transparent rounded-full animate-spin mb-4" />
      <span className="font-mono text-xs text-brand-secondary-text uppercase tracking-widest">
        Initializing Interface State...
      </span>
    </div>
  );
}
