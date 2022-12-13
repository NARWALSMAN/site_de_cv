//Ce code est fait pour fonctionner avec celui du document html PageTest.hml
// il est inspiré d'un code openclassroom


//On pointe sur l'élément de message désigné par son id (cf le code html)
//et on l'affecte à une constante déclarée par const
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");

//Une variable age est défini avec let.
//une autre pour une age limite utilisé dans le test
let age;
let ageOK = 18;


//Cette fonction affichera le message de validation
function autoriser(){
  espaceMessage.innerHTML = "Vous pouvez consulter ces pages :)";
}

//Cette fonction affichera un message d'erreur
function refuser(){
  alert("Les mineurs ne peuvent pas consulter ces pages :(");
}



function onConfirm(){

  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
    return;
  }

  //====Code à rédiger ici======

  //si non majeur apeller la fonction refuser(), sinon apeller la fonction valider()

  //=======/Code à rédiger ici======


  //On vide le champ de saisie
  ageInput.value = "";
}



//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener('click', onConfirm);
