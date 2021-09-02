// Searching book name using onclick
const searchBooks = () => {
    const searchBox = document.getElementById('search-box');
    const textSearched = searchBox.value;
    // console.log(textSearched);

    // dynamic url of bookname
    const url = `https://openlibrary.org/search.json?q=${textSearched}`;
    console.log(url);

    // json conversion
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.docs));
        .then(data => showSearchResults(data.docs));
}
const showSearchResults = docs => {
    const searchResult = document.getElementById('detail-card');
    docs.forEach(key => {
        console.log(key);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<img src="https://covers.openlibrary.org/b/id/${key.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Author name:${key.author_name}</h5>
            <p class="card-text">First Published: ${key.first_publish_year}</p>
        </div>
        
        `
        searchResult.appendChild(div);
    }

    )
}