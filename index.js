const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('all-countries.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);
    const country = JSON.parse(line)
    
    console.log(country.name)
    country.population = parseInt(country.population)
    console.log(country.timezone);
    if (country.timezone.search('Europe') !== -1 && country.population > 0) {  
      fs.appendFileSync('output.jsonl', JSON.stringify(country) + '\n')
    }

    
  }
}

processLineByLine();

// {
//   geonameid: '6485051', 
//   name: 'Park Hotel Villa Stucky',
//   asciiname: 'Park Hotel Villa Stucky', -> A VOIR AVEC LES VILLES qui ne sont pas en alphabet latin
//   alternatenames: '', -> a voir ?! 
//   _geo: { lat: 45.56129, lng: 12.23745 }, 
//   'feature class': 'S', -> Les villes c'est P
//   'feature code': 'HTL',
//   'country code': 'IT', -> IT pour Italie
//   cc2: '',
//   'admin1 code': '20',
//   'admin2 code': 'TV',
//   'admin3 code': '026043',
//   'admin4 code': '',
//   population: '0', -> parseInt
//   elevation: '', -> ?! On s en fout
//   dem: '7',
//   timezone: 'Europe/Rome', -> ?
//   'modification-date': '2011-09-11' -> ON SEN FOUT VRAIMENT
// }