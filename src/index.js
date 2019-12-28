const newData = document.querySelector('#field2');

function columnToDelimiterSeparated () {
  const pastedData = document.querySelector('#field1').value;
  const delimiterChar = document.querySelector('#delimiter').value;
  const modifiedData = pastedData.replace(/\n/g, delimiterChar);
  newData.value = modifiedData;
  selectAndCopy();
}

function delimiterToColumn () {
  const pastedData = document.querySelector('#field1').value;
  const delimiterChar = document.querySelector('#delimiter').value;
  const splittedArr = pastedData.split(delimiterChar);
  const modifiedData = splittedArr.join('\n');
  newData.value = modifiedData;
  selectAndCopy();
}

function insertCharAtRowsStart () {
  const pastedData = document.querySelector('#field1').value;
  const delimiterChar = document.querySelector('#delimiter').value;
  const delimiterCharWithNewLine = '\n' + delimiterChar;
  let modifiedData = pastedData.replace(/\n/g, delimiterCharWithNewLine);
  modifiedData = delimiterChar + modifiedData;
  newData.value = modifiedData;
  selectAndCopy();
}

function deleteDuplicates () {
  const pastedData = document.querySelector('#field1').value;
  const splittedArr = pastedData.split('\n');
  const noDuplicatesArr = [...new Set(splittedArr)];
  const modifiedData = noDuplicatesArr.join('\n');
  newData.value = modifiedData;
  selectAndCopy();
}

function charReplace () {
  const pastedData = document.querySelector('#field1').value;
  const charChangeFromField = document.querySelector('#charChangeFrom').value;
  const specialCharsToCheck = /[|\\{}()[\]^$+*?.]/g;
  const charChangeFrom = charChangeFromField.replace(specialCharsToCheck, '\\$&');
  const charChangeFromGlobal = new RegExp(charChangeFrom, 'g');
  const charChangeTo = document.querySelector('#charChangeTo').value;
  const modifiedData = pastedData.replace(charChangeFromGlobal, charChangeTo);
  newData.value = modifiedData;
  selectAndCopy();
}

function selectAndCopy () {
  newData.select();
  document.execCommand('copy');
  const msg = document.querySelector('.messageOff');
  msg.className = 'messageOn';
  setTimeout(function () {
    msg.className = 'messageOff';
  }, 2500);
}

function clearField () {
  const firstTextField = document.querySelector('#field1');
  firstTextField.value = '';
  firstTextField.select();
}

const colToSepBtn = document.querySelector('#colToSepBtn');
colToSepBtn.addEventListener('click', columnToDelimiterSeparated);
const sepToColBtn = document.querySelector('#sepToColBtn');
sepToColBtn.addEventListener('click', delimiterToColumn);
const firstSymbBtn = document.querySelector('#firstSymbBtn');
firstSymbBtn.addEventListener('click', insertCharAtRowsStart);
const delDuplBtn = document.querySelector('#delDuplBtn');
delDuplBtn.addEventListener('click', deleteDuplicates);
const replaceBtn = document.querySelector('#replaceBtn');
replaceBtn.addEventListener('click', charReplace);
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearField);
