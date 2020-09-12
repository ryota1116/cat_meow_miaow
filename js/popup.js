var KeyUpCount = 0;
var cat = document.querySelectorAll(".cat-element");

document.addEventListener('keyup', logKey);
function logKey(e) {

  // キーの入力回数をカウント
  KeyUpCount++;

  // 入力回数を表示
  var NumberOfKeyUp = document.getElementById('number-of-key-up');
  NumberOfKeyUp.textContent = KeyUpCount;

  // 全ての猫ちゃんが表示されたら、ポップアップを表示
  if (cat[0].style.visibility === "visible"
    && cat[1].style.visibility === "visible"
    && cat[2].style.visibility === "visible"
    && cat[3].style.visibility === "visible") {
    document.getElementById("modal_window").style.display = "block";
  }
};
