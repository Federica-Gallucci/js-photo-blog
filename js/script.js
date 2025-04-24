// ? Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
// utilizzando soltanto HTML e CSS e riproducendo una singola fotografia
//  (usiamo una qualunque immagine a piacimento)

// ? Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// In alternativa al potete anche usare le API di:
// https://jsonplaceholder.typicode.com/
// In ogni caso studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// ? Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
// sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

const allCardEl = document.querySelector(".all-card");

const apiUri = `https://lanciweb.github.io/demo/api/pictures/`;

function generateCard(title, data, url) {
  return `
            
              <div class="card-image">
                <img src="${url}" alt="" />
              </div>
              <div class="card-text py-3">
                <time class="data text-secondary">${data}</time>
                <h2 class="title-image">${title}</h2>
                  
                
              </div>
    `;
}

axios.get(apiUri).then((response) => {
  const randomTitle = response.data.title;
  const randomDate = response.data.date;
  const randomUrl = response.data.url;
  const newImage = generateCard(randomTitle, randomDate, randomUrl);

  console.log(response);

  //   allCardEl.innerHTML = newImage;
  // console.log(newImage);
});
//   .cacth((error) => {
//     console.log(error);
//   });
//   .finally();

// axios
//   .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//   .then((response) => {
//     const randomEmail = response.data.response; // accedo ai dati (data) della risposta(response) con key response(response)
//     console.log(response);
//   });
