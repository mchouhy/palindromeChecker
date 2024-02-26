let checkBtn = document.getElementById('check-btn');
let result = document.getElementById('result');

cleanString = (string) => {
    let cleanString = string.replace(/[^a-z\S]/gi, '');
    return cleanString;
}

isPalindrome = (string) => {
    const cleanedString = cleanString(string);
    const invertedString = cleanedString.split('').reverse().join('');
    return cleanedString.toLowerCase() === invertedString.toLowerCase();
}

checkPalindrome = () => {
    const stringToCheck = document.getElementById('text-input').value;

    if(stringToCheck.trim() === "") {
        return alert ("Please input a value");
    }

    if (isPalindrome(stringToCheck)) {
        result.innerHTML = `${stringToCheck} is a palindrome`;
    } else {
        result.innerHTML = `${stringToCheck} is not a palindrome`;
    }
}

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkPalindrome();
})


