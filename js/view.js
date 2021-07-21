function renderEntry(entry) {
  let row =
  `<tr data-key="${entry.key}">
    <td>${entry.value.date}</td>
    <td>${entry.value.description}</td>
    <td>${entry.value.category}</td>
    <td>${entry.value.amount}</td>  
  </tr>
  `;
  return row;
}

export function renderEntries(entries){
  if (entries.length == 0) {
    return "There are no entries to display";
  }

  let table = 
  `<tr>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
  </tr>
  `;
  entries.forEach(entry => {
    table += renderEntry(entry)
  });

  return table;
}