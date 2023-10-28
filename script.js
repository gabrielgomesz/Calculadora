function inserir(num){
    var numero1 =document.querySelector('.resultado1').innerHTML;
    document.querySelector('.resultado1').innerHTML = numero1 + num;

    var numero =document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = numero + num;
}

function limpar(){
    document.querySelector('.resultado1').innerHTML = ''
    document.querySelector('.resultado').innerHTML = ""

}
function back(){
    var back1=document.querySelector('.resultado1').innerHTML
    var back=document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado1').innerHTML = back1.substring(0 , back.length -1 )
    document.querySelector('.resultado').innerHTML = back.substring(0 , back.length -1 )
}
function calcular(){
    var cal = document.querySelector('.resultado').innerHTML;
    var res =document.querySelector('.resultado').innerHTML = eval (cal);
    // SEPARAÇÃO ENTRE A RESOLUÇAO DA TABELA E O RESULTADDO DA CALCULADORA
    var cal1 = document.querySelector('.resultado1').innerHTML ;
    var res1 =document.querySelector('.resultado1').innerHTML = eval (cal1);
    document.querySelector('.resultado1').innerHTML =`${cal1} = ${res1}`;
    
    if(res1){
        document.querySelector('.resultado1').style.color = '#00FF00';
    }else{
        document.querySelector('.resultado').innerHTML = `erro ❌`;
        document.querySelector('.resultado1').innerHTML = `erro ❌`;
    }  

}
//var RESOLUÇAO = document.querySelector('.resultado1').innerHTML = `${cal1}= ${res}`
