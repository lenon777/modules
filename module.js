var myModule = (function () {
  var start, pause;
  var isCount = false;
  var isContinue = false;
  var startTimer = function () {
    isCount = true;
    start = new Date().getTime();
  }
  var pauseTimer = function () {
    if (isCount) {
      isContinue = true;
      isCount = false;
      pause = new Date().getTime() - start;
      return pause / 1000;
    } else {
      console.log("Timer is already on pause");
    }
  }
  var continueTimer = function () {
    if (isContinue) {
      isCount = true;
      isContinue = false;
      start = new Date().getTime() - pause;
    } else {
      console.log("Timer is working now!")
    }
  }

  return {
    startTimer: startTimer,
    pauseTimer: pauseTimer,
    continueTimer: continueTimer
  }
}());