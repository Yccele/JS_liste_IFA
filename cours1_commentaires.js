// création de la fonction toUpCase (avec pour paramètre string (une chaîne)) qui 
// renvoie le texte visé en majuscule grace à la fonction toUpperCase().

function toUpCase(string){
	return string.toUpperCase();
}

/* 
création de la fonction upperFirst (avec pour paramètre string (une chaîne)) qui renvoie la première 
lettre du texte visé
(ciblé avec charAT , (0) pour la position de la lettre dans le texte) en majuscule (toUpperCase()). 
On utilise la fonction slice() pour récupérer la suite du texte, (1) est le point de départ de l'extraction 
(ici, deuxième caractère). 
*/

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* 
création de la fonction clickDriver (avec pour paramètre item)
on affiche l'objet passé en paramètre dans la console
on cible notre h1 (avec document.getElementByID et son id "name") et on y inclut le nom et prénom avec innerHTML,
on applique notre fonction toUpperCase() = mise en majuscule de l'item nom , "\u0020" = espace
on applique la fonction capitalize() au prénom qui met le 1ère lettre du prenom en majuscule et renvoie l
a suite de la chaine (voir ci-dessous (app.js))


String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
}

on créer la variable contentDesc qui contiendra les informations de chaque persoonne 
contentDesc est vide pour le moment
*/

function clickDriver(item){
	console.log(item);
	document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + item.Prenom.capitalize();
	var contentDesc = document.getElementById("contentDesc"); 
	contentDesc.innerHTML = null;

/* pour chaque élément dans item:
	si l'élément n'est pas nom ou prénom (qui sont déjà affichés):
	on affiche l'élement dans la console
	on crée la variable contentLi qui crée un élément li
	on affiche chaque élémént et attribut 
	contentDesc : élément parent. On ajoute le noeud contentLi sous le parent
*/
	for(key in item){
		if(key !== 'Nom' && key !== "Prenom"){
			console.log(key);
			// console.log(item.key);
			console.log(item[key]);
			var contentLi = document.createElement('li');
			contentLi.innerHTML = key +":"+item[key];
			contentDesc.appendChild(contentLi);
		}
	}
}

// step 1 : récupérer la liste:

// création de l'array maListe
// maListe contient la liste .json
var maListe = [];
maListe = Liste;
// Liste fait référence au fichier JSON contenant tous les étudiants et les infos, var Liste

console.log(maListe);


// var monUL contient la liste des personnes de l'annuaire

var monUl = document.getElementById("listeContainer");
// console.log(monUl);

//afiche la longueur de maListe
console.log(maListe.length);


/* on applique une fonction pour chaque élément de maListe qui est :
	on crée un élément li (pour chaque élément)
	on établit un attribut userId ayant pour valeur item.ID (fichier json, id à ajouter en fin de chaque item)
	on affiche le nom et prenom de la personne selectionnée avec les différentes fonctions crées 
*/
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	// console.log(monLi);
	monLi.setAttribute('userId', item.ID);
	monLi.innerHTML = "<span>"+ toUpCase(item.Nom) + "\u0020" + item.Prenom.capitalize() + " </span>";

// on assigne un évènement à monLI , il est de type "click" et il renvoie à la fonction clickDriver crée précédemment
	monLi.addEventListener("click", function(event){
	    console.log('je clique');
	    // console.log(event.target);
	    // console.log(item);
	    clickDriver(item);
	});

// monUL : parent. monLi se placera en dessous
	monUl.appendChild(monLi);
});



// option 2 (boucle), For
// for (var i = 0; i < maListe.length; i++) {
  	
//   	console.log(maListe[i].Nom);

// }

