/*var n = 4;
var fatorial = 1;


while(n >= 0) {
    n--
    document.write(n);
}
 n--
    document.write(n);
    console.log(n)



for (let i = n; i > 0 ; i--) { 
    
    fatorial = fatorial * n
    
    console.log(n)
    n--
    document.write(n);
    

    
}
console.log(fatorial)
*/

var n = 10;
var contagem = 0;
var fatorial = n;

for (let i = n; i > 0; i--) {
    console.log(i);
    
    if (contagem ==  1 | contagem % 4 == 1) { //multiplicação
        fatorial = fatorial * i
        //console.log(fatorial)
    } else if (contagem == 2 | contagem % 4 == 2) { //divisão
        fatorial =  fatorial / i
        //console.log(fatorial)
    } else if(contagem == 3 | contagem  % 4 == 3) {
        fatorial = fatorial + i
        //console.log(fatorial)
    } else if(contagem == 4 | contagem % 4== 0 & contagem != 0) {
        fatorial=  fatorial - i
        //console.log(fatorial)
    }
    contagem++
  
  
}

console.log(fatorial)

