const dataset = require('./smol-all-countries.json')
const fs = require('fs')

const europeDataset = []

for (const country of dataset) {
  if (country.timezone.search('Europe') !== -1 && country.population > 0) {
    country.population = parseInt(country.population)
    europeDataset.push(country)
  }
}

console.log(europeDataset.length)
fs.writeFileSync('europe-dataset.json', JSON.stringify(europeDataset, null, 1))
