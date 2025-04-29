// # DOM REFERENCES

const cardsContainer = document.getElementById("cards-container");
const closeButton = document.getElementById("close-button");

const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;

// # FUNCTION

const generateCard = (post) => {
  const cardHtml = `
  <div class="col-xs-12 col-md-6 col-lg-4">
  
            <div class="single-card">
              <div class="card-image">
                
                <img src="${post.url}"  alt="${post.title}" />
                <img class="pin-img " src="./img/pin.svg" alt="pin" />
              </div>
              <div class="card-text py-3">
                <time class="data text-secondary">${post.date}</time>
                <h2 class="title-image">${post.title}</h2>
                  
                
              </div>
            </div>
            </div>
           
    `;
  return cardHtml;
};

// # REQUESTES API

axios
  .get(apiUri)
  .then((response) => {
    const postsCard = response.data;
    console.log(postsCard);

    // * generazione postCard e inserimento nell html
    let cardsHtml = "";
    postsCard.forEach((postCard) => {
      cardsHtml += generateCard(postCard);
    });
    cardsContainer.innerHTML += cardsHtml;

    // * creazione lista di nodi postsCardNodes
    const postsCardNodes = document.querySelectorAll(".single-card");
    console.log(postsCardNodes);

    // * per ogni nodo postCardNode si aggiunge l'addEventListener
    postsCardNodes.forEach((postCardNode) => {
      // # DOM EVENTS
      //  * al click della card si ha overlay
      postCardNode.addEventListener("click", () => {
        // salvo l'url dell'immagine selezionata al click in imgSrc
        const imgSrc = postCardNode.querySelector("img").src;

        console.log(imgSrc);
        // rimuovo la classe overlay-no-visible
        document
          .querySelector(`.overlay`)
          .classList.remove(`overlay-no-visible`);

        document.querySelector(`.overlay img`).src = imgSrc;
      });
      // * al click del bottone l'overlay si chiude
      closeButton.addEventListener("click", () => {
        document.querySelector(`.overlay`).classList.add(`overlay-no-visible`);
      });
    });

    // * bonus

    // document.querySelectorAll(".single-card").forEach((singleCard) => {
    //   singleCard.addEventListener("mouseover", () => {
    //     singleCard.style.cursor = "pointer";
    //     document.querySelector(".pin-img").classList.add("d-none");
    //   });
    //   singleCard.addEventListener("mouseout", () => {
    //     singleCard.querySelector(".pin-img").classList.remove("d-none");
    //   });
    // });
  })

  .cacth((error) => {
    console.log("Errore ", error);
  });
