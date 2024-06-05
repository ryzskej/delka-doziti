const lifeExpectancy = 79;

// funkce k získání vstupu uživatele
const getInput = () => {

  // chycení inputů vztahujících se k datu a času
  let inputDate = document.querySelector("#input-date")
  let inputTime = document.querySelector("#input-time")

  // převod času na milisekundy
  let correctDate = new Date(inputDate.value).getTime();
  let correctTime = (inputTime.value.substring(0, 2) * 60 * 60 * 1000) + (inputTime.value.substring(3) * 60 * 1000);

  let totalSum = correctDate + correctTime

  return totalSum
}

// aktuální datum s časem
const upToDate = () => {
  let d = new Date().getTime();
  return d;
}

// vypsání outputu do stránky
const renderTime = () => {

  clearInterval(renderTime)

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let weeks = days * 7;
  let years = days * 365;

  // počet dnů naživu v ms
  let alive = upToDate() - getInput();

  let output = {
    seconds: Math.floor(alive / seconds),
    minutes: Math.floor(alive / minutes),
    hours: Math.floor(alive / hours),
    days: Math.floor(alive / days),
    weeks: Math.floor(alive / weeks),
    years: Math.floor(alive / years),
  }

  let aliveLeft = {
    seconds: lifeExpectancy * years / seconds - output.seconds,
    years: lifeExpectancy - output.years
  }

  console.log(alive)
  
  let renderResult = document.querySelector(".render-time")

  if (output.years > lifeExpectancy) {
    renderResult.innerHTML = "Jo tak ty jsi jiné eso, jsi tu přesčas!"
  } else if (alive > 0) {
    renderResult.innerHTML = `Jsi naživu ${output.seconds} sekund, ${output.minutes} minut, ${output.hours} hodin, ${output.days} dní, ${output.weeks} týdnů a ${output.years} let a s průměrnou délkou života 79 let ti zbývá ${aliveLeft.seconds} vteřin, což je asi ${aliveLeft.years} let.`;
  } 
  else {
    renderResult.innerHTML = "Špatně zadáné vstup."
  }
}

let inputForm = document.querySelector(".input-form")
inputForm.addEventListener("submit", (e) => {

  e.preventDefault();

  intervalID = setInterval(renderTime, 1000);

  setTimeout(() => {
    clearInterval(intervalID);
  }, 3000);

  }
)