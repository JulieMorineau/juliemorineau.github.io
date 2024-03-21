	let togg1 = document.getElementById("togg1");
	let togg2 = document.getElementById("togg2");
	let d1 = document.getElementById("d1");
	let d4 = document.getElementById("d4");
	let d2 = document.getElementById("d2");
	let d5 = document.getElementById("d5");
	let togg3 = document.getElementById("togg3");
	let d3 = document.getElementById("d3");
	
	togg1.addEventListener("click", () => {
		if (getComputedStyle(d1,d4).display != "none") {
			d1.style.display = "none";
			d4.style.display = "none";
		} else {
			d1.style.display = "block";
			d4.style.display = "block";
		}
	togg1.classList.toggle("active-button"); 
	});
	
	togg2.addEventListener("click", () => {
		if (getComputedStyle(d2,d5).display != "none") {
			d2.style.display = "none";
			d5.style.display = "none";
		} else {
			d2.style.display = "block";
			d5.style.display = "block";
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
	
	