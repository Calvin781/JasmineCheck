let selectElementsStartingWithA = (array) => {
    let selected = [];
    const letter = "a"
    array.forEach(element => {
        if (element.startsWith(letter) === true) {
            selected.push(element);
        }
    });
    return selected;
}

let selectElementsStartingWithVowel = (array) => {
    let selected = [];
    const vowel = ["a", "o", "i", "e", "u", "y"];
    array.forEach(element => {
        for (let i = 0; i < vowel.length; i++) {

            if (element.startsWith(vowel[i])) {
                selected.push(element);
            }
        }
    })
    return selected;
}

let removeNullElements = (array) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === null) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

let removeNullAndFalseElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === null || array[i] === false) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

let reverseWordsInArray = (array) => {
    let revertedWordInArray = [];
    array.forEach(element => {
        revertedWordInArray.push(element.split("").reverse().join(""));
    })
    return revertedWordInArray;
}

let everyPossiblePair = (array) => {
    let pairedArray = []
    array.sort();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            pairedArray.push([array[i], array[j]]);
        }
    }
    return pairedArray;
}

let allElementsExceptFirstThree = (array) => {
    let arrayWithout3First = [];
    for (let i = 3; i < array.length; i++) {
        arrayWithout3First.push(array[i]);
    }
    return arrayWithout3First;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    let sortByLastLetter = [];
    let final = [];
    array.forEach(element => {
        sortByLastLetter.push(element.split("").reverse().join(""));
        sortByLastLetter.sort();
    });
    sortByLastLetter.sort();

    sortByLastLetter.forEach(element => {
        final.push(element.split("").reverse().join(""));
    });
    return final;
}

let getFirstHalf = (string) => {
    let firstHalf = "";
    for (let i = 0; i < string.length / 2; i++) {

        firstHalf += string.charAt(i);
    }
    return firstHalf;
}

let makeNegative = (number) => {
    if (number > 0) {
        number *= - 1;
    }
    return number;
}

let numberOfPalindromes = (array) => {
    let listToCheckReversed = [];
    let palindromes = [];

    array.forEach(element => {
        listToCheckReversed.push(element.split("").reverse().join(""));
    })

    for (let i = 0; i < array.length; i++) {
        if (array[i] === listToCheckReversed[i]) {
            palindromes.push(array[i]);
        }
    }
    return palindromes.length;
}

let shortestWord = (array) => {
    let shortestWord = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (shortestWord.length > array[i + 1].length) {
            shortestWord = array[i + 1];
        }
    }
    return shortestWord;
}

let longestWord = (array) => {
    let longestWord = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (longestWord.length < array[i + 1].length) {
            longestWord = array[i + 1];
        }
    }
    return longestWord;
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    })
    return sum;
}

let repeatElements = (array) => {
    array.forEach(element => {
        array.push(element);
    });
    return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let avg = 0;
    let sums = 0;
    array.forEach(element => {
        sums += element;
    })
    avg = sums / array.length;
    return avg;
}

let getElementsUntilGreaterThanFive = (array) => {
    let numberMax = 5;
    letTabWithNumberMax = [];
    for (let i = 0; i <= numberMax; i++) {
        letTabWithNumberMax.push(array[i]);
    }
    return letTabWithNumberMax;
}

let convertArrayToObject = (array) => {
    let result = {};
    for (let i = 0; i < array.length; i += 2) {
        result[array[i]] = array[i + 1];
    }
    return result;
}

let getAllLetters = (array) => {
    let lettersTab = [];
    let allLetters = [];
    array.forEach(element => {
        lettersTab.push(element.split(""));
    })
    for (let i = 0; i < lettersTab.length; i++) {
        for (let j = 0; j < lettersTab[i].length; j++) {
            allLetters.push(lettersTab[i][j]);
        }
    }
    return [...new Set(allLetters.sort())];
}

let swapKeysAndValues = (object) => {
    let keys = [...new Set(Object.keys(object))];
    let values = [...new Set(Object.values(object))];
    let swapedKeysValues = {};
    values.forEach((value, i) => swapedKeysValues[value] = keys[i]);
    return swapedKeysValues;
}

let sumKeysAndValues = (object) => {
    let keys = [...new Set(Object.keys(object))];
    let values = [...new Set(Object.values(object))];
    let intKeys = keys.map((element) => {
        return parseInt(element);
    })
    let intKintValueseys = values.map((element) => {
        return parseInt(element);
    })
    const add = (a, b) =>
        a + b
    return intKeys.reduce(add) + intKintValueseys.reduce(add);
}

let removeCapitals = (string) => {
    let tab = string.split("");
    tab.forEach(element => {
        if (element === element.toUpperCase() && element != " ") {
            tab.splice(tab.indexOf(element), 1);
        }
    })
    tab = tab.join('');
    return tab;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return `0${date.getUTCDate()}/0${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
}

let getDomainName = (string) => {
    function getDomainName(mail) {
        mail = mail.split("@");
        mail = mail[1];
        mail = mail.split(".com");
        mail = mail[0];
        return mail;
    }
    return getDomainName(string);
}

let titleize = (string) => {

}

let checkForSpecialCharacters = (string) => {

    function containsSpecialCharacters(str) {
        var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        return regex.test(str);
    }
    return containsSpecialCharacters(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {

    function getFactorial(n) {
        let result = 0
        for (let i = 0; i < n; i++) {
            result += n * n - 1;
        }
        return result;
    }
    return getFactorial(number);
}

let findAnagrams = (string) => {
    return string;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    function getPositionOfLetters(array) {
        let positionOfLetters = [];
        array.forEach(element => {
            positionOfLetters.push(element.toLowerCase().charCodeAt(0)- 96);
        })
        return positionOfLetters;
    }
    return getPositionOfLetters(array);
}
