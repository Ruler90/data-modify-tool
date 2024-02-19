const pastedDataTextField = document.querySelector('#field1');
const newDataTextField = document.querySelector('#field2');
const delimiterChar = document.querySelector('#delimiter');
const charChangeFromInput = document.querySelector('#charChangeFromInput');
const charChangeToInput = document.querySelector('#charChangeToInput');
const columnToSeparatorBtn = document.querySelector('#columnToSeparatorBtn');
const separatorToColumnBtn = document.querySelector('#separatorToColumnBtn');
const startRowWithBtn = document.querySelector('#startRowWithBtn');
const removeDuplicatesBtn = document.querySelector('#removeDuplicatesBtn');
const replaceBtn = document.querySelector('#replaceBtn');
const clearBtn = document.querySelector('#clearBtn');
const msg = document.querySelector('.message');

function columnToDelimiterSeparated () {
  const modifiedData = pastedDataTextField.value.replace(/\n/g, delimiterChar.value);
  newDataTextField.value = modifiedData;
  selectAndCopy();
}

function delimiterToColumn () {
  const splittedArr = pastedDataTextField.value.split(delimiterChar.value);
  const modifiedData = splittedArr.join('\n');
  newDataTextField.value = modifiedData;
  selectAndCopy();
}

function insertCharAtRowsStart () {
  const delimiterCharWithNewLine = '\n' + delimiterChar.value;
  let modifiedData = pastedDataTextField.value.replace(/\n/g, delimiterCharWithNewLine);
  modifiedData = delimiterChar.value + modifiedData;
  newDataTextField.value = modifiedData;
  selectAndCopy();
}

function deleteDuplicates () {
  const splittedArr = pastedDataTextField.value.split('\n');
  const noDuplicatesArr = [...new Set(splittedArr)];
  const modifiedData = noDuplicatesArr.join('\n');
  newDataTextField.value = modifiedData;
  selectAndCopy();
}

function charReplace () {
  const specialCharsToCheck = /[|\\{}()[\]^$+*?.]/g;
  const charChangeFrom = charChangeFromInput.value.replace(specialCharsToCheck, '\\$&');
  const charChangeFromGlobal = new RegExp(charChangeFrom, 'g');
  const modifiedData = pastedDataTextField.value.replace(charChangeFromGlobal, charChangeToInput.value);
  newDataTextField.value = modifiedData;
  selectAndCopy();
}

function selectAndCopy () {
  newDataTextField.select();
  document.execCommand('copy');
  msg?.classList.add('message--displayed');
  setTimeout(function () {
    msg?.classList.remove('message--displayed');
  }, 2500);
}

function clearField () {
  pastedDataTextField.value = '';
  pastedDataTextField.select();
}

columnToSeparatorBtn.addEventListener('click', columnToDelimiterSeparated);
separatorToColumnBtn.addEventListener('click', delimiterToColumn);
startRowWithBtn.addEventListener('click', insertCharAtRowsStart);
removeDuplicatesBtn.addEventListener('click', deleteDuplicates);
replaceBtn.addEventListener('click', charReplace);
clearBtn.addEventListener('click', clearField);
