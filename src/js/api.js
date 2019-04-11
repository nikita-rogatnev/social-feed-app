import FeedModel from './components/feed/feed-model';

const toJSON = (response) => response.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

class API {
  constructor({url, count}) {
    this._METHODS = {
      GET: `GET`,
      POST: `POST`,
      PUT: `PUT`,
      DELETE: `DELETE`
    };

    this._endPoint = url;
    this._itemsCount = count;
  }

  getData() {
    return this._load({url: `kindle`})
      .then(toJSON)
      .then(FeedModel.parseFeedItems);
  }

  _load({url, method = this._METHODS.GET, body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}.json?limit=${this._itemsCount}`, {method, body, headers})
      .then(checkStatus)
      .catch((error) => {
        error.error(`fetch error: ${error}`);
        throw error;
      });
  }
}

export default API;
