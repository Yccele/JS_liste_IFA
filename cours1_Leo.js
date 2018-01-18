//helpers 
function toUpCase(string){
	return string.toUpperCase();
}
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clicName(nom, item) {
	nom.addEventListener("click", function(event){
	    clickDriver(item);
	});
}

function clickDriver(item){
	//window.location.href = "http://localhost:8888/JS/TP1/profil.html?id=" + item.ID;
	document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + item.Prenom.capitalize();
	var contentDesc = document.getElementById("contentDesc"); 
	contentDesc.innerHTML = null;

	for(key in item){
		if(key !== 'Nom' && key !== "Prenom" && key !== ""){
			console.log(key);
			// console.log(item.key);
			console.log(item[key]);
			var contentLi = document.createElement('li');
			contentLi.innerHTML = key +" : "+item[key];

			contentDesc.appendChild(contentLi);
		}
	}
}

// step 1 : récupérer la liste:
var maListe = [];
maListe = Liste;

console.log(maListe);

// step 2 : trouver le bon container
var monUl = document.getElementById("listeContainer");

console.log(maListe.length);

// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
function afficherListe() {
	monUl.innerHTML = "";
	// Parcourir le JSON
	maListe.forEach(function(item) {
		var monLi = document.createElement('li');
		// console.log(monLi);
		monLi.setAttribute('userId', item.ID);
		monLi.innerHTML = "<span>"+ toUpCase(item.Nom) + "\u0020" + item.Prenom.capitalize() + " </span>";

		// ajout de la gestion de l'event click
		monUl.appendChild(monLi);
		clicName(monLi, item);
	});
}

var form = document.getElementById("form-id");
var zone_inputs = document.getElementById('ajoutInput');

// Ajout d'un utilisateur
function addUser() {
	
	var listeForm = Liste[0];
	console.log(form);
	
	for (key in listeForm) {
		console.log(key);
		var input_ajoute = document.createElement("input");
		input_ajoute.setAttribute("placeholder", key);
		input_ajoute.setAttribute("name", key);
		input_ajoute.setAttribute("class", "input_ajoute");
		zone_inputs.appendChild(input_ajoute);
	}

	var bouton_ajoute = document.createElement("button")
	bouton_ajoute.setAttribute("value", "OK");
	bouton_ajoute.setAttribute("onClick", "valider_user(); return false");
	bouton_ajoute.innerHTML = "OK";
	zone_inputs.appendChild(bouton_ajoute);	
}

function valider_user() {
	var newUser = {};
	for(i = 0; i < form.elements.length; i++ ){
		if(form.elements[i].value !== "Ajouter" && form.elements[i].value !== "supp" && form.elements[i].value !== "OK"){
			console.log('form.element: ' + form.elements[i].value);
			console.log(form.elements[i].name);
			newUser[form.elements[i].name] = form.elements[i].value;
		}
	}
	//console.log(newUser);
	maListe.push(newUser);
	var li = document.createElement("li");
	li.innerHTML = newUser.Nom.toUpperCase() + "\u0020" + newUser.Prenom.capitalize();
	monUl.appendChild(li);

	clicName(li, newUser);
}

// Supprimer user
function removeUser() {

	var userRemove = {};
	for (i = 0; i < form.elements.length; i++) {
		if(form.elements[i].type !== "submit"){
			userRemove[form.elements[i].name] = form.elements[i].value;
		}
	}
	//console.log(userRemove);	
	for (j = 0; j < Liste.length; j++) {
		//console.log(Liste[j].Nom);
		if (userRemove.Nom.toUpperCase() === Liste[j].Nom.toUpperCase() && userRemove.Prenom.toUpperCase() === Liste[j].Prenom.toUpperCase()) {
			Liste.splice(j, 1);
			afficherListe();
			break;			
		} else {
			//console.log(userRemove.Nom.toUpperCase() + ", liste nom : " + Liste[j].Nom.toUpperCase());
			console.log(j + " Non trouvé");		
		}
	}
}	

