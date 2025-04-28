// ?  Milestone 1.2
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata,
// disponiamo un’immagine qualunque ed un button di chiusura.

// ? Milestone 2.2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

// ? Milestone 3.2
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata,
//  dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.

// ? Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta,
//  il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare.

const cardsContainer = document.getElementById("cards-container");

const closeButton = document.getElementById("close-button");

const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;

// # FUNZIONI

function generateCard(post) {
  const cardHtml = `
  <div class="col-xs-12 col-md-6 col-lg-4">
  
            <div class="all-card" id="post-card-${post.id}" >
              <div class="card-image">
                
                <img src="${post.url}"  alt="${post.title}" />
                <img class=" pin-img" src="./img/pin.svg" alt="pin" />
              </div>
              <div class="card-text py-3">
                <time class="data text-secondary">${post.date}</time>
                <h2 class="title-image">${post.title}</h2>
                  
                
              </div>
            </div>
            </div>
           
    `;
  return cardHtml;
}

// # CHIAMATA AJAX

axios.get(apiUri).then((response) => {
  const postsCard = response.data;
  console.log(postsCard);

  let cardsHtml = "";
  postsCard.forEach((postCard) => {
    cardsHtml += generateCard(postCard);
  });
  // innerHtml è una DOM API, faccio in modo che la pagina venga aggiornata una volta sola
  //anzichè 6 volte, quindi lo inserisco fuori dal ciclo
  cardsContainer.innerHTML += cardsHtml;

  // creo una lista di nodi di postsCard
  const postsCardNodes = document.querySelectorAll(".all-card");
  console.log(postsCardNodes);

  // scorro la lista di nodi e ad ogni nodo aggiungo l'addEventListener
  postsCardNodes.forEach((postCardNode) => {
    postCardNode.addEventListener("click", () => {
      // salvo l'url dell'immagine selezionata al click in imgSrc
      const imgSrc = postCardNode.querySelector("img").src;

      console.log(imgSrc);
      // rimuovo la classe overlay-no-visible
      document.querySelector(`.overlay`).classList.remove(`overlay-no-visible`);

      document.querySelector(`.overlay img`).src = imgSrc;
    });
    // al click del bottone l'overlay si chiude
    closeButton.addEventListener("click", () => {
      document.querySelector(`.overlay`).classList.add(`overlay-no-visible`);
    });

    // # bonus
    // postCardNode.addEventListener("mousenter", () => {
    // document.querySelectorAll(".pin-img").classList.add("d-none");
    //   postCardNode.style.trasform = `scale(1.2) rotate(10deg)`;
    //   postCardNode.style.shadow = `6px 6px 6px rgba(0, 0, 0, 1)`;
    //   postCardNode.style.cursor = `pointer`;
    // });
  });
});

// .cacth((error) => {
//   console.log(error);
//
// })
// .finally(() => {});
