const generateFibonacciSeries = () => {
  const dataFilePath = "./fiboData.json";
  const fileData = JSON.parse(Deno.readTextFileSync(dataFilePath));
  const { series, limit } = fileData;
  let userProvidedLimit = +Deno.args[0];

  while (userProvidedLimit > 0 && series.length <= limit) {
    const currentTerm = series.at(-1) + series.at(-2);
    series.push(currentTerm);
    userProvidedLimit--;
  }

  const updatedData = JSON.stringify({ series, limit });
  Deno.writeTextFileSync(dataFilePath, updatedData);
};

generateFibonacciSeries();
