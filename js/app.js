const allPhones = () => {
    document.getElementById('phone-container').innerHTML = "";
    const searchText = document.getElementById('input-search').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(value => displaySearchPhone(value.data));
    document.getElementById('input-search').value = "";
};

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
        // console.log(phone);
    }
};

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(dat => displayDetails(dat.data));
}

const displayDetails = (infos) => {
    console.log(infos);
    /*  for (const info of infos) {
         const parent = document.getElementById('phone-details-container');
 
         const div = document.createElement('div');
         div.innerHTML = `
             <div class="card">
                 <img src="${info.image}" class="card-img-top rounded w-75 h-100" alt="...">
                 <div class="card-body">
                     <h3 class="card-title">Brand: ${info.brand}</h3>
                     <h4 class="card-title">Phone Name: ${info.name}</h4>
                 </div>
              </div>
         `;
         parent.appendChild(div);
         console.log(info);
     } */
};
