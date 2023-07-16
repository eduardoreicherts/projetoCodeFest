mostrarListagem();

async function mostrarListagem() {

    const tbListagem = document.querySelector('#tbListagem');
    const response = await fetch("http://127.0.0.1:3333/cadastro");
    const dadosResposta = await response.json();
  
    for(i=0;i<dadosResposta.length;i++) {
      const id = dadosResposta[i]['id'];
      const email = dadosResposta[i]['email'];
      const nome = dadosResposta[i]['nome'];
      const telefone = dadosResposta[i]['telefone'];
      const cpf = dadosResposta[i]['cpf'];
      
      console.log(id, email, nome, telefone, cpf)


      const tId = document.createElement('div');
      tId.class='card';
      tId.innerText=id;

      let linha = document.createElement('tr');

      linha.innerHTML = `

        <td>${id}</td>
        <td>${nome}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${cpf}</td>
      `;
      tbListagem.appendChild(linha);
  }




  }