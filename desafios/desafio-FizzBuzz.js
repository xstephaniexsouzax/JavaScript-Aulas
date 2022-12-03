let resultado = 3 ; 

if (resultado % 3 == 0 && resultado % 5 ==0 ) {
    console.log("FizzBuzz")
  } else if (resultado % 3 ==0) {
    console.log('Fizz')
  } else if (resultado % 5 ==0) {
    console.log('Buzz')
  } else {
    console.log(fizzBuzz(resultado));
  }
   