import Grid from "../pages/grid";

type WordleBoardProps = {
  guesses: string[];
  letters: LetterResult[][];
  currentGuess: number;
  shakeRow: number | null;
};

export default function WordleBoard({
  guesses,
  letters,
  currentGuess,
  shakeRow,
}: WordleBoardProps) {
  return (
    <section className="flex flex-col gap-1 pt-10" aria-label="Wordle board">
      {guesses.map((guess, index) => (
        <Grid
          key={index}
          guess={guess}
          statuses={letters[index]}
          shakeRow={shakeRow === index}
        />
      ))}
    </section>
  );
}
