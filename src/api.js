import FeedModel from './modules/feed/feed-model';

const toJSON = (response) => response.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

class API {
  constructor({endPoint, authorization, itemsCount, liveTime}) {
    this._METHODS = {
      GET: `GET`,
      POST: `POST`,
      PUT: `PUT`,
      DELETE: `DELETE`
    };

    this._endPoint = endPoint;
    this._authorization = authorization;
    this._itemsCount = itemsCount;
    this._liveTime = liveTime;
  }

  getData() {
    return this._load({url: `kindle`})
      .then(toJSON)
      .then(FeedModel.parseFeedItems);
  }

  _load({url, method = this._METHODS.GET, body = null, headers = new Headers()}) {
    // headers.append(`Authorization`, this._authorization);
    return fetch(`${this._endPoint}/${url}.json?limit=${this._itemsCount}&${this._liveTime}`, {method, body, headers})
      .then(checkStatus)
      .catch((error) => {
        error.error(`fetch error: ${error}`);
        throw error;
      });
  }
}

export default API;
