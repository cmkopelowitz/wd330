const results = document.querySelector('#results');

function logResult(result) {
  console.log(result);
  results.innerHTML = JSON.stringify(result.pages[0]);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function fetchJSON(pathToResource) {
  fetch(pathToResource) // 1
  .then(validateResponse) // 2
  .then(readResponseAsJSON) // 3
  .then(logResult) // 4
  .catch(logError);
}

window.onload = function() {
  fetchJSON('https://api.wikimedia.org/core/v1/wiktionary/de/search/page?q=spi&limit=10');
}