/* Dado un numero (number), sumar los multiplos de 3 y 5 que contiene dicho 
número (desde 1,2,3,4 hasta menor que number).Si uno de ellos es multiplo de ambos (solo se cuenta
vez)*/

function solution(number){
    let _sum = 0;
    for(i = 1; i < number; i++){
    
        if (i%3 == 0 || i%5 == 0) {
            _sum += i;
        }
    }
    return _sum;
}

console.log(solution(10));

//Example with 10
/*
    3,5,6,9 suman 23

*/


/* Dado una cadena de  caracteres, reemplazar estas letras C,G,T,A por las 
siguientes G,C,A,T respectivamente. La cadena solamente incluye las letras dadas */

var pairs = {C:"G", G:"C", T:"A", A:"T"};

function replacing(chain){
    return chain.replace(/./g, (l) =>{
        return pairs[l];
    });
}

console.log(replacing("ATCG")); //Expected TAGC
console.log(replacing("TTTT")); //Expected AAAA

function replacing_2(chain){
    return chain.replace(/./g, (l) =>{
        return 'CGAT'['GCTA'.indexOf(l)];
    });
}

console.log(replacing_2("ATCG")); //Expected TAGC
console.log(replacing_2("TTTT")); //Expected AAAA

function replacing_3(chain){
    return chain.split('').map((l) =>{
        return 'CGAT'['GCTA'.indexOf(l)];
    }).join('');
}

console.log(replacing_3("ATCG")); //Expected TAGC
console.log(replacing_3("TTTT")); //Expected AAAA


/* Dado un numero mayor de 1 digito, multiplicar sus digitos, y este resultado
multiplicar otra vez sus digitos. Asi sucesivamente hasta que el numero obtenido 
sea de 1 digito. La respuesta es la veces (times) que se puede hacer esta operación 
de multiplicacion. */

function multiplication(number){
    let _times = 0;
    while (number >= 10){
        _times++;
        number = number.toString().split('').reduce((a,b) =>{
            return a*b;
        });
    }
    return _times;
}

console.log(multiplication(93));
console.log(multiplication(123));
console.log(multiplication(999));
// 9*3 = 27 (1)
// 2*7 = 14 (2);
// 1*4 = 4 (3)

//1*2*3 = 6 (1)

// 9*9*9 = 729 (1);
// 7*2*9 = 126 (2);
// 1*2*6 = 12 (3);
// 1*2 = 2 (4);


/*NextOne: Dado lo siguiente: "abcde", obtener como resultado:
    A-Bb-Ccc-Dddd-Eeeee
*/

converter = function(chain){

    return chain.split('').map((value, index) => {
        return value.toUpperCase() + value.toLowerCase().repeat(index);
    }).join('-');
}

console.log(converter('abcde'));


//Morse decoder

/*

decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

*/


/* Sum the two less numbers of an array
 [2,3,10,1,20];
 Sum = 3, (1+2) */

 sumTwoLessNumbers = function(arr){

    var [a,b] = arr.sort((a,b) => a-b);
    
    return a+b;

 }

 console.log(sumTwoLessNumbers([10,20,1,15]));

 