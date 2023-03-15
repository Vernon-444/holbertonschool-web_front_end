function createElement(data) {
  let para = document.createElement('p');
  para.textContent = data;
}

function queryWikipedia(callback) {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  request.onload = function() {
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const pages = response.query.pages;
      const page = Object.keys(pages)[0];
      const extract = pages[page].extract;
      callback(extract);
    }
  };
  request.send();
}

queryWikipedia(createElement);
