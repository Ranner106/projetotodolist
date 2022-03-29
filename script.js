
const botao = document.querySelector('#criar-tarefa');
const pol = document.querySelector('#lista-tarefas')
    
function adicionarTarefa (){
    const binput = document.querySelector('#texto-tarefa').value;
    const liol = document.createElement('li')
    liol.classList.add('tarefas')
    liol.classList.add('list-group-item')
    liol.addEventListener('dblclick',function (){
            liol.classList.toggle('completed')
    })
    liol.innerText = binput
    pol.appendChild(liol)
    document.getElementById('texto-tarefa').value = ''
}

botao.addEventListener('click',adicionarTarefa)

function gray (event){
    let cgray = document.querySelectorAll('.cinza')
    for (let i = 0; i < cgray.length ; i+=1){
        cgray[i].classList.remove('cinza')
        
    }
    event.target.classList.add('cinza')
}
pol.addEventListener('click', gray)

let bapagar = document.querySelector('#apaga-tudo')
function apagar (){
    pol.innerHTML = ''
}
bapagar.addEventListener('click',apagar)

let bfinalizados = document.querySelector('#remover-finalizados')
function finalizados (){
    let ccompletos = document.querySelectorAll('.completed'); 
    for (let i= 0; i < ccompletos.length;i+=1){
        ccompletos[i].remove();
    }
}
bfinalizados.addEventListener('click',finalizados)

// function riscado (event) {

    // let li = document.querySelectorAll('tarefas')
    // let arriscado = document.querySelector('.completed')
    // for (let i = 0; i <= li.length; i+=1){
    //     let bb =  li[i];

        
     
    // }
    // let arriscado = document.querySelectorAll('.completed')
    // let li = document.querySelectorAll('li')
    // for (let i = 0; i <= li.length; i+=1){

    //     if (li[i].classList.contains('completed')){
    //         li[i].classList.remove('completed')
    //     } else {
    //         event.target.classList.toggle('completed')
        
    //     }
            
    // }   
    
// }

// riscado()
