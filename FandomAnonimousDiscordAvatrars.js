function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
discordAvatars = ['Dgray.png', 'Dgreen.jpg', 'Dblue.jpg', 'Dyellow.jpg', 'Dred.png'];

try {
	var profileAvatar = document.querySelector('img[src="https://static.wikia.nocookie.net/663e53f7-1e79-4906-95a7-2c1df4ebbada/thumbnail/width/400/height/400"]');
	profileAvatar.style.background = "url(https://test.fandom.com/ru/wiki/Special:FilePath/"  + choose(discordAvatars) + ")";
} catch {
	console.log("Нет профиля анонима на странице");
}
try {
	var commentsAvatars = document.querySelectorAll(".EntityHeader_avatar__5xZ8w svg");
	for (i=0;i<commentsAvatars.length;i++) {
		commentsAvatars[i].style.background =  "url(https://test.fandom.com/ru/wiki/Special:FilePath/"  + choose(discordAvatars) + ")";
	}
} catch {
	console.log("Нет аватаров анонимов в комментариях");
}
