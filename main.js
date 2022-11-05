
function criaGame(player1 , hour, player2){
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}
let delay = 0;
function criaCard(date, day , games){
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s ">
      <h2>${date} <span> ${day} </span> 
      </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW">
  </header>
    <main id = "cards">
    ${criaCard(
      "24/11",
      "quinta",
      criaGame("switzerland", "07:00", "cameroon")+
        criaGame("brazil", "16:00", "serbia")
    )}

    ${criaCard(
      "28/11",
      "segunda",
      criaGame("cameroon", "07:00", "serbia") +
        criaGame("switzerland", "13:00", "brazil")
    )}
    
    ${criaCard("02/12", "sexta-feira", criaGame("brazil", "16:00", "cameroon"))}
    </main>
`