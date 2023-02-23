const pageBanner = document.createElement("div");
pageBanner.classList.add("pageBanner");
const page = document.querySelector(".flex-fill.container");
page.insertAdjacentHTML("beforebegin", '<div class="pageBanner"><div class="mydivinside">Text</div></div>');
