/最初の状態/;
let hour = 0;
let min = 0;
let sec = 0;
let tenth = 0;
/関数定義/;
function countUp() {
  tenth++;
  if (tenth >= 10) {
    tenth = 0;
    sec++;
  }
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  if (min >= 60) {
    min = 0;
    hour++;
  }
  /テキストを書き換える/;
  $("#time").text(hour + ":" + min + ":" + sec + ":" + tenth);
}
/スタート/;
let timer;
$("#start").on("click", function () {
  /timerに値が入っていたら新しく作らない/;
  if (timer) {
    return;
  }
  timer = setInterval(countUp, 100);
  /スタート押せない、ストップ・リセット押せる/;
  $("#start").prop("disabled", true);
  $("#stop").prop("disabled", false);
  $("#reset").prop("disabled", false);
});
/ストップ/;
$("#stop").on("click", function () {
  clearInterval(timer);
  timer = null;
  /ストップ押せない、スタート・リセット押せる/;
  $("#start").prop("disabled", false);
  $("#stop").prop("disabled", true);
  $("#reset").prop("disabled", false);
});
/リセット/;
$("#reset").on("click", function () {
  clearInterval(timer);
  hour = 0;
  min = 0;
  sec = 0;
  tenth = 0;
  $("#time").text("0:0:0:0");
  timer = null;
  /全て押せる/;
  $("#start").prop("disabled", false);
  $("#stop").prop("disabled", true);
  $("#reset").prop("disabled", true);
});
