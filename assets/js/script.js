document.getElementById('boutonClick').onclick = resultat;

function resultat(){

    var sizeF = document.getElementById('sizeFoot').value;
    var birthdaY = document.getElementById('birthdaYear').value;

    var sizeFx2 = sizeF * 2;
    var sizeFx25 = sizeFx2 + 5;
    var sizeFx25x50 = sizeFx25 * 50;
    var sousBirthdaY = sizeFx25x50 - birthdaY;
    var result = sousBirthdaY + 1769;

    alert('le résultat est : ' + result);

    
}