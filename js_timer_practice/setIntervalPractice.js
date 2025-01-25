const countDown = () => {
  console.log("countDown start: ");
  let i = 5;
  const setIntervalId = setInterval(() => {
    console.log(`countDown : ${i}`);
    if (i <= 0) {
      clearInterval(setIntervalId);
      console.log("countDown end: ");
      console.log("setIntervalId", setIntervalId);
    }
    i--;
  }, 1000);

  const setIntervalId2 = setInterval(() => {
    console.log(`countDown : ${i}`);
    if (i <= -5) {
      console.log("countDown end: ");
      console.log("setIntervalId2", setIntervalId2);
      clearInterval(setIntervalId2);
    }
    i--;
  }, 1000);
};

// countDown();

const multiplicationTable = (number, delay) => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      () => console.log(`${number} * ${i} = ${number * i}`),
      delay * i
    );
  }
};

const main = () => {
  multiplicationTable(2, 1);
  multiplicationTable(3, 1);
};

main();
