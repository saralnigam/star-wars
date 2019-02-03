import axios from 'axios';


class APIService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultConfig = {
      timeout: 20000,
      crossDomain: true,
      responseType: 'json',
    };

    this.apiUrls = {
      people: 'people/',
      planets: 'planets/',
    };
  }

  get(url, params = {}, config = this.defaultConfig) {
    return axios({
      ...config,
      url,
      params,
      method: 'get',
    });
  }

  getPeople(params) {
    return this.get(`${this.baseUrl}${this.apiUrls.people}`, params);
  }

  getPlanets(params) {
    return this.get(`${this.baseUrl}${this.apiUrls.planets}`, params);
  }
}

export const swapiApiService = new APIService('https://swapi.co/api/');
