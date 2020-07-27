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
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
