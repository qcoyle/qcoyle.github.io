const button = document.querySelector('#button');
const documentResponse = document.querySelector("#response");

let counter = 0;

async function getData() {
    try {
        const response = await fetch("https://y3lypa1pyb.herokuapp.com/books");
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            const jsonString = JSON.stringify(jsonResponse);
            documentResponse.innerHTML = `<p>${jsonString}</p>`;
        }
    } catch (error) {
        console.log(error);
    }
}

const displayResponse = (event) => {
    event.preventDefault();
    getData();
}

button.addEventListener("click", displayResponse);