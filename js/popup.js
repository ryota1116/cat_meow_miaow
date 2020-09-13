let KeyUpCount = -4;
let cat = document.querySelectorAll(".cat-element");

document.addEventListener('keyup', logKey);
function logKey(e) {

  // キーの入力回数をカウント
  KeyUpCount++;

  // 入力回数をブラウザに表示
  let NumberOfKeyUp = document.getElementById('number-of-key-up');
  NumberOfKeyUp.textContent = KeyUpCount;

  // 全ての猫ちゃんが表示されたら、ポップアップを表示
  if (cat[0].style.visibility === "visible"
    && cat[1].style.visibility === "visible"
    && cat[2].style.visibility === "visible"
    && cat[3].style.visibility === "visible") {
    document.getElementById("modal_window").style.display = "block";

    tweetShareLink();
  }
};

function tweetShareLink() {
  const tw_contents = `猫を見つけるまでのミス数は${KeyUpCount}回です`
  const tw_hashtag = ['cat_meow_miaow', 'にゃんにゃん']
  const url = 'https://ryota1116.github.io/cat_meow_miaow/'
  const tw_url = `https://twitter.com/intent/tweet?hashtags=${tw_hashtag}&url=${url}&text=${tw_contents}&lang=ja`

  const target = document.getElementById("tweet-share")
  target.href = tw_url
};
