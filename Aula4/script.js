boasVindas();

console.log(multiplicacao(10, 20)); 

console.log(soma(10, 15));

//console.log(sum(10, 20));


function boasVindas() {
    console.log('ola usuario');
   
}

function soma(num1, num2) {
  return (num1 + num2);
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

// função seta(arrow function)
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
}

var clima = 'chuva';

if (clima == 'sol') {
    console.log('Posso ir a praia');
} else if(clima == 'chuva') {
    console.log('Vou para casa');
} else {
    console.log('posso saltar pipa');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 5; i <= 50; i+=5) {
    console.log(i);
}

var num = 0;
while (num < 10) {
    num++;
    console.log(num);
}


    
