// function sound() {
// 	// [ID:sound-file]の音声ファイルを再生[play()]する
// 	// document.getElementById('#sound-file').play() ;
// 	var music = new Audio('./sound/wagahai.mp3');
// 	music.play();  // 再生

// }

// キーボード入力イベントで、画像表示と音声再生を行う
document.addEventListener('keyup', (event) => {
	if (event.key === 'q') {
		// cat1表示
		var img = document.getElementById("cat1");
		img.style.visibility = "visible";
		// cat-cry1再生
		var music = new Audio('./sound/cat-cry1.mp3');
		music.play();  // 再生
	} else if (event.key === 'k') {
		// cat2表示
		var img = document.getElementById("cat2");
		img.style.visibility = "visible";
		// cat-cry2再生
		var music = new Audio('./sound/cat-cry2.mp3');
		music.play();  // 再生
	} else if (event.key === 'c') {
		// cat3表示
		var img = document.getElementById("cat3");
		img.style.visibility = "visible";
		// cat-cry3再生
		var music = new Audio('./sound/cat-cry3.mp3');
		music.play();  // 再生
	} else if (event.key === 'r') {
		// cat4表示
		var img = document.getElementById("cat4");
		img.style.visibility = "visible";
		// cat-cry4再生
		var music = new Audio('./sound/cat-cry4.mp3');
		music.play();  // 再生
	}
});

