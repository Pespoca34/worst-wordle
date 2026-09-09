import { gameInfo } from "~/api/gameInfo";

export default function WinningCard({ gameId }: GameId) {
  if (!gameId) return null;

  const dados = gameInfo(gameId);

  return (
    <div className="winner-overlay">
      <div className="confetti-layer" aria-hidden="true">
        <span className="confetti confetti-1" />
        <span className="confetti confetti-2" />
        <span className="confetti confetti-3" />
        <span className="confetti confetti-4" />
        <span className="confetti confetti-5" />
        <span className="confetti confetti-6" />
      </div>

      <section className="winner-card">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="winner-badge">
            You Won
          </span>

          <h2 className="text-3xl font-black uppercase tracking-wide text-neutral-100">
            Ganhou cabaço
          </h2>

        </div>
      </section>
    </div>
  );
}