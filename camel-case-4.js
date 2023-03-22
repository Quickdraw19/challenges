function parseFunction(line) {
    let components = line.split(';');
    let operation = components[0];
    let type = components[1];
    let text = components[2];
    let parseText = '';
    
    for (let i = 0; i < text.length; i++) {
        if (operation === 'S') {
            text = text.replace('()', '');
            if (text[i] == text[i].toUpperCase()) {
                parseText = (i == 0) ? '' : parseText + ' '
                parseText = parseText + text[i].toLowerCase();
            } else {
                parseText = parseText + text[i];
            }
        } else if (operation === 'C') {
            if (i == 0 && type === 'C') {
                parseText = parseText + text[0].toUpperCase();
            } else if (text[i] == ' ') {
                i++
                parseText = parseText + text[i].toUpperCase();
            } else {
                parseText = parseText + text[i];
            }
        } else {
            return "ERROR!"
        }
    }
    
    if (type === 'M' && operation === 'C') {
        parseText = parseText + '()';
    }

    return parseText;
}

