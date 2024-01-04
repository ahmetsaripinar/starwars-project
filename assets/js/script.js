const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://static.wikia.nocookie.net/starwars/images/b/b2/WedgeAntilles-Masterwork2020.png",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

// HTML Elementlerini javascript elemanı olucak şekilde çekiyoruz-tanımlıyoruz.
const Canvas = document.getElementById("canvas");
const bodyEl = document.getElementsByName("body");
const content_wrapper = document.getElementById("content");
const toggleBtnEl = document.getElementById("toggle-button"); 
const imageGifEl = document.getElementById("img-gif");
const filter_element = document.getElementById("filter-buttons");

// Butonumuza fonksiyonlar ve stiller veriyoruz.
toggleBtnEl.onclick = renderCharacters; // Tanıttğımız butonumuza onclik olduğunda rendersCharacters fonksiyonunu tetiklemesini bildiriyoruz.
toggleBtnEl.style.display = "flex"; // BUTTONUMUZA STİLLER VERİYORUZ.
toggleBtnEl.style.margin = "auto"; // BUTTONUMUZA STİLLER VERİYORUZ.
toggleBtnEl.style.alignItems = "center"; // BUTTONUMUZA STİLLER VERİYORUZ.
toggleBtnEl.style.textAlign = "center"; // BUTTONUMUZA STİLLER VERİYORUZ.

//  ARRAY FİLTRELEME İŞLEMLERİ
const homeworldsRaw = []; // BOŞ BİR ARRAY OLUŞTURUYORUZ

for (i = 0; characters.length > i; i++) {
  // Karakterlerin uzunuluğu kadar karakterleri döngüye alıyoruz.
  homeworldsRaw.push(characters[i].homeworld ?? "other"); // Nullish coalescing ile homeworld'ü none olanları other olacak şekilde filtreliyoruz. Ve HomeworldRaw Arrayinin içerisine pushluyoruz.
}
const homeworldUnique = [...new Set(homeworldsRaw)]; // HomeworldUnique adlı yeni bir ARRAY Tanımlıyoruz.Ve bir önceki nullish coalescing yaptığımız arrayi çekip, tekrara düşen değerleri tek eleman olacak şekilde Array içerisine çekiyoruz.

const homeworldsLowercase = // HomeworldLowercase adlı bir değişken tanımlıyoruz.
  homeworldUnique.map((uniqueHomeworld) => uniqueHomeworld.toLowerCase()); // Tanımladıımız lowercase adlı değişkenin HomeworldUniqe adlı arrayden herbir elemanı UniqueHomeworld olarak çekip bu değerlerin lowercase değerlerini HomewordlsLowercase adlı Array'e tanımlıyoruz.

const homeworlds = homeworldsLowercase; // En sonda HomeworldsLowercase adlı arrayimizi Homeworlds değiikenine eşitliyoruz.

for (const homeworld of homeworlds) {
  // Homeworlds değişkeninin her bir elemanının değerini homeworld olarak tanımlayıp döngüye alıyoruz.
  const radio_buttons = `<div class="d-flex gap-2 flex-wrap-reverse text-center align-items-center"><input class="form-check-input mx-auto" value="${homeworld}" type="radio" name="radio-homework" id="filter-${homeworld}" checked>  
  <label class="form-check-label" for="filter-${homeworld}">${homeworld}</label></div>`; // radio_buttons adlı bir değiken-card oluşturuyoruz. Ve her bir HTML elementinin değerini homeworlds Arrayinin homeworld elemanından çekip her biri için yazdırıyoruz.
  filter_element.innerHTML += radio_buttons; // Tanımladığımız HTML elementini filter_element adlı değikenin İnnerHTML'ine yerleştiriyoruz.
}

// CARDLARI ve FİLTER BUTTONLARI GÖSTERME FONKSİYONU
function renderCharacters() {
  filter_element.classList.remove("d-none");
  filter_element.classList.add("d-flex");
  const row_element = document.createElement("div");
  row_element.classList.add("row");
  row_element.classList.add("gx-0");

  content_wrapper.innerHTML = "";
  for (const character of characters) {
    if (
      filterValue === null ||
      (character.homeworld ?? "other").toLowerCase() === filterValue
    ) {
      const CharacterCard = `
          <div class="col-lg-4 col-md-6 col-12">
           <div class="d-flex align-items-center justify-content-center mx-auto" id="card-wrapper">
               <div class="card my-4" id="card-border" style="width: 35em;">
                  <img src="${character.pic}" class="card-img-size" alt="${character.name}">
                   <div class="card-body mt-2" id="card-inner-border">
                    <h5 class="card-title">${character.name}</h5>
                      <p class="card-text">${character.homeworld}</p>
                       </div>
                      </div>
                   </div>
               </div>
           </div>
               `;
      row_element.innerHTML = row_element.innerHTML + CharacterCard;
    }
    toggleBtnEl.innerHTML = "Karakterleri Gizle";
    toggleBtnEl.style.backgroundColor = "red";
    toggleBtnEl.onclick = removeCharacters;
  }

  content_wrapper.appendChild(row_element);
}
// Her bir radio butonu için
let filterValue = null;
let rad = document.getElementsByName("radio-homework");
for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", function () {
    filterValue = this.value;
    renderCharacters();
  });
}

// KARAKTER KARTLARI KALDIRAN FONKSİYON

function removeCharacters() {
  content_wrapper.innerHTML = "";
  toggleBtnEl.onclick = renderCharacters;
  toggleBtnEl.style.backgroundColor = "green";
  toggleBtnEl.innerText = "Karakterleri Göster";
  filter_element.classList.remove("d-flex");
  filter_element.classList.add("d-none");
}
// ARKAPLAN ANİMASYON KODLARI
function background() {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");
  let w;
  let h;
  const setCanvasExtents = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  };

  setCanvasExtents();

  window.onresize = () => {
    setCanvasExtents();
  };

  // ARKA PLAN YILDIZ OLUŞTURMA KODLARIMIZ
  const makeStars = (count) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const s = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      };
      out.push(s);
    }
    return out;
  };

  let stars = makeStars(10000);

  const clear = () => {
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
  };

  const putPixel = (x, y, brightness) => {
    const intensity = brightness * 255;
    const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
    c.fillStyle = rgb;
    c.fillRect(x, y, 1, 1);
  };

  const moveStars = (distance) => {
    const count = stars.length;
    for (var i = 0; i < count; i++) {
      const s = stars[i];
      s.z -= distance;
      while (s.z <= 1) {
        s.z += 1000;
      }
    }
  };

  let prevTime;
  const init = (time) => {
    prevTime = time;
    requestAnimationFrame(tick);
  };

  const tick = (time) => {
    let elapsed = time - prevTime;
    prevTime = time;

    moveStars(elapsed * 0.1);

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;
    for (var i = 0; i < count; i++) {
      const star = stars[i];

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000.0;
      const b = 1 - d * d;

      putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(init);
}
