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

const loaderEl = document.querySelector(".overlay");

const allCardEl = document.querySelector(".all-card");
const cardsContainer = document.getElementById("cards-container");

const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;

// # FUNZIONI

function generateCard(post) {
  const cardHtml = `
  <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="all-card">
              <div class="card-image">
                <img class="pin-img" src="./img/pin.svg" alt="pin" />
                <img src="${post.url}" alt="${post.title}" />
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

axios
  .get(apiUri)
  .then((response) => {
    const postsCard = response.data;
    console.log(postsCard);

    let cardsHtml = "";
    postsCard.forEach((postCard) => {
      cardsHtml += generateCard(postCard);
    });
    // innerHtml è una DOM API, faccio in modo che la pagina venga aggiornata una volta sola
    //anzichè 6 volte, quindi lo inserisco fuori dal ciclo
    cardsContainer.innerHTML += cardsHtml;
  })

  // const cardTitle = response.data.title;
  // const cardDate = response.data[0].date;
  // const cardUrl = response.data[0].url;
  // const newImage = generateCard(cardTitle, cardDate, cardUrl);
  // allCardEl.innerHTML = newImage;

  .cacth((error) => {
    console.log(error);
    alert("Errore!!");
  })
  .finally(() => {
    loaderEl.classList.remove("d-none");
  });
