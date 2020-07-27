
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    texte1 = "Le javascript";
    texte2 = " est super";
    return texte1 + texte2;

}
let afficherCar5 = (texte) => {
    return texte[4];
}
let afficher9Car = (texte) => {
    let result = ""
    for (let i = 0; i < 9; i++) {
        result += texte[i];
    }
    return result;

}
let majusculeString = (texte) => {
    return texte.toUpperCase();
}
let minusculeString = (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString = (texte) => {
    return texte.trim();

}
let IsString = (texte) => {
    if (typeof (texte) === 'string') {
        return true;
    }
}

let AfficherExtensionString = (texte) => {
    let ext = [];
    ext.push(texte[texte.length - 1]);
    ext.push(texte[texte.length - 2]);
    ext.push(texte[texte.length - 3]);
    ext = `${ext[2]}${ext[1]}${ext[0]}`
    return ext;
}
let NombreEspaceString = (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString = (texte) => {
    texte.split("");
    let invertString = "";
    for (let i = texte.length - 1; i > - 1; i--) {
        invertString += texte[i];
    }
    return invertString;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {

    for (let i = y; i > 0; i--) {
        x *= x * x;
        return x;
    }
}
let valeurAbsolue = (nombre) => {
    if (nombre < 0) {
        return nombre * -1;
    } else {
        return;
    }
}
let valeurAbsolueArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] *= -1;
        }
    } return array;
}
let sufaceCercle = (rayon) => {
    let surface = rayon * rayon * Math.PI;
    return Math.round(surface);
}
let hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
let calculIMC = (poids, taille) => {
    let imc = parseFloat(((poids) / Math.pow(taille, 2)).toFixed(2));
    return imc;
}
