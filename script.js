function pedidoAlmoco(prato){
    const almocoSelecionado= document.querySelector(".food_dish .escolhido");
    if(almocoSelecionado!==null){
        almocoSelecionado.classList.remove("escolhido");
         }
    const almoco= document.querySelector(prato);
    almoco.classList.add("escolhido");
    
    finalizarPedido ();
}

function checkAlmoco(seta){
    const checkativo= document.querySelector(".food_dish .icon");
    if( checkativo!==null){
        checkativo.classList.remove("icon");
        checkativo.classList.add("inativo");
        }
    let checkAlmoco= document.querySelector(seta);
    checkAlmoco.classList.remove("inativo");
    checkAlmoco.classList.add('icon');

}

function pedidoBebida(classBebida){
    const bebidaSelecionado= document.querySelector(".food_drinks .escolhido");
    if(bebidaSelecionado!==null){
        bebidaSelecionado.classList.remove("escolhido");
    }
   const bebida= document.querySelector(classBebida);
   bebida.classList.add("escolhido");
   finalizarPedido ();
}

function checkBebida(seta){
    const checkativo= document.querySelector(".food_drinks .icon");
    if( checkativo!==null){
        checkativo.classList.remove("icon");
        checkativo.classList.add("inativo");
        }
    let checkAlmoco= document.querySelector(seta);
    checkAlmoco.classList.remove("inativo");
    checkAlmoco.classList.add('icon');
}

function pedidoSobremesa(classSobremesa){
    const sobremesaSelecionado= document.querySelector(".food_desserts .escolhido");
    if(sobremesaSelecionado!==null){
        sobremesaSelecionado.classList.remove("escolhido");
    }
   const sobremesa= document.querySelector(classSobremesa);
   sobremesa.classList.add("escolhido");
   finalizarPedido ();
}

function checkSobremesa(seta){
    const checkativo= document.querySelector(".food_desserts .icon");
    if( checkativo!==null){
        checkativo.classList.remove("icon");
        checkativo.classList.add("inativo");
        }
    let checkAlmoco= document.querySelector(seta);
    checkAlmoco.classList.remove("inativo");
    checkAlmoco.classList.add('icon');
}

//let teste = 0;

//function contagemClick(){    
//    teste=teste+1; // mesma coisa que teste++
//     console.log(teste);
//     if (teste===3){ 
//        alert("acertou");
//   }
//}

 function finalizarPedido (){
    const pratoSelecionado = document.querySelector(".food_dish .escolhido");
    const bebidaSelecionado = document.querySelector(".food_drinks .escolhido");
    const sobremesaSelecionado = document.querySelector(".food_desserts .escolhido");
     if (pratoSelecionado!==null && bebidaSelecionado!==null && sobremesaSelecionado!==null){
        const botaoInativo=document.querySelector(".finalize_order");
        botaoInativo.classList.add("inativo");

        const botaoAtivo=document.querySelector(".finalize_order2");
        botaoAtivo.classList.remove("inativo");
    }
}

function clickBotaoAtivo(){
    const painelAtivo = document.querySelector(".painel");
    painelAtivo.classList.remove("inativo");
    const flexon = document.querySelector(".painel");
    flexon.classList.add("flexLigado");
}

let valorAlmocoEscolhido= 0;
let valorBebidaEscolhida= 0;
let valorSobremesaEscolhida= 0;
let TotalPedido=0;

function almocoValor(num){
    valorAlmocoEscolhido= Number(num);
    let valueA=document.querySelector(".valorPrato");
    valueA.innerHTML= "R$" + valorAlmocoEscolhido.toFixed(2).replace(".",",");
    console.log(valueA);
}

function bebidaValor(num){
    valorBebidaEscolhida=Number(num);
    let valueB=document.querySelector(".valorBebida");
    valueB.innerHTML= "R$" + valorBebidaEscolhida.toFixed(2).replace(".",",");
    console.log(valueB);
}

function SobremesaValor(num){
    valorSobremesaEscolhida=Number(num);
    let valueS=document.querySelector(".valorSobremesa");
    valueS.innerHTML= "R$" + valorSobremesaEscolhida.toFixed(2).replace(".",",");
    console.log(valueS);
}

function somaTotal(){
    TotalPedido= valorAlmocoEscolhido+valorBebidaEscolhida+valorSobremesaEscolhida;
    let pagamento=document.querySelector(".valorTotal");
    pagamento.innerHTML="R$"+TotalPedido.toFixed(2).replace(".",",");
    console.log(pagamento);
}

let nameAlmocoEscolhido= "";
let nameBebidaEscolhida="";
let nameSobremesaEsolhida="";

function nameAlmoco(nome){
    nameAlmocoEscolhido=nome;
    let almocoEscolhido=document.querySelector(".nomePrato");
    almocoEscolhido.innerHTML=  nameAlmocoEscolhido;
    console.log(almocoEscolhido);
}

function nameBebida(nome){
    nameBebidaEscolhida=nome;
    let bebidaEscolhida=document.querySelector(".nomeBebida");
    bebidaEscolhida.innerHTML=  nameBebidaEscolhida;
    console.log(bebidaEscolhida);
}

function nameSobremesa(nome){
    nameSobremesaEsolhida=nome;
    let sobremesaEscolhida=document.querySelector(".nomeSobremesa");
    sobremesaEscolhida.innerHTML=  nameSobremesaEsolhida;
    console.log(sobremesaEscolhida);
}

let mensagemWpp= ""

function executarMensagem(){
    mensagemWpp=`Olá, gostaria de fazer o pedido:\n- Prato: ${nameAlmocoEscolhido}\n- Bebida: ${nameBebidaEscolhida}\n- Sobremesa: ${nameSobremesaEsolhida} \nTotal : R$ ${TotalPedido.toFixed(2).replace(".",",")}`;
    const msgCodificada = encodeURIComponent(mensagemWpp);
    const linkWhatsapp= `https://wa.me/5583993170902?text=${msgCodificada}`;
    window.open(linkWhatsapp);
    console.log(linkWhatsapp);
    console.log(msgCodificada);
}

