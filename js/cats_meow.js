// シャッフルアルゴリズムを使用
let random_alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

for(var i = random_alphabet.length - 1; i > 0; i--){
	var r = Math.floor(Math.random() * (i + 1));
	[random_alphabet[i], random_alphabet[r]] = [random_alphabet[r], random_alphabet[i]]
}

// キーボード入力イベントで、画像表示と音声再生を行う
document.addEventListener('keyup', (event) => {
	if (event.key === random_alphabet[0]) {
		// cat1表示
		let img = document.getElementById("cat1");
		img.style.visibility = "visible";
		// cat-cry1再生
		let music = new Audio('./cat-cry1.mp3');
		music.play();  // 再生
	} else if (event.key === random_alphabet[1]) {
		// cat2表示
		let img = document.getElementById("cat2");
		img.style.visibility = "visible";
		// cat-cry2再生
		let music = new Audio('./cat-cry2.mp3');
		music.play();  // 再生
	} else if (event.key === random_alphabet[2]) {
		// cat3表示
		let img = document.getElementById("cat3");
		img.style.visibility = "visible";
		// cat-cry3再生
		let music = new Audio('./cat-cry3.mp3');
		music.play();  // 再生
	} else if (event.key === random_alphabet[3]) {
		// cat4表示
		let img = document.getElementById("cat4");
		img.style.visibility = "visible";
		// cat-cry4再生
		let music = new Audio('./cat-cry4.mp3');
		music.play();  // 再生
	}
});
