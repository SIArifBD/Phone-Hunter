const allPhones = () => {
    const searchText = document.getElementById('input-search').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(value => displaySearchPhone(value.data));
};
// allPhones();
/* Display search phones */
const displaySearchPhone = (phones) => {
    // console.log(phones);
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top rounded w-75 h-100" alt="...">
                <div class="card-body">
                    <h3 class="card-title">Brand: ${phone.brand}</h3>
                    <h4 class="card-title">Phone Name: ${phone.phone_name}</h4>
                </div>
                <div class="card-footer">
                     <button onclick ="details()" class ="btn btn-primary">Show Details</button>
                </div>
             </div>
        `;
        parent.appendChild(div);
        console.log(phone);
    }
};
