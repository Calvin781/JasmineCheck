let CreationTableauLangages = () => {
    return ['Html', 'CSS', 'Java', 'PHP'];
}

let CreationTableauNombres = () => {
    return [0, 1, 2, 3, 4, 5];
}

let RemplacementElement = (langages) => {
    langages.splice(2, 1, "Javascript");
    return langages;
}

let AjoutElementLangages = (langages) => {
    langages.push("Ruby", "Python");
    return langages;
}

let AjoutElementNombres = (nombres) => {
    nombres.splice(0, 0, parseInt("-2"), parseInt("-1"));
    return nombres;
}

let SuppressionPremierElement = (langages) => {
    langages.splice(0, 1);
    return langages;
}

let SuppressionDernierElement = (langages) => {
    langages.splice(langages.length - 1, 1);
    return langages;
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {

    return reseaux_sociaux_chaine.split(",");

}

let ConversionTableauChaine = (langages) => {
    // return `${langages[0]},${langages[1]},${langages[2]},${langages[3]}`
    return langages.join();
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.reverse();
}
