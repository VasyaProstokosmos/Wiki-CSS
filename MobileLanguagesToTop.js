//Оригинальный скрипт частично взят с английской Terraria Wiki (Gamepedia)
//К данному скрипту также прилагается стиль с аналогичным названием
$(document).ready(function() {
var isLangHiden = true;
(function(){
	var $languages = $('.article-footer-languages');
	if(!$languages.length){ return; }
	var $header = $languages;
	console.log($header);
	$('.skin-fandommobile div.wiki-page-header__title-wrapper').append($header.html());
	$("#fandom-mobile-wrapper > div.wiki-page-header > div > ul > ul > li > a").hide();
	//$("#fandom-mobile-wrapper > div.wiki-page-header > div > ul > ul > li > a").show();
})();
//#fandom-mobile-wrapper > div.wiki-page-header > div > div > span
$("#fandom-mobile-wrapper > div.wiki-page-header > div > div > span").click(function(){
	if (isLangHiden == true) {
		$("#fandom-mobile-wrapper > div.wiki-page-header > div > ul > ul > li > a").show();
		isLangHiden = false;
	} else {
		$("#fandom-mobile-wrapper > div.wiki-page-header > div > ul > ul > li > a").hide();
		isLangHiden = true;
	}
});
});
