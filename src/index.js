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
    
    for(let i = 0; i < expr.length; i+=10) {
        let encoded = "";
        let tens = "";
        tens = expr.slice(i, i+10);                 //console.log(tens, 48)
        if (tens == "**********") {
            strDecoded +=  space; 
        } else {
            for(let j = 0; j < tens.length; j+=2){
                let duo = tens.slice(j, j+2);      // console.log(duo, 53)
                if(duo == '11'){
                    encoded += '-';              //    console.log(encoded, 55)
                }        
                if(duo == '10'){
                    encoded += '.';               //   console.log(encoded, 58)
                }        
            }
            for (key in MORSE_TABLE){
                if([key] == encoded) {
                    strDecoded += MORSE_TABLE [key];    //console.log(strDecoded, 63)
                }
            }   
        }
    }
    //console.log(strDecoded, 68)
    return strDecoded; 
}

module.exports = {
    decode
}
//decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010")