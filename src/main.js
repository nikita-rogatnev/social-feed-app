import API from './api';
import Feed from './modules/feed/feed';

// API
const END_POINT = `http://api.massrelevance.com/MassRelDemo/`;
const api = new API({endPoint: END_POINT});

// Render Data
const renderFeed = (feed) => {
  const container = document.querySelector(`.app__container`);
  container.innerHTML = ``;

  for (const feedCard of feed) {
    const taskComponent = new Feed(feedCard);
    container.appendChild(taskComponent.render());
  }
};

api.getData()
  .then((feed) => {
    renderFeed(feed);
  });

