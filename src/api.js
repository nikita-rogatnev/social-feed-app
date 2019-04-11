import ModelTripPoint from './modules/trip-points/model-trip-point';

const CheckStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

class API {
  constructor({endPoint, authorization}) {
    this._METHODS = {
      GET: `GET`,
      POST: `POST`,
      PUT: `PUT`,
      DELETE: `DELETE`
    };

    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getTripPoints() {
    return this._load({url: `points`})
      .then(toJSON)
      .then(ModelTripPoint.parseTripPoints);
  }

  _load({url, method = this._METHODS.GET, body = null, headers = new Headers()}) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(CheckStatus)
      .catch((error) => {
        throw error;
      });
  }
}

export default API;
