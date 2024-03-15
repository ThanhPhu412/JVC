const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}:"<>?[];,./\'\\';

function generatePassword() {
  let passwordLength = 12; // Default length
  let includeUppercase = document.getElementById('uppercase').checked;
  let includeLowercase = document.getElementById('lowercase').checked;
  let includeNumbers = document.getElementById('numbers').checked;
  let includeSymbols = document.getElementById('symbols').checked;
  let allowedChars = '';
  let generatedPassword = '';

  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
  }

  document.getElementById('passwordOutput').value = generatedPassword;
}

function copyPassword() {
  let password = document.getElementById('passwordOutput');
  password.select();
  document.execCommand('copy');
}