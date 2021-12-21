// Variables
var x,y,solution,operation;
var xString, yString;



// Métier
function Calculer(x,y,operation){
    var _solution = undefined;
    switch (operation) {
        case '+':
            _solution = x + y;
            break;
        case '-':
            _solution = x-y;
                break;
        default:
            break;
    }
    return _solution;
}


// traitement
function cliquezNombre(Nombre){
    if(x == undefined){
        if(xString == undefined) xString = '';
        xString += Nombre;
    } 
    else {
        if(yString == undefined) yString = '';
        yString += Nombre;
    } 

    Afficher();
}

function Afficher(Nombre){

    var afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(x != undefined && y != undefined && operation != undefined){

        afficheur.value = Nombre;
    }else{
        if(xString != undefined)
        afficheur.value += xString 
        if(operation != undefined)
            afficheur.value += operation     
        if(yString != undefined)
            afficheur.value += yString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        x = parseFloat(xString);
        Afficher();
    }
}

function Egale(){
    x = parseFloat(xString);
    y = parseFloat(yString);
    solution = Calculer(x,y,operation);
    Afficher(solution);
}

function Init(){
    x = undefined;
    y = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    var afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}

  