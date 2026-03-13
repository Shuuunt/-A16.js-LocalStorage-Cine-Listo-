const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = movieSelect.value;

function updateSelectedCount() {
    const SelectedSeats = document.querySelectorAll("selected");

    const SelectedSeatsCount = SelectedSeats.length;
    
    count.innerHTML = SelectedSeatsCount;
    total.innerHTML = SelectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (e) =>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        // console.log(e.target);
        e.target.classList.toggle(".row.seat.selected");

        updateSelectedCount();
    }
})