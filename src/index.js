const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let space = " ";
    let strDecoded = "";
    let encoded = "";
    let tens = "";
    
    for(let i = 0; i < expr.length; i+10) {
        tens = expr.slice(i, i+10);
        if (tens == "**********") {
            strDecoded +=  space;
        } else {
            for(let j = 0; j < tens.length; j+2){
                let duo = tens.slice(j, j+2);
                if(duo == 11){
                    encoded += '-'
                }        
                if(duo == 10){
                    encoded += '.'
                }        
            }
            for (key in MORSE_TABLE){
                if([key] == encoded) {
                    strDecoded += MORSE_TABLE [key]
                }
            }
    
        }
    }
    return strDecoded;
    
    
}

module.exports = {
    decode
}