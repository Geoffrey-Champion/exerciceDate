// Convert today date to input format

const today = new Date().toISOString().split("T")[0]; // la ou il voit le T il coupe et créer un tableau de deux éléments
start_date.value = today;
start_date.min = today; // Pour ne pas pouvoir sélectionner une date avant la date actuel

// Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  // a chaque changement sur cette input on créer un événements
  let day = new Date(e.target.value);

  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  ); // On a un timeStamp en seconds d'écart entre les deux jour
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalPerNight.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc); // Quand on change la date calcul la diffDays entre le start et end
end_date.addEventListener("change", bookingCalc);
