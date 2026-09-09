export default function WordleHeader() {
  const data = new Date();

  return (
    <header className="w-full">
      <div className="grid w-full grid-cols-3 items-center border-b border-neutral-700 p-4">
        <div />
        <h1 className="text-center text-3xl font-bold text-neutral-200">
          WORST WORDLE
        </h1>
        <p className="text-right text-neutral-400">
          Today&apos;s date:
          <br />
          {data.getDate()}.{data.getMonth() + 1}.{data.getFullYear()}
        </p>
      </div>
    </header>
  );
}
