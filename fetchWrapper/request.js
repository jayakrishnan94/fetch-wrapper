const { buildUrlWithParams } = require('./fetchUtils');
const { handleFetchErrors } = require('./error');
const { applyRequestInterceptors, applyResponseInterceptors } = require('./interceptors');

class FetchWrapper {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  async get(url, queryParams = {}, headers = {}) {
    const fullUrl = buildUrlWithParams(this.baseURL, url, queryParams);
    return this._fetchWrapper(fullUrl, {
      method: 'GET',
      headers: { ...this.defaultHeaders, ...headers }
    });
  }

  async post(url, body = {}, headers = {}) {
    const options = {
      method: 'POST',
      headers: { ...this.defaultHeaders, ...headers },
      body: JSON.stringify(body)
    };
    return this._fetchWrapper(url, options);
  }

  async _fetchWrapper(url, options) {
    const finalUrl = buildUrlWithParams(this.baseURL, url, options.queryParams);
    try {
      const finalOptions = await applyRequestInterceptors({ url, ...options });
      const response = await fetch(finalUrl, finalOptions);
      await applyResponseInterceptors(response);
      return await handleFetchErrors(response);
    } catch (error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
  }
}

module.exports = FetchWrapper;
