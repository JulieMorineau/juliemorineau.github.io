		let togg1 = document.getElementById("togg1");
		let togg2 = document.getElementById("togg2");
		let d1 = document.getElementById("d1");
		let d2 = document.getElementById("d2");
		let togg3 = document.getElementById("togg3");
		let togg4 = document.getElementById("togg4");
		let d3 = document.getElementById("d3");
		let d4 = document.getElementById("d4");
		let togg5 = document.getElementById("togg5");
		let d5 = document.getElementById("d5");
		let togg6 = document.getElementById("togg6");
		let d6 = document.getElementById("d6");
		let togg7 = document.getElementById("togg7");
		let d7 = document.getElementById("d7");
		let togg8 = document.getElementById("togg8");
		let d8 = document.getElementById("d8");
		
		togg1.addEventListener("click", () => {
			if (getComputedStyle(d1).display != "none") {
				d1.style.display = "none";
			} else {
				d1.style.display = "block";
				d2.style.display = "none"; // Masquer la deuxième carte si elle est affichée
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
			}
			togg1.classList.toggle("active-button"); 
			togg2.classList.remove("active-button"); // Retirer la classe active 
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button");
		});
		
		togg2.addEventListener("click", () => {
			if (getComputedStyle(d2).display != "none") {
				d2.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "block";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.toggle("active-button"); 
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button");
		});
		
		togg3.addEventListener("click", () => {
			if (getComputedStyle(d3).display != "none") {
				d3.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "block";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.toggle("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button");
		});
		
		togg4.addEventListener("click", () => {
			if (getComputedStyle(d4).display != "none") {
				d4.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "block";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button");
			togg4.classList.toggle("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button");  
			togg8.classList.remove("active-button");
		});

	togg5.addEventListener("click", () => {
		if (getComputedStyle(d5).display != "none") {
			d5.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "block";
			d6.style.display = "none";
			d7.style.display = "none";
			d8.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.toggle("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.remove("active-button");  
		togg8.classList.remove("active-button");
	});

	togg6.addEventListener("click", () => {
		if (getComputedStyle(d6).display != "none") {
			d6.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "none";
			d6.style.display = "block";
			d7.style.display = "none";
			d8.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.toggle("active-button"); 
		togg7.classList.remove("active-button"); 
		togg8.classList.remove("active-button"); 
	});

	togg7.addEventListener("click", () => {
		if (getComputedStyle(d7).display != "none") {
			d7.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "none";
			d6.style.display = "none";
			d7.style.display = "block";
			d8.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.toggle("active-button"); 
		togg8.classList.remove("active-button");
	});

togg8.addEventListener("click", () => {
	if (getComputedStyle(d8).display != "none") {
		d8.style.display = "none";
	} else {
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "none";
		d6.style.display = "none";
		d7.style.display = "none";
		d8.style.display = "block";
	}
	togg1.classList.remove("active-button");
	togg2.classList.remove("active-button");
	togg3.classList.remove("active-button");
	togg4.classList.remove("active-button"); 
	togg5.classList.remove("active-button"); 
	togg6.classList.remove("active-button"); 
	togg7.classList.remove("active-button"); 
	togg8.classList.toggle("active-button"); 
});

