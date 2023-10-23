const apiUrl = 'https://joaocarlosalves.dev/json';

const newData = {
  "name": "Clonzo Menezes",
  "age": 42,
  "country": "Japan",
  "job": "Software Engineer",
  "hobby": "Playing videogames"
};

fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newData)
})
.then(response => response.json())
.then(data => { console.log(data.message) })
.catch(error => { console.error(error) });
