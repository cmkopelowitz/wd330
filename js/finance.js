import * as db from 'https://cdn.jsdelivr.net/gh/cmkopelowitz/wd330@master/js/db.js'
import * as view from 'https://cdn.jsdelivr.net/gh/cmkopelowitz/wd330@master/js/view.js'
//Date.getDay returns day of the week
//Date.getDate returns day of the month
//chart.js will work

//you can compare dates to see which one is later for validation. 
const add_entry = document.getElementById('add-entry');
const drop_add_entry = document.getElementById('add-entry-drop');
const filter = document.getElementById('btn-filter');
const filter_drop = document.getElementById('filter-drop');
const input_repeating = document.getElementById('input-repeating');
const repeating_drop = document.getElementById('repeating-drop');
const button_last_days = document.getElementById('button-last-days');
const last_days_drop = document.getElementById('last-days-drop');
const submit_entry = document.getElementById('submit-entry');



window.onload = () => {

  add_entry.addEventListener('click', () => {
    filter_drop.style.display = "none";

    if (drop_add_entry.style.display == 'none') {
      drop_add_entry.style.display = "block"
    } else {
      drop_add_entry.style.display = "none";
    }
  });

  filter.addEventListener('click', () => {
    drop_add_entry.style.display = "none";

    if (filter_drop.style.display == 'none') {
      filter_drop.style.display = "block"
    } else {
      filter_drop.style.display = "none";
    }
  });

  input_repeating.addEventListener('click', () => {
    repeating_drop.classList.toggle('hidden');
  });

  button_last_days.addEventListener('click', () => {
    last_days_drop.classList.toggle('hidden')
  });

  submit_entry.addEventListener('click', (event) => {
    event.preventDefault(); //keep from submitting
    if (validateForm()) {
      db.addEntry({
        date: document.getElementById('input-entry-date').value,
        category: document.getElementById('select-category').value,
        description: document.getElementById('input-description').value,
        amount: document.getElementById('input-amount').value
      });
    }


  });
}

function validateForm() {
  return true;
}




