const monthNames = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let fullIncome = 0;
const month = document.getElementById("month");
const date = document.getElementById("date");
const dailyIncome = document.getElementById("daily-income");
const allSalary = document.getElementById("all-salary");
const timeChoice = document.querySelectorAll(".time-choice");
const salaryContainer = document.getElementById("hidden");
const hideDate = document.getElementById("show");
const prevBtn = document.getElementById("prevBtn");

const today = new Date();
const currentMonth = monthNames[today.getMonth()];
const currentDate = today.getDate();
month.innerHTML = currentMonth;
date.innerHTML = currentDate;

timeChoice.forEach((item) => {
  item.addEventListener("click", function () {
    salaryContainer.classList.remove("hidden");
    hideDate.classList.add("hidden");
    if (item.classList.contains("full")) {
      dailyIncome.innerHTML = "100 000";
      fullIncome += 100000;
      allSalary.innerHTML = fullIncome;
    } else if (item.classList.contains("half")) {
      dailyIncome.innerHTML = "50 000";
      fullIncome += 50000;
      allSalary.innerHTML = fullIncome;
    } else if (item.classList.contains("off")) {
      dailyIncome.innerHTML = 0;
      allSalary.innerHTML = fullIncome;
    }    
  });
});

prevBtn.addEventListener("click", () => {
  salaryContainer.classList.add("hidden");
  hideDate.classList.remove("hidden");
});


// function saveLocally() {
//     if(typeof(Storage) !== "undefined") {
//         window.localStorage.setItem('summary', JSON.stringify(fullIncome));
//     }
//     let newValue = JSON.parse(window.localStorage.getItem('summary'));

// //   let summary;
// //   if(localStorage.getItem("summary") === null) {
// //     summary = [];
// //   } else {
// //     summary = JSON.parse(localStorage.getItem("summary"));
// //   }
// //   summary = fullIncome;
// //   localStorage.setItem("summary", JSON.stringify(summary));
//   allSalary.innerHTML = newValue;
// };
