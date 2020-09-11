// function sound() {
// 	// [ID:sound-file]の音声ファイルを再生[play()]する
// 	// document.getElementById('#sound-file').play() ;
// 	var music = new Audio('./sound/wagahai.mp3');
// 	music.play();  // 再生

// }

document.addEventListener('keyup', (event) => {
	if (event.key === 'q') {
		var music = new Audio('./sound/wagahai_neko.mp3');
		music.play();  // 再生
	}
});