let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d9 = document.getElementById("d9");
let d20 = document.getElementById("d20");
let togg2 = document.getElementById("togg2");
let d4 = document.getElementById("d4");
let d8 = document.getElementById("d8");
let d12 = document.getElementById("d12");
let d13 = document.getElementById("d13");
let togg3 = document.getElementById("togg3");
let d10 = document.getElementById("d10");
let d16 = document.getElementById("d16");
let d52 = document.getElementById("d52");
let togg4 = document.getElementById("togg4");
let d11 = document.getElementById("d11");
let d18 = document.getElementById("d18");
let d29 = document.getElementById("d29");
let togg5 = document.getElementById("togg5");
let d14 = document.getElementById("d14");
let d15 = document.getElementById("d15");
let togg6 = document.getElementById("togg6");
let d27 = document.getElementById("d27");
let togg7 = document.getElementById("togg7");
let d6 = document.getElementById("d6");
let d17 = document.getElementById("d17");
let togg8 = document.getElementById("togg8");
let d25 = document.getElementById("d25");
let d26 = document.getElementById("d26");
let togg9 = document.getElementById("togg9");
let d7 = document.getElementById("d7");
let d35 = document.getElementById("d35");
let d37 = document.getElementById("d37");
let togg10 = document.getElementById("togg10");
let d21 = document.getElementById("d21");
let d22 = document.getElementById("d22");
let togg11 = document.getElementById("togg11");
let d23 = document.getElementById("d23");
let togg12 = document.getElementById("togg12");
let d19 = document.getElementById("d19");
let d34 = document.getElementById("d34");
let togg13 = document.getElementById("togg13");
let d24 = document.getElementById("d24");
let d30 = document.getElementById("d30");
let togg14 = document.getElementById("togg14");
let d38 = document.getElementById("d38");
let togg15 = document.getElementById("togg15");
let d39 = document.getElementById("d39");
let togg16 = document.getElementById("togg16");
let d40 = document.getElementById("d40");
let togg17 = document.getElementById("togg17");
let d41 = document.getElementById("d41");
let togg18 = document.getElementById("togg18");
let d42 = document.getElementById("d42");
let d43 = document.getElementById("d43");
let d44 = document.getElementById("d44");
let togg19 = document.getElementById("togg19");
let d45 = document.getElementById("d45");
let d46 = document.getElementById("d46");
let d47 = document.getElementById("d47");
let togg20 = document.getElementById("togg20");
let d48 = document.getElementById("d48");
let d49 = document.getElementById("d49");
let d50 = document.getElementById("d50");
let d51 = document.getElementById("d51");
let togg21 = document.getElementById("togg21");
let d53 = document.getElementById("d53");

togg1.addEventListener("click", () => {
	if (getComputedStyle(d1,d2,d3,d9,d20).display != "none") {
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "none";
		d9.style.display = "none";
		d20.style.display = "none";
		d10.style.display = "block";
		d16.style.display = "block";
		d52.style.display = "block";
		d53.style.display = "block";
	} else {
		d1.style.display = "block";
		d2.style.display = "block";
		d3.style.display = "block";
		d9.style.display = "block";
		d20.style.display = "block";
		d10.style.display = "none";
		d16.style.display = "none";
		d52.style.display = "none";
		d53.style.display = "none";
	}
	togg1.classList.toggle("active-button");
});

togg2.addEventListener("click", () => {
	if (getComputedStyle(d4,d8,d12,d13).display != "none") {
		d4.style.display = "none";
		d8.style.display = "none";
		d12.style.display = "none";
		d13.style.display = "none";
		d3.style.display = "block";
		d20.style.display = "block";
		d1.style.display = "block";
	} else {
		d4.style.display = "block";
		d8.style.display = "block";
		d12.style.display = "block";
		d13.style.display = "block";
		d3.style.display = "none";
		d20.style.display = "none";
		d1.style.display = "none";
}
		togg2.classList.toggle("active-button");
});

togg3.addEventListener("click", () => {
	if (getComputedStyle(d10,d16,d52).display != "none") {
		d10.style.display = "none";
		d16.style.display = "none";
		d52.style.display = "none";
		d24.style.display = "block";
		d27.style.display = "block";
		d30.style.display = "block";
	} else {
		d10.style.display = "block";
		d16.style.display = "block";
		d52.style.display = "block";
		d18.style.display = "none";
		d24.style.display = "none";
		d27.style.display = "none";
		d30.style.display = "none";
	}
	togg3.classList.toggle("active-button");
});

togg4.addEventListener("click", () => {
	if (getComputedStyle(d11,d18).display != "none") {
		d11.style.display = "none";
		d18.style.display = "none";
		d1.style.display = "block";
		d3.style.display = "block";
		d9.style.display = "block";
		d36.style.display = "block";
	} else {
		d11.style.display = "block";
		d18.style.display = "block";
		d1.style.display = "none";
		d3.style.display = "none";
		d9.style.display = "none";
		d36.style.display = "none";
	}
	togg4.classList.toggle("active-button");
});


togg5.addEventListener("click", () => {
	if (getComputedStyle(d14,d15).display != "none") {
		d14.style.display = "none";
		d15.style.display = "none";
		d13.style.display = "block";
	} else {
		d14.style.display = "block";
		d15.style.display = "block";
		d13.style.display = "none";
	}
		togg5.classList.toggle("active-button");
});

togg6.addEventListener("click", () => {
	if (getComputedStyle(d27,d29).display != "none") {
		d27.style.display = "none";
		d29.style.display = "none";
		d36.style.display = "none";
		d35.style.display = "block";

	} else {
		d27.style.display = "block";
		d29.style.display = "block";
		d36.style.display = "block";
		d35.style.display = "none";
	}
		togg6.classList.toggle("active-button");
});

togg7.addEventListener("click", () => {
	if (getComputedStyle(d6,d17).display != "none") {
		d6.style.display = "none";
		d17.style.display = "none";
		d2.style.display = "block";
		d12.style.display = "block";
		d4.style.display = "block";
		d14.style.display = "block";
		d15.style.display = "block";
		d8.style.display = "block";
		d45.style.display = "block";
		d46.style.display = "block";
		d47.style.display = "block";
	} else {
		d6.style.display = "block";
		d17.style.display = "block";
		d2.style.display = "none";
		d4.style.display = "none";
		d12.style.display = "none";
		d14.style.display = "none";
		d15.style.display = "none";
		d8.style.display = "none";
		d45.style.display = "none";
		d46.style.display = "none";
		d47.style.display = "none";
	}
		togg7.classList.toggle("active-button");
});

togg8.addEventListener("click", () => {
	if (getComputedStyle(d25,d26).display != "none") {
		d25.style.display = "none";
		d26.style.display = "none";
		d17.style.display = "block";
	} else {
		d25.style.display = "block";
		d26.style.display = "block";
		d17.style.display = "none";
	}
		togg8.classList.toggle("active-button");
});

togg9.addEventListener("click", () => {
	if (getComputedStyle(d7,d35,d37).display != "none") {
		d7.style.display = "none";
		d35.style.display = "none";
		d37.style.display = "none";
		d21.style.display = "block";
		d22.style.display = "block";
	} else {
		d7.style.display = "block";
		d35.style.display = "block";
		d37.style.display = "block";
		d21.style.display = "none";
		d22.style.display = "none";
	}
		togg9.classList.toggle("active-button");
});

togg10.addEventListener("click", () => {
	if (getComputedStyle(d21,d22).display != "none") {
		d21.style.display = "none";
		d22.style.display = "none";
		d48.style.display = "block";
		d49.style.display = "block";
		d50.style.display = "block";
		d51.style.display = "block";
	} else {
		d21.style.display = "block";
		d22.style.display = "block";
		d48.style.display = "none";
		d49.style.display = "none";
		d50.style.display = "none";
		d51.style.display = "none";
	}
		togg10.classList.toggle("active-button");
});

togg11.addEventListener("click", () => {
	if (getComputedStyle(d23).display != "none") {
		d23.style.display = "none";
		d7.style.display = "block";
		d37.style.display = "block";
	} else {
		d23.style.display = "block";
		d7.style.display = "none";
		d37.style.display = "none";
	}
		togg11.classList.toggle("active-button");
});

togg12.addEventListener("click", () => {
	if (getComputedStyle(d19,d34).display != "none") {
		d19.style.display = "none";
		d34.style.display = "none";
		d25.style.display = "block";
		d26.style.display = "block";
	} else {
		d19.style.display = "block";
		d34.style.display = "block";
		d25.style.display = "none";
		d26.style.display = "none";
	}
		togg12.classList.toggle("active-button");
});

togg13.addEventListener("click", () => {
	if (getComputedStyle(d24,d30).display != "none") {
		d24.style.display = "none";
		d30.style.display = "none";
		d6.style.display = "block";
		d11.style.display = "block";
		d17.style.display = "block";
		d34.style.display = "block";
		d18.style.display = "block";
		d23.style.display = "block";
		d29.style.display = "block";
		d19.style.display = "block";
		d35.style.display = "block";
		d38.style.display = "block";
		d39.style.display = "block";
		d40.style.display = "block";
		d41.style.display = "block";
		d42.style.display = "block";
		d43.style.display = "block";
		d44.style.display = "block";
	} else {
		d24.style.display = "block";
		d30.style.display = "block";
		d6.style.display = "none";
		d11.style.display = "none";
		d17.style.display = "none";
		d34.style.display = "none";
		d19.style.display = "none";
		d23.style.display = "none";
		d29.style.display = "none";
		d35.style.display = "none";
		d38.style.display = "none";
		d39.style.display = "none";
		d40.style.display = "none";
		d41.style.display = "none";
		d42.style.display = "none";
		d43.style.display = "none";
		d44.style.display = "none";
	}
		togg13.classList.toggle("active-button");
});

togg14.addEventListener("click", () => {
	if (getComputedStyle(d38).display != "none") {
		d38.style.display = "none";
	} else {
		d38.style.display = "block";
	}
		togg14.classList.toggle("active-button");
});

togg15.addEventListener("click", () => {
	if (getComputedStyle(d39).display != "none") {
		d39.style.display = "none";
	} else {
		d39.style.display = "block";
	}
		togg15.classList.toggle("active-button");
});

togg16.addEventListener("click", () => {
	if (getComputedStyle(d40).display != "none") {
		d40.style.display = "none";
	} else {
		d40.style.display = "block";
	}
		togg16.classList.toggle("active-button");
});

togg17.addEventListener("click", () => {
	if (getComputedStyle(d41).display != "none") {
		d41.style.display = "none";
	} else {
		d41.style.display = "block";
	}
		togg17.classList.toggle("active-button");
});

togg18.addEventListener("click", () => {
	if (getComputedStyle(d42,d43,d44).display != "none") {
		d42.style.display = "none";
		d43.style.display = "none";
		d44.style.display = "none";
	} else {
		d42.style.display = "block";
		d43.style.display = "block";
		d44.style.display = "block";
	}
		togg18.classList.toggle("active-button");
});

togg19.addEventListener("click", () => {
	if (getComputedStyle(d45,d46,d47).display != "none") {
		d45.style.display = "none";
		d46.style.display = "none";
		d47.style.display = "none";
	} else {
		d45.style.display = "block";
		d46.style.display = "block";
		d47.style.display = "block";
	}
		togg19.classList.toggle("active-button");
});

togg20.addEventListener("click", () => {
	if (getComputedStyle(d48,d49,d50,d51).display != "none") {
		d48.style.display = "none";
		d49.style.display = "none";
		d50.style.display = "none";
		d51.style.display = "none";
	} else {
		d48.style.display = "block";
		d49.style.display = "block";
		d50.style.display = "block";
		d51.style.display = "block";
	}
		togg20.classList.toggle("active-button");
});

togg21.addEventListener("click", () => {
	if (getComputedStyle(d53).display != "none") {
		d53.style.display = "none";
	} else {
		d53.style.display = "block";
	}
		togg21.classList.toggle("active-button");
});




