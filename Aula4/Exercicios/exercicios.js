// 01
var nome  = "Lucas dos Santos";
console.log("olá "+nome);

//02
var num1 = 10.5;
var num2 = 20.5;
console.log(num1+num2);

//03
var numQuadrado = Math.pow(5,2);
console.log(numQuadrado);

//04
var numDobro = 20 * 2;
console.log(numDobro);

//05
var num = 20 ;
console.log("Antecessor de "+num+" é "+(num-1));
console.log("Sucessor de "+num+" é "+(num+1));

//06
var dia = 30 ;
var total = 0;
for(var i = 0; i < 7; i++){
    total += dia;
}
console.log(total);

//07
var nota1 = 9.4, nota2 = 8, nota3 = 10, nota4 = 6.6, nota5 = 4.8;
var media = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
console.log("A média do aluno é "+media);

//08
var metros = 10;
var centimetros = metros * 100;
console.log("O valor de "+metros+" em centímetros é "+centimetros);

//09
var preco = 10;
var desconto = preco * 0.1; //10% de desconto
console.log("O valor do produto com desconto é "+(preco-desconto));

//10
var num = 10;
var num2 = 20;
function soma(num, num2){
    return num + num2;
}
function subtracao(num, num2){
    return num - num2;
}
function multiplicacao(num, num2){
    return num * num2;
}
function divisao(num, num2){
    return num / num2;
}
console.log("A soma é "+soma(num, num2));
console.log("A subtração é "+subtracao(num, num2));
console.log("A multiplicação é "+multiplicacao(num, num2));
console.log("A divisão é "+divisao(num, num2));

//11
var idade = 10;
if(idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

//12
var num = 10;
if(num % 2 == 0){
    console.log("O número é par");
}else{
    console.log("O número é impar");
}

//13
var senha = "123456";
if(senha == "123456"){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}

//14
var imc = 20;
if(imc < 18.5){
    console.log("Abaixo do peso");
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal");
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso");
}else if(imc >= 30 && imc <= 34.9){
    console.log("Obesidade grau 1");
}else if(imc >= 35 && imc <= 39.9){
    console.log("Obesidade grau 2");
}else{
    console.log("Obesidade grau 3");
}

//15
// for (let i = 5; i <= 50; i+=5) {
//     console.log(i);
// }

//16