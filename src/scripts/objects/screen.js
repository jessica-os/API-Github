import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js";
import { getEvents } from "/src/scripts/services/events.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class= "info">
                                    <img src="${user.avatarUrl}" alt:"Foto do perfil do usuário"/>
                                    <div class= "data">
                                        <h1>${ user.name ??"Este usuário nao possui nome cadastrado" }</h1>
                                        <p>${ user.bio ?? "Este usuário nao possui bio cadastrada"  }</p>
                                        <p class= "followers">${`Seguidores: ${user.followers} 👥`}</p>
                                        <p>${`Seguindo: ${user.following} 👣`}</p>
                                    </div>
                                  </div>`;
 
    let repositoriesItens = user.repositories
      .map(
        (repo) =>
          `<li>
              <div class="info-repositories"> 
                <a href="${repo.html_url}" target="_blank"><span>${ repo.name }</span>
              <div class="data-repositories">
                  <ul>
                    <li>🍴${repo.forks}</li>
                    <li>⭐${repo.stargazers_count}</li>
                    <li>👀${repo.watchers}</li>
                    <li>👨‍💻${repo.language ?? "linguagem indefinida"}</li>
                  </ul>     
              </div> 
                </a>   
              </div>  
           </li>`
      )
      .join("");

    this.userProfile.innerHTML += `<div class="repositories">
                                    <h2>Repositórios</h2>
                                    <ul>${repositoriesItens}</ul>
                                  <div>`;

    let eventItens = "";
    user.events.forEach((element) => {
      if (element.type === "PushEvent") {
        eventItens += `<li> 
                         <h3>${element.repo.name}</h3>
                         <p>-- ${element.payload.commits[0].message}</p>
                       </li>
            `;
      } else {
        eventItens += `<li> 
                        <h3>${element.repo.name}</h3>
                        <p>-- Criado um ${element.payload.ref_type}</p>
                       </li>`;
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events">
                                          <h2>Eventos</h2>
                                          <ul>${eventItens}</ul>
                                     </div>`;
    }else{
      this.userProfile.innerHTML+="<h3>Este usuário não possui eventos criados.</h3>"
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado 😕</h3>";
  },
};

export { screen };
