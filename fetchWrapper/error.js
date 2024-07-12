async function handleFetchErrors(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
  }
  return response.json();
}

module.exports = {
  handleFetchErrors,
};