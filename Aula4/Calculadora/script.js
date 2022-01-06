function calcular(){
    var operacao = document.getElementById("operacao").value //pega o valor da operacao
    var num1 = document.getElementById("num1").value //pega o 1 valor  
    var num2 = document.getElementById("num2").value //pega o 2 valor
  
    if(num1 == '' || num1 == null){ //verifica se o num1 esta vazio
      alert('Favor digitar um número válido') //alerta caso não tenha número
      document.getElementById('num1').focus() 
      return false
    }
    if(num2 == '' || num2 == null){ //verifica se o num2 esta vazio
      alert('Favor digitar um número válido') //alerta caso não tenha número
      document.getElementById('num2').focus()
      return false
    }
  
    var resultado = null
  
    num1 = Number(num1) //converte a entrada para inteiro
    num2 = Number(num2) //converte a entrada para inteiro
  
    if(operacao == 1){ //soma
      resultado = num1+num2
    }else if(operacao == 2){ //subtração
      resultado = num1-num2
    }else if(operacao == 3){ //multiplicação
      resultado = num1*num2
    }else if(operacao == 4){ //divisao
      resultado = num1/num2
    }else{
      alert('Selecione uma operação') //alerta caso não tenha uma opcao de operacao
      return false
    }
  
    document.getElementById('resultado').value = resultado
  }