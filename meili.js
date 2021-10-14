const { MeiliSearch } = require("meilisearch")

const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'masterKey',
})

;(async() => {
  const index = client.index("all_countries")
  const response = await index.search("Park Hotel Villa Maria");
  console.log(response.hits[0]);
  console.log(response.hits[1]);
})()