let tarefas = prompt('Digite aqui suas tarefas');
let adicionarMais = confirm('Deseja adicionar mais tarefas?');

while (adicionarMais) {
  let acao = prompt('O que deseja fazer? (adicionar/editar/remover)');
  
  if (acao.toLowerCase() === 'adicionar') {
    let maisTarefas = prompt('Digite mais tarefas');
    tarefas += ', ' + maisTarefas;
  } else if (acao.toLowerCase() === 'editar') {

    let tarefaParaEditar = prompt('Qual tarefa você deseja editar?');
    tarefas = tarefas.replace(tarefaParaEditar, prompt('Digite a nova tarefa'));
  } else if (acao.toLowerCase() === 'remover') {
    let tarefaParaRemover = prompt('Qual tarefa você deseja remover?');
    tarefas = tarefas.replace(tarefaParaRemover + ',', '').trim();
  }

  adicionarMais = confirm('Deseja realizar mais alguma ação?');
}

alert(`Suas tarefas: ${tarefas}`); 






















































/*let localStorageKey = 'to-do-list';

function newTask() {
    let input = document.getElementById('input-new-task');
    if (!input.value) {
        alert('Digite algo para inserir na lista');
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues();
    }
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']} <button id='remove' onclick='removeItem(${values[i]['name']})'></button></li>`;
    }
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(item => item.name === data);
    if (index !== -1) {
        values.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues();
    }
}


showValues();
*/