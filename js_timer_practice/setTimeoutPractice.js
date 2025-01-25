const firstExampleOnSettimeout = () => {
  console.log("start");
  setTimeout(() => console.log("trying to understand settimeout"), 1000);

  const multiplication = (a, b) => {
    console.log(a, b);
    return a * b;
  };

  setTimeout((a, b) => console.log(multiplication(a, b)), 1500, 2, 3);

  console.log(
    "set timeout inside console log",
    setTimeout(() => console.log("inside 3rd setTimeout"), 2000)
  );

  console.log("end");
};

// firstExampleOnSettimeout();

const countDown = (number, duration) => {
  let num = number;
  console.log("countdown start:", num);
  setInterval(() => console.log(`Countdown: ${num--}`), duration);
  console.log("countdown end:");
};

// countDown(10, 1000);

const countDownExample2 = (number, duration) => {
  let num = number;
  console.log("countdown start:", num);
  setInterval(() => console.log(`Countdown: ${num--}`), duration);
  console.log("countdown end:");
};

// setTimeout(() => countDownExample2(10, 1000), 15000);

const countDownExample3 = (number) => {
  console.log("countdown: ", number);
  if (number <= 0) return;
  setTimeout(() => countDownExample3(number - 1), 1000);
};

countDownExample3(10);
