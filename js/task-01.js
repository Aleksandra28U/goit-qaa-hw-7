// Wyświetlenie ilości kategorii
const categories = document.querySelector('#categories');
const categoriesName = categories.querySelectorAll('.item');
console.log("Number of categories: " + categoriesName.length);

// Przejścia po liście: wyszukanie nazw kategorii i zliczenie ilości zawartych w nich elementów
categoriesName.forEach(category => {
    
    const categoryName = category.querySelector('h2').textContent
    console.log("Category:  " + categoryName)

    const element = category.querySelectorAll('li')
    console.log("Elements:  " + element.length);
}
);