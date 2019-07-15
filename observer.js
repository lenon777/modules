function FootballMatch() {
  this.fans = [];
}
FootballMatch.prototype = {
  startWatching: function (fan) {
    this.fans.push(fan);
  },
  endWatching: function (fanOff) {
    this.fans = this.fans.filter(function (fan) {
      if (fan !== fanOff) {
        return fan;
      }
    });
  },
  scoreOfMatch: function (scoreOne, scoreTwo) {
    this.fans.forEach(function (fan) {
      console.log("The score is " + scoreOne + " : " + scoreTwo + " " + fan.song);
    })
  }
}
function BarsaFan() {
  this.song = "Ole-ole barsa is the best!"
}
function RealFan() {
  this.song = "Ole-ole real is the best!"
}
var barsaFanOne = new BarsaFan();
var realFanOne = new RealFan();
var barsaFanTwo = new BarsaFan();
var barsaFanThree = new BarsaFan();
var realFanTwo = new RealFan();

var game = new FootballMatch();
game.startWatching(barsaFanOne);
game.startWatching(barsaFanTwo);
game.startWatching(barsaFanThree);
game.startWatching(realFanOne);
game.startWatching(realFanTwo);

game.scoreOfMatch(3, 4);
game.endWatching(barsaFanThree);
game.endWatching(realFanOne);
game.scoreOfMatch(5, 5);