function botao(){
    document.getElementById("thanks").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirect(){
    window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trade(element){
    element.innerHTML = "Obrigado por passar o mouse";
   
}

function back(element){
    element.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function change(choice){
    console.log(choice.value);
}

/*  alert("trocar texto");
alert("Obrigado por clicar!!");
 function soma(n1,n2) {
    return n1 + n2;
};
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
        console.log("Você é de maior")
    }else{
        validar = false;
        console.log("Você é de menor")
    }
};

var idade = prompt("Digite a sua idade");

console.log(validaIdade(idade));


 console.log(soma(10,6));

 var d = new Date;
console.log(d);
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());

 var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
    
};



 var count = 0;
while (count = 5) {
    console.log(count);
    count++; 
};



 var idade = prompt("Qual sua idade ?");
if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

 var fruta = {
    nome:"uva",
    cor:"verde"
            }
            
console.log(fruta);

 var lista = ["maçã","pêra","limão","goiaba","abacaxi"];
            // 0   , 1    ,  2    ,   3    ,    4     ;

 lista.push("uva");
  lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join("  "));
var nome = "Jef";
var idade = 19;
var idade2 = 10;
var frase = " A B C D S F G H"
alert("Seu nome é : "+ nome + " ,e você tem " + idade + " anos");
alert(idade + idade2); 
console.log(frase.replace("S", "E"))*/