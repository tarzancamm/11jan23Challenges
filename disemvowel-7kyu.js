// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => {
  let answer = [];
  let strArr = str.toLowerCase().split("");
  let cons = "bcdfghjklmnpqrstvwxyz".split("");
  for (let i = 0; i < str.length; i++) {
    if (
      strArr[i] === " " ||
      strArr[i] === "," ||
      strArr[i] === "?" ||
      strArr[i] === "!" ||
      strArr[i] === "\n" ||
      strArr[i] === "'"
      ) {
      answer.push(str[i]);
    }
    for (let k = 0; k < cons.length; k++) {
      if (strArr[i] === cons[k]) {
        answer.push(str[i]);
      }
    }
  }
  return answer.join("");
};

console.log(disemvowel("What are you, a communist?"));
