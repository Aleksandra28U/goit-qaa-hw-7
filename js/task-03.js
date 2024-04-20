const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Wyszukanie ul
const gallery = document.querySelector('ul.gallery');

// Stworzenie tablicy złożonej z obrazków (zdjęcia i podpis) + połączenie ich w string
const imagesHTML = images.map(image => 
    `<li>
        <img src="${image.url}", alt ="${image.alt}">
    </li>`
).join(" -------------- ");

gallery.style.backgroundColor = "grey";
gallery.style.fontSize = "36px";
gallery.style.color = "red";
gallery.style.border = "6px solid black";

console.log(imagesHTML)

// Dodanie obrazków na stronkę
gallery.insertAdjacentHTML('afterbegin', imagesHTML)