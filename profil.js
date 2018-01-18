var url = new URLSearchParams(document.location.search.substring(1));
var userId = url.get("id"); 

var UserList = Liste;


function checkIndex(elem, ind, array){

	if(parseInt(userId) === elem.ID){
		return true
	}
	else{
		return false
	}
}

var index = UserList.findIndex(checkIndex);


var goodUser = UserList[index];


document.getElementById("name").innerHTML = goodUser.Nom.toUpperCase() + "\u0020" + goodUser.Prenom.capitalize();
	var contentDesc = document.getElementById("contentDesc"); 
	// contentDesc.innerHTML = null;

	for(key in goodUser){

		if(key !== 'Nom' && key !== "Prenom"){
			
			var contentLi = document.createElement('li');
			contentLi.innerHTML = key +":"+goodUser[key];

			contentDesc.appendChild(contentLi);


		}


	}