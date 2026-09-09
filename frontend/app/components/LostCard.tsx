

export default function LostCard() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-rose-500/60 bg-neutral-900 p-6 shadow-2xl shadow-rose-950/50">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-rose-300/60 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
          You Lost
        </span>

        <h2 className="text-3xl font-black uppercase tracking-wide text-neutral-100">
          Perdeu verme
        </h2>
      </div>
    </section>
  );
}