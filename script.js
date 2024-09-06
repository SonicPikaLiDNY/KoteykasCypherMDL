const cipherMap = {
    'a': ':3:3:3',
    'b': ':3:3:D',
    'c': ':3:3:P',
    'd': ':3:3:O',
    'e': ':3:D:3',
    'f': ':3:D:D',
    'g': ':3:D:P',
    'h': ':3:D:O',
    'i': ':3:P:3',
    'j': ':3:P:D',
    'k': ':3:P:P',
    'l': ':3:P:O',
    'm': ':3:O:3',
    'n': ':3:O:D',
    'o': ':3:O:P',
    'p': ':3:O:O',
    'q': ':D:3:3',
    'r': ':D:3:D',
    's': ':D:3:P',
    't': ':D:3:O',
    'u': ':D:D:3',
    'v': ':D:D:D',
    'w': ':D:D:P',
    'x': ':D:D:O',
    'y': ':D:P:3',
    'z': ':D:P:D',
    ' ': ':D:P:P',
    '!': ':D:P:O',
    '?': ':D:O:3',
    ',': ':D:O:D',
    '.': ':D:O:P',
    ';': ':D:O:O',
    ':': ':P:3:3',
    "'": ':P:3:D',
    '"': ':P:3:P',
    '(': ':P:3:O',
    ')': ':P:D:3',
    '[': ':P:D:D',
    ']': ':P:D:P',
    '{': ':P:D:O',
    '}': ':P:P:3',
    '@': ':P:P:D',
    '#': ':P:P:P',
    '$': ':P:P:O',
    '%': ':P:O:3',
    '&': ':P:O:D',
    '*': ':P:O:P',
    '+': ':P:O:O',
    '-': ':O:3:3',
    '/': ':O:3:D',
    '\\': ':O:3:P',
    '=': ':O:3:O',
    '<': ':O:D:3',
    '_': ':O:O:O:O',
    '>': ':O:D:D',
    '^': ':O:D:P',
    '~': ':O:D:O',
    '0': ':O:P:3',
    '1': ':O:P:D',
    '2': ':O:P:P',
    '3': ':O:P:O',
    '4': ':O:O:3',
    '5': ':O:O:D',
    '6': ':O:O:P',
    '7': ':O:O:O',
    '8': ':3:3:3:3',
    '9': ':D:D:D:D'
};

const decipherMap = {};
for (const key in cipherMap) {
    decipherMap[cipherMap[key]] = key;
}

function cypher() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        outputText += cipherMap[inputText[i]] || inputText[i];
    }
    document.getElementById('outputText').value = outputText;
}

function decypher() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    const pattern = /(:3|:D|:P|:O)/g;
    const chunks = inputText.match(pattern);
    if (chunks) {
        for (let i = 0; i < chunks.length; i += 3) {
            const chunk = chunks.slice(i, i + 3).join('');
            outputText += decipherMap[chunk] || 'not defined';
        }
    }
    document.getElementById('outputText').value = outputText;
}

const dialog = document.querySelector('dialog');
const showDialogButton = document.querySelector('#fab');
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function() {
    dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});
