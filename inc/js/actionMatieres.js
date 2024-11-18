		let togg1 = document.getElementById("togg1");
		let togg2 = document.getElementById("togg2");
		let d1 = document.getElementById("d1");
		let d2 = document.getElementById("d2");
		let togg3 = document.getElementById("togg3");
		let togg4 = document.getElementById("togg4");
		let d3 = document.getElementById("d3");
		let d4 = document.getElementById("d4");
		
		togg1.addEventListener("click", () => {
			if (getComputedStyle(d1).display != "none") {
				d1.style.display = "none";
			} else {
				d1.style.display = "block";
				d2.style.display = "none"; // Masquer la deuxième carte si elle est affichée
				d3.style.display = "none";
				d4.style.display = "none";
			}
			togg1.classList.toggle("active-button"); 
			togg2.classList.remove("active-button"); // Retirer la classe active 
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button");
		});
		
		togg2.addEventListener("click", () => {
			if (getComputedStyle(d2).display != "none") {
				d2.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "block";
				d3.style.display = "none";
				d4.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.toggle("active-button"); 
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button");
		});
		
		togg3.addEventListener("click", () => {
			if (getComputedStyle(d3).display != "none") {
				d3.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "block";
				d4.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.toggle("active-button"); 
			togg4.classList.remove("active-button");
		});
		
		togg4.addEventListener("click", () => {
			if (getComputedStyle(d4).display != "none") {
				d4.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "block";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button");
			togg4.classList.toggle("active-button");
		});

	