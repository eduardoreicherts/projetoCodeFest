
const btEnviar = document.querySelector("#enviar");
btEnviar.addEventListener('click', enviarForm);

const btCadastrarMembros = document.querySelector('#btCadastrarMembros');
btCadastrarMembros.addEventListener('click', cadastrarMembros);
/*
function mascaraCPF() {
    const cpfInput = document.getElementById("cpf");
    cpfInput.addEventListener("input", function (e) {
      let cpf = e.target.value;
      cpf = cpf.replace(/\D/g, "");
      cpf = cpf.slice(0, 11); // Limita para no máximo 11 dígitos
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = cpf;
    });
  }
  // Chama a função de máscara para CPF
    mascaraCPF();
*/

function cadastrarMembros() {
    console.log('cadastrar...')
   
    const dadosFamiliares = document.querySelector('#dados-familiares');
    const nMembros = document.querySelector("#nMembros").value;

    for(i=0; i<nMembros; i++) {
        console.log('um membro...')
        const divCadastroMembro = document.createElement('div');
        // ----------
        const lbNome = document.createElement('label');
        const txNome = document.createElement('input');
    
        lbNome.innerText = 'Nome: ';
        lbNome.for = 'txNome';
    
        txNome.name='txNome';

        // ----------

        const lbCPF = document.createElement('label');
        const txCPF = document.createElement('input');

        lbCPF.innerText = 'CPF: ';
        lbCPF.for = 'txCPF';

        txCPF.name='txCPF'

        // --------------

        const lbRelacao = document.createElement('label');
        const txRelacao = document.createElement('input');

        lbRelacao.innerText = 'Relação com o responsável: ';
        lbRelacao.for = 'txRelacao';

        lbRelacao.name='txRelacao'

        // ----------

        const lbIdade = document.createElement('label');
        const txIdade = document.createElement('input');

        lbIdade.innerText = 'Idade: '
        lbIdade.for = 'txIdade'

        txIdade.name ='txIdade'

        // ----------

        const lbSaude = document.createElement('label');
        const txSaude = document.createElement('input');

        lbSaude.innerText = 'Condição de saúde do dependente: '
        lbSaude.for= 'txSaude'
        
        txSaude.name = 'txSaude'


        // ---------

        divCadastroMembro.appendChild(lbNome);
        divCadastroMembro.appendChild(txNome);

        divCadastroMembro.appendChild(lbCPF);
        divCadastroMembro.appendChild(txCPF);

        divCadastroMembro.appendChild(lbRelacao);
        divCadastroMembro.appendChild(txRelacao);

        divCadastroMembro.appendChild(lbIdade);
        divCadastroMembro.appendChild(txIdade);

        divCadastroMembro.appendChild(lbSaude);
        divCadastroMembro.appendChild(txSaude);

        dadosFamiliares.appendChild(divCadastroMembro);
        
    }

    btCadastrarMembros.removeEventListener('click', cadastrarMembros);


}

function enviarForm() {
   /*
    const nivel = Array.from(document.querySelectorAll('[name=nivel]'));
    nivel.forEach((n)=>)
   */ 
    // console.log('nivel='+nivel)

    // Recupera os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const dtNascimento = document.getElementById("dtNascimento").value;
    const rg = document.getElementById("rg").value;
    const dtOcupacao = document.getElementById("dtOcupacao").value;
    const cep = document.getElementById("cep").value;
    const numero = document.getElementById("numero").value;
    const bairro = document.getElementById("bairro").value;
    const necessidades = document.getElementById("necessidades").value;
    const estado = document.getElementById("estado").value;

    
    const formData = {};

    formData.nome = nome;
    formData.email = email;
    formData.telefone = telefone;
    formData.cpf = cpf;
    formData.rg = rg;
    formData.dtNascimento = dtNascimento;
    formData.dtOcupacao = dtOcupacao;
    formData.cep = cep;
    formData.numero = numero;
    formData.bairro = bairro;
    formData.necessidades = necessidades;
    formData.estado = estado;

    //caixinha array


    // Envia os dados para o backend (exemplo fictício)
    enviarDadosParaBackend(formData);
    }   

    async function enviarDadosParaBackend(formData) {
      // Aqui você pode fazer uma requisição HTTP para enviar os dados para o backend
      // Por exemplo, usando fetch, axios, XMLHttpRequest, etc.
    
      // Exemplo fictício usando console.log para exibir os dados enviados
      console.log("Dados enviados para o backend:", JSON.stringify(formData));
  
  
      try {
        const response = await fetch("http://127.0.0.1:3333/salvar", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        const result = await response.json();
        console.log("OK:", result);
      } catch (error) {
        console.error("Erro:", error);
      }
  
    }
    
