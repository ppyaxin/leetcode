var promise1 = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Stuff worked!");
    // resolve = (result) => console.log(result)
    // result = "Stuff worked!"
  } else {
    reject(Error("It broke"));
    // reject = (error) => console.error(error)
    // error = Error("It broke")
  }

  //   if (true) {
  //     return "Stuff worked!";
  //   } else {
  //     throw Error("It broke");
  //   }
});

promise1
  .then((result) => "大臭猪 " + result)
  .then((result) => console.log(result));

// promise1
//   .then((result) => "大臭猪 " + result) // resolve = (result) => "大臭猪 " + result; reject = undefined
//   .catch((error) => console.error("大臭猪傻了 " + error)) // resolve = (result) => "大臭猪 " + result; reject = (error) => console.error(error)
//   .then((result) => console.log(result)); // resolve = (result) => console.log("大臭猪 " + result); reject = (error) => console.error(error)

function levelOne(value) {
  // console.log("in levelOne");
  // return value + 5;
  return new Promise(function (resolve) {
    console.log("in levelOne");
    resolve(value + 5);
  });
}

function levelTwo(value) {
  var promise,
    newScore = value + 10;
  return (promise = new Promise(function (resolve) {
    resolve(newScore);
  }));
}

function levelThree(value) {
  var promise,
    newScore = value + 30;
  return (promise = new Promise(function (resolve) {
    resolve(newScore);
  }));
}

var startGame = new Promise(function (resolve, reject) {
  var currentScore = 5;
  console.log("Game Started! Current score is " + currentScore);
  resolve(currentScore);
});

// startGame返回的结果传递给了then函数，然后传递给了levelOne函数
startGame
  .then(levelOne) // promise
  .then(function (result) {
    // result为levelOne函数的返回值
    console.log("You have reached Level One! New score is " + result);
    return result;
  }) // promise
  .then(levelTwo)
  .then(function (result) {
    console.log("You have reached Level Two! New score is " + result);
    return result;
  })
  .then(levelThree)
  .then(function (result) {
    console.log("You have reached Level Three! New score is " + result);
  });

function levelOne(value) {
  var promise,
    newScore = value + 5;
  return (promise = new Promise(function (resolve) {
    resolve(newScore);
  }));
}

function levelTwo(value) {
  var promise,
    newScore = value + 10;
  return (promise = new Promise(function (resolve) {
    resolve(newScore);
  }));
}

function levelThree(value) {
  var promise,
    newScore = value + 30;
  return (promise = new Promise(function (resolve) {
    resolve(newScore);
  }));
}

// 只有aysnc函数内可以使用await语句
async function startGame() {
  var currentScore = 5;
  console.log("Game Started! Current score is " + currentScore);
  currentScore = await levelOne(currentScore);
  console.log("You have reached Level One! New score is " + currentScore);
  currentScore = await levelTwo(currentScore);
  console.log("You have reached Level Two! New score is " + currentScore);
  currentScore = await levelThree(currentScore);
  console.log("You have reached Level Three! New score is " + currentScore);
}

 function startGame() {
  var currentScore = 5;
  console.log("Game Started! Current score is " + currentScore);
  currentScore = currentScore + 5;
  return currentScore;
}

async function main() {
  console.log( startGame());
}
