import API from './api';

// API
const AUTHORIZATION = `Basic wqe21fwq32WEF32CDWae2d=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/big-trip`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

const tripDayContainer = document.querySelector(`.app__container`);

const renderTripPoints = () => {
  tripDayContainer.innerHTML = `Loading...`;
  api.getTripPoints();
};

renderTripPoints();
