// Import the FetchWrapper class
const FetchWrapper = require('./fetchWrapper');

// Initialize with base URL and optionally default headers
const baseURL = ' http://localhost:3000/v1';
const defaultHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': 'obso-HNER7aR5TmE8VpW2QbP6YiZcJxK9G3FdD4LoS1N6zA0UtXgYlCcVrMkRnO2tH3FqD1lL9wX0P4yD6sN8eBhO3aF5cU9iP2wK7cM0eV1jL5oU4zA2eR3qC6fK4nN'
};
const fetchWrapper = new FetchWrapper(baseURL, defaultHeaders);
console.log('fetchWrapper', fetchWrapper)

// Example GET request
async function fetchData() {
  try {
    const queryParams = {};
    const headers = {

    };
    const response = await fetchWrapper.get('/scan', queryParams, headers);
    console.log('Data fetched:', response);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// fetchData();


// Example POST request
async function postData() {
  try {
    const body = {
      "search": "6se",
      "scrapeId": "1"
    }
    const headers = {
      'x-api-key': 'obso-HNER7aR5TmE8VpW2QbP6YiZcJxK9G3FdD4LoS1N6zA0UtXgYlCcVrMkRnO2tH3FqD1lL9wX0P4yD6sN8eBhO3aF5cU9iP2wK7cM0eV1jL5oU4zA2eR3qC6fK4nN'
    };
    const response = await fetchWrapper.post('/scan', body, headers);
    console.log('Data posted successfully:', response);
  } catch (error) {
    console.error('Error posting data:', error.message);
  }
}

postData();
