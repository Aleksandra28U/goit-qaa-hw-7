const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Wyszukanie ul
const ingredientsLi = document.querySelector('#ingredients');

// Tworzenie obiektu - listy li, który w całym fragmencie zostanie później wrzucony na stronkę
const elementLi = document.createDocumentFragment();

// Tworzenie składników li do listy ul
ingredients.forEach(element => {
  const li = document.createElement('li');
  li.textContent = element;
  li.classList.add('item')
  elementLi.appendChild(li);
}
);

// Wstawienie wcześniej stworzonego fragmentu - wszystkich składników li na stronkę
ingredientsLi.append(elementLi);