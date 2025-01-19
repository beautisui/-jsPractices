const readMatchData = () => {
  try {
    const matchFileName = Deno.args[0];
    if (matchFileName === undefined || matchFileName.trim() === "") {
      throw "File name not provided.";
    }
    const dataRead = Deno.readTextFileSync(matchFileName);
    return dataRead;
  } catch (error) {
    console.log("Error:", error);
  }
};

const parseSections = (fileContent) => {
  return fileContent.split("\n---\n").map((dataLine) => dataLine.split("\n"));
};

const makeTable = (rowStats) => {
  const stats = rowStats.map((data) => data.split(","));
  const [heading, ...details] = stats;

  const tables = details.map((eachLine) =>
    Object.fromEntries(eachLine.map((value, index) => [heading[index], value]))
  );

  return tables;
};

const main = () => {
  try {
    const fileContent = readMatchData();
    const sections = parseSections(fileContent);
    sections.forEach((section, index) => {
      console.log(`\n=== Table ${index + 1} ===`);
      console.table(makeTable(section));
    });
  } catch (error) {
    console.log("An error occurred:", error);
    Deno.exit(1);
  }
};

main();
