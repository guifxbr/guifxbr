function perfLoader(){
    let xhr = new XMLHttpRequest();

    xhr.onload=function(){
       // alert('Retorno da requisição: \n' + this.responseText);
       let data =JSON.parse (this.responseText);
       let perfilStr=`<div class="col-sm-12 col-md-4 col-lg-4">
       <img src="${data.avatar_url}" alt="" width="75%" height="75%">
       </div>
       <div class="col-lg-8 col-md-8 col-sm-12 textInicial">
       <h1>${data.name}<br>(${data.login})</h1>
       <p><span class="negrito">Obejtivos: </span>${data.bio}</p>
       <a href="${data.html_url}" target="_blank" class="btn btn-primary">Perfil no GitHub</a>
       </div>`
      /* let perfilStr=`<div class="card" style="width: 18rem;">
    <img src="${data.avatar_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}<br>${data.login}</h5>
      <p class="card-text">${data.bio}</p>
      <a href="${data.html_url}" target="_blank" class="btn btn-primary">Perfil no GitHub</a>
    </div>
  </div>`;*/
  document.getElementById ('guigs').innerHTML=perfilStr;
    }
    xhr.onerror=function(){
        alert(`Erro na Requisição \nCódigo: ${this.status} - ${this.statusText}`)
    }


    xhr.open('GET', 'https://api.github.com/users/guifxbr');
    xhr.send();
}
function RepLoader(){
    let xhr = new XMLHttpRequest();

    xhr.onload=function(){
        let perfilStr= "";
       // alert('Retorno da requisição: \n' + this.responseText);
       let data =JSON.parse (this.responseText);
       for (let i = 0; i < 3; i++) {
           
           
           perfilStr+= ` <div class="col-12 col-sm-6 col-md-6 col-lg-4">
           <h4>${data[i].name}</h4>
           <p><span class="negrito">Descrição </span>${data[i].description}</p>
           <p><span class="negrito"> atualizado: ${data[i].updated_at} </span> </p>
       </div>`
    }
      /* let perfilStr=`<div class="card" style="width: 18rem;">
    <img src="${data.avatar_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}<br>${data.login}</h5>
      <p class="card-text">${data.bio}</p>
      <a href="${data.html_url}" target="_blank" class="btn btn-primary">Perfil no GitHub</a>
    </div>
  </div>`;*/
  document.getElementById ('reps').innerHTML=perfilStr;
    }
    xhr.onerror=function(){
        alert(`Erro na Requisição \nCódigo: ${this.status} - ${this.statusText}`)
    }


    xhr.open('GET', 'https://api.github.com/users/GUINOLIX/repos');
    xhr.send();
}

$(document).ready(function () {
    perfLoader();
    RepLoader();

});
