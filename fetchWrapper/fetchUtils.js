function buildUrlWithParams(baseURL, url, params) {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `${baseURL}${url}?${queryString}` : `${baseURL}${url}`;
}

module.exports = {
  buildUrlWithParams,
};