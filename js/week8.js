var currentPage = "https://swapi.dev/api/people"
var nextPage;
var previousPage = "https://swapi.dev/api/people";
const container = document.querySelector('#container'); 
 
window.onload = function (){
  renderPeople(currentPage);
};

async function getData(url) {
  let response = await fetch(url);
  let data = await response.json();
  
  const people = data
  console.log(people)

  return people;
}

async function renderPeople(url) {
  let data = await getData(url);
  let people = data.results;
  let next = data.next;
  let table = 
    `<table>
      <tr><th>name</th><th>Height</th><th>Mass</th></tr>`
  people.forEach(person => {
    
      let htmlSegment = 
      `
      <tr>
       <td>${person.name}</td>
       <td>${person.height}</td>
       <td>${person.mass}</td>
       </tr>`;

      table += htmlSegment;
  });

  table += `</table>`
  container.innerHTML = table;
  if (data.next != null) {
    var btn = document.createElement("BUTTON");
    btn.setAttribute('onclick', `renderPeople(${next})`);
    container.appendChild(btn);
  }
}