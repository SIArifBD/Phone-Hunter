const allPhones = () => {
    const searchText = document.getElementById('input-search');

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(value => console.log(value.data));
}
allPhones();
