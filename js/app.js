const allPhones = () => {
    const searchText = document.getElementById('input-search').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(value => displaySearchPhone(value.data));
}
// allPhones();
/* Display search phones */
const displaySearchPhone = (phones) => {
    console.log(phones);
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                         additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                     <a href="#" class="btn btn-primary">Show Details</a>
                </div>
             </div>
        `;
    }
}
