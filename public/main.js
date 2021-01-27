/* eslint-disable no-magic-numbers */
/* eslint-disable prefer-destructuring */

const date = new Date();

const renderCalendar = () => {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toLocaleDateString();
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

// Get the modal

const modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event1) {
  if (event1.target === modal) {
    modal.style.display = "none";
  }
};
