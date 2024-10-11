let home = document.getElementById("home");
let syllabus_home = document.getElementById("Syllabus");
let ip_home = document.getElementById("ip");
let eco_home = document.getElementById("eco");
let bst_home = document.getElementById("bst");

let syllabus_open = document.querySelector(".syllabus");
let ip_open = document.querySelector(".ip");
let eco_open = document.querySelector(".eco");
let bst_open = document.querySelector(".bst");

let syllabus_close = document.getElementById("syllabus_hide");
let ip_close = document.getElementById("ip_hide");
let eco_close = document.getElementById("eco_hide");
let bst_close = document.getElementById("bst_hide");

// open subjects

syllabus_home.addEventListener("click", () => {
	home.classList.add("hide");
	syllabus_open.classList.remove("hide");
});

ip_home.addEventListener("click", () => {
	home.classList.add("hide");
	ip_open.classList.remove("hide");
});

eco_home.addEventListener("click", () => {
	home.classList.add("hide");
	eco_open.classList.remove("hide");
});

bst_home.addEventListener("click", () => {
	home.classList.add("hide");
	bst_open.classList.remove("hide");
});

// close subjects

syllabus_close.addEventListener("click", () => {
	syllabus_open.classList.add("hide");
	home.classList.remove("hide");
});

ip_close.addEventListener("click", () => {
	ip_open.classList.add("hide");
	home.classList.remove("hide");
});

eco_close.addEventListener("click", () => {
	eco_open.classList.add("hide");
	home.classList.remove("hide");
});

bst_close.addEventListener("click", () => {
	bst_open.classList.add("hide");
	home.classList.remove("hide");
});
