	let togg1 = document.getElementById("togg1");
	let togg2 = document.getElementById("togg2");
	let d1 = document.getElementById("d1");
	let d2 = document.getElementById("d2");
	let togg3 = document.getElementById("togg3");
	let togg4 = document.getElementById("togg4");
	let d3 = document.getElementById("d3");
	let d4 = document.getElementById("d4");
	let togg5 = document.getElementById("togg5");
	let togg6 = document.getElementById("togg6");
	let d5 = document.getElementById("d5");
	let d6 = document.getElementById("d6");
	let togg7 = document.getElementById("togg7");
	let d7 = document.getElementById("d7");
	
	togg1.addEventListener("click", () => {
		if (getComputedStyle(d1).display != "none") {
			d1.style.display = "none";
		} else {
			d1.style.display = "block";
		}
	togg1.classList.toggle("active-button"); 
	});
	
	togg2.addEventListener("click", () => {
		if (getComputedStyle(d2).display != "none") {
			d2.style.display = "none";
		} else {
			d2.style.display = "block";
		}
		togg2.classList.toggle("active-button"); 
	});
	
	togg3.addEventListener("click", () => {
		if (getComputedStyle(d3).display != "none") {
			d3.style.display = "none";
		} else {
			d3.style.display = "block";
		}
		togg3.classList.toggle("active-button"); 
	});
	
	togg4.addEventListener("click", () => {
		if (getComputedStyle(d4).display != "none") {
			d4.style.display = "none";
		} else {
			d4.style.display = "block";
		}
		togg4.classList.toggle("active-button"); 
	});
	
	togg5.addEventListener("click", () => {
		if (getComputedStyle(d5).display != "none") {
			d5.style.display = "none";
		} else {
			d5.style.display = "block";
		}
		togg5.classList.toggle("active-button"); 
	});
	
	togg6.addEventListener("click", () => {
		if (getComputedStyle(d6).display != "none") {
			d6.style.display = "none";
		} else {
			d6.style.display = "block";
		}
		togg6.classList.toggle("active-button"); 
	});
	
	togg7.addEventListener("click", () => {
		if (getComputedStyle(d7).display != "none") {
			d7.style.display = "none";
		} else {
			d7.style.display = "block";
		}
		togg7.classList.toggle("active-button"); 
	});

	