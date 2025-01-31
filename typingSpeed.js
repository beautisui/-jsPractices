const MILLISECONDS_IN_ONE_MINUTE = 60000;

const time = () => {
  return Date.now();
};

const startTyping = () => {
  return prompt("Start your typing");
};

const filterWords = (wordList) => {
  return wordList.filter((word) => word.length !== 0).length;
};

const convertMillisecToMinutes = (endTime, startTime) => {
  return (endTime - startTime) / MILLISECONDS_IN_ONE_MINUTE;
};

const typingSpeedInMinutes = () => {
  const startTime = time();
  const input = startTyping();
  const endTime = time();

  const takenTimeInMinutes = convertMillisecToMinutes(endTime, startTime);
  const totalWords = filterWords(input.split(" "));

  return Math.floor(totalWords / takenTimeInMinutes);
};

console.log(typingSpeedInMinutes());
