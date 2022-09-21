function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
standartFandomAvatars = ['https://static.wikia.nocookie.net/1c6b3ae9-b3f6-4094-bf7e-e917a96fa68a/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/4b996cb1-f952-40db-b5f5-91ddd28eba04/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/715c7386-abac-490e-86a5-d32e976d8449/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/5bac10fa-6a64-45e8-8614-6db7d93e19b3/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/c65094cf-3c7e-4df0-8fcb-11c58a58b8d8/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/f8f3e9dc-f4d0-4e0a-a7ba-f375900fd415/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/dc9bf75a-de82-4128-8c0b-5bc1f96c916a/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/fb1b926d-11a7-4a2d-9f3c-2d2cb01a37f2/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/34e861ee-aede-49c8-8870-f29ff1061616/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/d44ef9d3-c463-47d1-bf3e-056f42a5a673/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/13e5e0e5-cfbc-4cb6-b75a-3a134af59f37/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/9973c9ca-e04a-4b80-8249-4acd0f436190/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/b59a3f9a-7bcf-44e3-966b-8b20c303dce8/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/73372f48-c21f-4341-bf2b-5a0356341385/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/da1ea032-f728-4414-bc1f-3f619112d589/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/8d597701-22b4-4588-b081-117058686fd0/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/94978472-5d6d-4b75-9aac-b991713fa6ab/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/cfd73442-d832-42be-aa13-c0e3caaaa6b4/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/8c3803c0-1120-4b2b-b062-c6e2867f4e3c/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/cfd73442-d832-42be-aa13-c0e3caaaa6b4/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/aeaa9379-c046-4aa9-b341-acf33f73d665/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/be5dcc31-caee-449b-ac1d-b0a61e84e05b/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/172865fc-5953-4570-891f-93e01d200fac/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/afaac8a4-8884-4c59-b89e-b4da80c358d7/thumbnail/width/348/height/348',
'https://static.wikia.nocookie.net/82eec3ac-5247-4444-9ef0-e843dc9ae942/thumbnail/width/348/height/348'];

try {
	var profileAvatar = document.querySelector('img[src="https://static.wikia.nocookie.net/663e53f7-1e79-4906-95a7-2c1df4ebbada/thumbnail/width/400/height/400"]');
	profileAvatar.style.background = "url("  + choose(standartFandomAvatars) + ")";
} catch {
	console.log("Нет аватара правиля");
}
try {
	var commentsAvatars = document.querySelectorAll(".EntityHeader_avatar__5xZ8w svg");
	for (i=0;i<commentsAvatars.length;i++) {
		commentsAvatars[i].style.background =  "url("  + choose(standartFandomAvatars) + ")";
	}
} catch {
	console.log("Нет аватаров анонимов в комментариях");
}
