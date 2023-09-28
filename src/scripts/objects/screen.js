const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class= "info">
                                    <img src="${user.avatarUrl}" alt:"Foto do perfil do usuário"/>
                                    <div class= "data">
                                      <h1>${user.name ?? "Este usuário nao possui nome cadastrado"}</h1>
                                      <p>${user.bio ?? "Este usuário nao possui bio cadastrada"}</p>
                                      <p class= "followers">${`Seguidores: ${user.followers} 👥`}</p>
                                      <p>${`Seguindo: ${user.following} 👣`}</p>
                                    </div>
                                  </div>`;

let repositoriesItens = user.repositories.map((repo) =>
          `<li>
              <div class="info-repositories"> 
                <a href="${repo.html_url}" target="_blank"><span>${repo.name}</span>
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
          ).join("");
     
this.userProfile.innerHTML += `<div class="repositories">
                                  <h2>Repositórios</h2>
                                  <ul>${repositoriesItens}</ul>
                              <div>`;

const validEvents = user.events.filter((event) => 
                    event.type === "PushEvent" || event.type === "CreateEvent" );
    if (validEvents.length === 0) {
      this.userProfile.innerHTML += `<div class="events">
                                        <p>Não possui eventos registrados</p>          
                                     </div>`;
                                      return;
                                  }

const itemEvent = validEvents.map((event) => {
          if (event.type === "CreateEvent") {
              return `<li><span>${event.repo.name}</span> - Create: ${event.payload.ref_type}</li>`;
        } else if (event.type === "PushEvent") {
              return `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`;
        } else !event.type === "CreateEvent" || !event.type === "PushEvent"; {
              return
        }
      })
      .join("");
      

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events">
                                         <h2>Eventos</h2>
                                         <ul>${itemEvent}</ul>
                                     </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado 😕</h3>";
  },
};

export { screen };
