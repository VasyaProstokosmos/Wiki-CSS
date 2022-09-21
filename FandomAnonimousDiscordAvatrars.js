var profileAvatar = document.querySelector('img[src="https://static.wikia.nocookie.net/663e53f7-1e79-4906-95a7-2c1df4ebbada/thumbnail/width/400/height/400"]');
var commentsAvatars = document.querySelectorAll(".EntityHeader_avatar__5xZ8w svg");
console.log(profileAvatar);
console.log(commentsAvatars);

discordAvatars = ['Dgray.png', 'Dgreen.jpg', 'Dblue.jpg', 'Dyellow.jpg', 'Dred.png'];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

profileAvatar.style.background = "url(https://test.fandom.com/ru/wiki/Special:FilePath/"  + choose(discordAvatars) + ")";

for (i=0;i<commentsAvatars.length;i++) {
	commentsAvatars[i].style.background =  "url(https://test.fandom.com/ru/wiki/Special:FilePath/"  + choose(discordAvatars) + ")";
}
