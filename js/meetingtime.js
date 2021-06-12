const tableA = document.querySelector('#participant-a');

window.onload = function() {
  document.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', function (ev) {
      ev.target.classList.toggle('checked'); 
    })
  });
}

function buildTable(participant) {
  var table = 
  `<table style="width:100%">
  <tr>
    <th></th>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
  </tr>
  <tr>
  `;
  for (let i = 6; i <= 19; i++) {
    table +=
      `<tr>
        <th class='time'>${i}:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>`
  }
  table += `</table>`

  participant.innerHTML = table;
}

function getAvailability(id) {
  const blocks = document.querySelectorAll(`#${id} td`);
  var availability = [];
  blocks.forEach((element, index) => {
    if (element.classList.contains('checked')) {
      availability.push(true);
    } else {
      availability.push(false);
    }
  })

  return availability;
}

buildTable(tableA);