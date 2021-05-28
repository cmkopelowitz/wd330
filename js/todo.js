const inp_item = document.querySelector("#inp-item");
const btn_submit = document.querySelector("#btn-submit");
const list = document.querySelector("#list");
const filters = document.querySelectorAll(".filter-option");
const filter_all = document.querySelector("#filter-all");
const filter_completed = document.querySelector('#filter-completed')
const filter_uncompleted = document.querySelector('#filter-uncompleted');
const tasks_left = document.querySelector('#tasks-left');

window.onload = function() {
  if (localStorage.length == 0) {
    localStorage.setItem('counter', 0);
  }
  filter_all.classList.add('active-filter-option');
  updateTasksLeft(parseInt(localStorage.getItem('counter')));
  renderAllItems()
};

filter_all.addEventListener('click', function() {
  clearActiveFilters()
  filter_all.classList.add('active-filter-option');
  renderAllItems()
});

filter_completed.addEventListener('click', function(){
  clearActiveFilters()
  filter_completed.classList.add('active-filter-option');
  renderCompletedItems()
});

filter_uncompleted.addEventListener('click', function(){
  clearActiveFilters()
  filter_uncompleted.classList.add('active-filter-option');
  renderUncompletedItems()
});

function clearActiveFilters() {
  filters.forEach(element => {
    element.classList.remove('active-filter-option');
  });
}

btn_submit.addEventListener('click', function() {
  if (inp_item.value != '') {
    const key = Date.now();
    const value = {
      'completed': false,
      'task': inp_item.value
    }
    localStorage.setItem(key, JSON.stringify(value))
    //newly add items are not completed
    incrementCounter();
    inp_item.value = '';
    renderItem(key, value);
  }
});

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    toggleItemStatus(ev);
  } else if (ev.target.className == 'close') {
    removeItem(ev);
  }
}, false);

function renderAllItems() {
  //clear the list
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != 'counter') {
      const value = JSON.parse(localStorage.getItem(key));
      renderItem(key, value);
    }
  }
}

function renderCompletedItems() {
  //clear the list
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != 'counter') {
    const value = JSON.parse(localStorage.getItem(key));
    if (value.completed)
      renderItem(key, value);
    }
  }
}

function renderUncompletedItems() {
  //clear the list
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != 'counter') {
      const value = JSON.parse(localStorage.getItem(key));
    if (!value.completed)
      renderItem(key, value);
    }
  }
}

function renderItem(key, value) {
  var li = document.createElement("LI")
    if (value.completed)
      li.classList.add('checked');
    li.setAttribute('data-key', key);
    li.innerText = value.task;
    
    addCloseButton(li)
    
    list.appendChild(li);
}

function addCloseButton(li) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.innerText = "X";
  li.appendChild(span);
}

function incrementCounter() {
  var counter = parseInt(localStorage.getItem('counter'));
  counter++;
  localStorage.setItem('counter', counter);

  updateTasksLeft(counter);
}

function decrementCounter() {
  var counter = parseInt(localStorage.getItem('counter'));
  counter--;
  localStorage.setItem('counter', counter);

  updateTasksLeft(counter);
}

function updateTasksLeft(counter) {
  if (counter == 1) {
    tasks_left.innerHTML = "1 task left";
  } else {
    tasks_left.innerHTML = `${counter} tasks left`;
  }
  
}

function toggleItemStatus(event) {
  const key = event.target.getAttribute('data-key');
  var value = JSON.parse(localStorage.getItem(key));
  if (event.target.classList.contains('checked')) {
    incrementCounter();
    value.completed = false;
  } else {
    decrementCounter();
    value.completed = true;
  }
  event.target.classList.toggle('checked');
  localStorage.setItem(key, JSON.stringify(value))
}

function removeItem(ev) {
  var li = ev.target.parentElement;
  li.style.display = "none"; //hide the element
  const key = li.getAttribute('data-key')
  localStorage.removeItem(key);

  //only decrememnt if task was not completed
  if (!li.classList.contains('checked')) {
    decrementCounter();
  }
}