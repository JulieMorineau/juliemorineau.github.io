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
		let togg9 = document.getElementById("togg9");
		let d9 = document.getElementById("d9");
		let togg10 = document.getElementById("togg10");
		let d10 = document.getElementById("d10");
		let togg11 = document.getElementById("togg11");
		let d11 = document.getElementById("d11");
		let togg12 = document.getElementById("togg12");
		let d12 = document.getElementById("d12");
		let togg13 = document.getElementById("togg13");
		let d13 = document.getElementById("d13");
		let togg14 = document.getElementById("togg14");
		let d14 = document.getElementById("d14");
		let togg15 = document.getElementById("togg15");
		let d15 = document.getElementById("d15");
		let togg16 = document.getElementById("togg16");
		let d16 = document.getElementById("d16");
		let togg17 = document.getElementById("togg17");
		let d17 = document.getElementById("d17");
		let togg18 = document.getElementById("togg18");
		let d18 = document.getElementById("d18");
		let togg19 = document.getElementById("togg19");
		let d19 = document.getElementById("d19");
		/*let togg20 = document.getElementById("togg20");
		let d20 = document.getElementById("d20");
		let togg21 = document.getElementById("togg21");
		let d21 = document.getElementById("d21");
		let togg22 = document.getElementById("togg22");
		let d22 = document.getElementById("d22");*/
		
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
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
				/*d20.style.display = "none";
				d21.style.display = "none";
				d22.style.display = "none";*/
			}
			togg1.classList.toggle("active-button"); 
			togg2.classList.remove("active-button"); // Retirer la classe active 
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
			/*togg20.classList.remove("active-button"); 
			togg21.classList.remove("active-button");  
			togg22.classList.remove("active-button");*/
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
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.toggle("active-button"); 
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
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
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.toggle("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
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
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button");
			togg4.classList.toggle("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button");  
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
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
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "none";
			d16.style.display = "none";
			d17.style.display = "none";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.toggle("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.remove("active-button");  
		togg8.classList.remove("active-button"); 
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.remove("active-button"); 
		togg16.classList.remove("active-button"); 
		togg17.classList.remove("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
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
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "none";
			d16.style.display = "none";
			d17.style.display = "none";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.toggle("active-button"); 
		togg7.classList.remove("active-button"); 
		togg8.classList.remove("active-button");  
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.remove("active-button"); 
		togg16.classList.remove("active-button"); 
		togg17.classList.remove("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
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
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "none";
			d16.style.display = "none";
			d17.style.display = "none";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.toggle("active-button"); 
		togg8.classList.remove("active-button"); 
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.remove("active-button"); 
		togg16.classList.remove("active-button"); 
		togg17.classList.remove("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
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
		d9.style.display = "none";
		d10.style.display = "none";
		d11.style.display = "none";
		d12.style.display = "none";
		d13.style.display = "none";
		d14.style.display = "none";
		d15.style.display = "none";
		d16.style.display = "none";
		d17.style.display = "none";
		d18.style.display = "none";
		d19.style.display = "none";
	}
	togg1.classList.remove("active-button");
	togg2.classList.remove("active-button");
	togg3.classList.remove("active-button");
	togg4.classList.remove("active-button"); 
	togg5.classList.remove("active-button"); 
	togg6.classList.remove("active-button"); 
	togg7.classList.remove("active-button"); 
	togg8.classList.toggle("active-button");  
	togg9.classList.remove("active-button"); 
	togg10.classList.remove("active-button"); 
	togg11.classList.remove("active-button"); 
	togg12.classList.remove("active-button");
	togg13.classList.remove("active-button"); 
	togg14.classList.remove("active-button"); 
	togg15.classList.remove("active-button"); 
	togg16.classList.remove("active-button"); 
	togg17.classList.remove("active-button"); 
	togg18.classList.remove("active-button"); 
	togg19.classList.remove("active-button"); 
});

togg9.addEventListener("click", () => {
			if (getComputedStyle(d9).display != "none") {
				d9.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none"; // Masquer la deuxième carte si elle est affichée
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "block";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button"); 
			togg2.classList.remove("active-button"); // Retirer la classe active 
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.toggle("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
		});
		
		togg10.addEventListener("click", () => {
			if (getComputedStyle(d10).display != "none") {
				d10.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "block";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button"); 
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.toggle("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
		});
		
		togg11.addEventListener("click", () => {
			if (getComputedStyle(d11).display != "none") {
				d11.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "block";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.toggle("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
		});
		
		togg12.addEventListener("click", () => {
			if (getComputedStyle(d12).display != "none") {
				d12.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "block";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button");  
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.toggle("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
		});

		togg13.addEventListener("click", () => {
			if (getComputedStyle(d13).display != "none") {
				d13.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "block";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.toggle("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button");  
		});
		
		togg14.addEventListener("click", () => {
			if (getComputedStyle(d14).display != "none") {
				d14.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "block";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button");  
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.toggle("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
		});

	togg15.addEventListener("click", () => {
		if (getComputedStyle(d15).display != "none") {
			d15.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "none";
			d6.style.display = "none";
			d7.style.display = "none";
			d8.style.display = "none";
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "block";
			d16.style.display = "none";
			d17.style.display = "none";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.remove("active-button");  
		togg8.classList.remove("active-button"); 
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.toggle("active-button"); 
		togg16.classList.remove("active-button"); 
		togg17.classList.remove("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
	});

	togg16.addEventListener("click", () => {
		if (getComputedStyle(d16).display != "none") {
			d16.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "none";
			d6.style.display = "none";
			d7.style.display = "none";
			d8.style.display = "none";
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "none";
			d16.style.display = "block";
			d17.style.display = "none";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.remove("active-button"); 
		togg8.classList.remove("active-button");  
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.remove("active-button"); 
		togg16.classList.toggle("active-button"); 
		togg17.classList.remove("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
	});

	togg17.addEventListener("click", () => {
		if (getComputedStyle(d17).display != "none") {
			d17.style.display = "none";
		} else {
			d1.style.display = "none";
			d2.style.display = "none";
			d3.style.display = "none";
			d4.style.display = "none";
			d5.style.display = "none";
			d6.style.display = "none";
			d7.style.display = "none";
			d8.style.display = "none";
			d9.style.display = "none";
			d10.style.display = "none";
			d11.style.display = "none";
			d12.style.display = "none";
			d13.style.display = "none";
			d14.style.display = "none";
			d15.style.display = "none";
			d16.style.display = "none";
			d17.style.display = "block";
			d18.style.display = "none";
			d19.style.display = "none";
		}
		togg1.classList.remove("active-button");
		togg2.classList.remove("active-button");
		togg3.classList.remove("active-button");
		togg4.classList.remove("active-button"); 
		togg5.classList.remove("active-button"); 
		togg6.classList.remove("active-button"); 
		togg7.classList.remove("active-button"); 
		togg8.classList.remove("active-button"); 
		togg9.classList.remove("active-button"); 
		togg10.classList.remove("active-button"); 
		togg11.classList.remove("active-button"); 
		togg12.classList.remove("active-button");
		togg13.classList.remove("active-button"); 
		togg14.classList.remove("active-button"); 
		togg15.classList.remove("active-button"); 
		togg16.classList.remove("active-button"); 
		togg17.classList.toggle("active-button"); 
		togg18.classList.remove("active-button"); 
		togg19.classList.remove("active-button"); 
	});

togg18.addEventListener("click", () => {
	if (getComputedStyle(d18).display != "none") {
		d18.style.display = "none";
	} else {
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "none";
		d6.style.display = "none";
		d7.style.display = "none";
		d8.style.display = "none";
		d9.style.display = "none";
		d10.style.display = "none";
		d11.style.display = "none";
		d12.style.display = "none";
		d13.style.display = "none";
		d14.style.display = "none";
		d15.style.display = "none";
		d16.style.display = "none";
		d17.style.display = "none";
		d18.style.display = "block";
		d19.style.display = "none";
	}
	togg1.classList.remove("active-button");
	togg2.classList.remove("active-button");
	togg3.classList.remove("active-button");
	togg4.classList.remove("active-button"); 
	togg5.classList.remove("active-button"); 
	togg6.classList.remove("active-button"); 
	togg7.classList.remove("active-button"); 
	togg8.classList.remove("active-button");  
	togg9.classList.remove("active-button"); 
	togg10.classList.remove("active-button"); 
	togg11.classList.remove("active-button"); 
	togg12.classList.remove("active-button");
	togg13.classList.remove("active-button"); 
	togg14.classList.remove("active-button"); 
	togg15.classList.remove("active-button"); 
	togg16.classList.remove("active-button"); 
	togg17.classList.remove("active-button"); 
	togg18.classList.toggle("active-button"); 
	togg19.classList.remove("active-button"); 
});

togg19.addEventListener("click", () => {
			if (getComputedStyle(d19).display != "none") {
				d19.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none"; // Masquer la deuxième carte si elle est affichée
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "block";
			}
			togg1.classList.remove("active-button"); 
			togg2.classList.remove("active-button"); // Retirer la classe active 
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.toggle("active-button"); 
		});
		
	/*	togg20.addEventListener("click", () => {
			if (getComputedStyle(d20).display != "none") {
				d20.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
				d20.style.display = "block";
				d21.style.display = "none";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button"); 
			togg3.classList.remove("active-button");
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
			togg20.classList.toggle("active-button"); 
			togg21.classList.remove("active-button"); 
		});
		
		togg21.addEventListener("click", () => {
			if (getComputedStyle(d21).display != "none") {
				d21.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
				d20.style.display = "none";
				d21.style.display = "block";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
			togg20.classList.remove("active-button"); 
			togg21.classList.toggle("active-button"); 
		});

		togg22.addEventListener("click", () => {
			if (getComputedStyle(d22).display != "none") {
				d22.style.display = "none";
			} else {
				d1.style.display = "none";
				d2.style.display = "none";
				d3.style.display = "none";
				d4.style.display = "none";
				d5.style.display = "none";
				d6.style.display = "none";
				d7.style.display = "none";
				d8.style.display = "none";
				d9.style.display = "none";
				d10.style.display = "none";
				d11.style.display = "none";
				d12.style.display = "none";
				d13.style.display = "none";
				d14.style.display = "none";
				d15.style.display = "none";
				d16.style.display = "none";
				d17.style.display = "none";
				d18.style.display = "none";
				d19.style.display = "none";
				d20.style.display = "none";
				d21.style.display = "none";
				d22.style.display = "block";
			}
			togg1.classList.remove("active-button");
			togg2.classList.remove("active-button");
			togg3.classList.remove("active-button"); 
			togg4.classList.remove("active-button"); 
			togg5.classList.remove("active-button"); 
			togg6.classList.remove("active-button"); 
			togg7.classList.remove("active-button"); 
			togg8.classList.remove("active-button"); 
			togg9.classList.remove("active-button"); 
			togg10.classList.remove("active-button"); 
			togg11.classList.remove("active-button"); 
			togg12.classList.remove("active-button");
			togg13.classList.remove("active-button"); 
			togg14.classList.remove("active-button"); 
			togg15.classList.remove("active-button"); 
			togg16.classList.remove("active-button"); 
			togg17.classList.remove("active-button"); 
			togg18.classList.remove("active-button"); 
			togg19.classList.remove("active-button"); 
			togg20.classList.remove("active-button"); 
			togg21.classList.remove("active-button"); 
			togg21.classList.toggle("active-button");
		});*/



