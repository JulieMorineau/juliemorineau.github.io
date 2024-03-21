		// Fonction pour ajouter ou supprimer la classe "clicked" lorsqu'un élément est cliqué
		function toggleClickedClass(element) {
			element.classList.toggle('clicked');  // Ajoute ou supprime la classe "clicked"
		}
		
		// Récupérer tous les éléments avec la classe "element", "elementdouble" et "elementtriple"
		const elements = document.querySelectorAll('.element, .elementdouble, .elementtriple');
		
		// Ajouter un gestionnaire de clic à chaque élément
		elements.forEach(function (element) {
			element.addEventListener('click', function () {
				toggleClickedClass(this);  // Appeler la fonction pour ajouter/supprimer la classe
			});
		});


