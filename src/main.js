import API from './api';
import FeedCard from './modules/feed/feed-card';

// The widget should accept the following configuration options:
// - Feed URL
// - Number of posts to display
// - Update interval

// API and Params
const FEED_URL = `http://api.massrelevance.com/MassRelDemo/`;
const AUTH = ``;
const CARDS_COUNT = 20;
const UPDATE_TIME = 60;

const api = new API({
  endPoint: FEED_URL,
  authorization: AUTH,
  itemsCount: CARDS_COUNT,
  liveTime: UPDATE_TIME
});

// Render Data
const renderFeed = (feed) => {
  const container = document.querySelector(`.app__feed`);
  container.innerHTML = ``;

  for (const feedCard of feed) {
    const taskComponent = new FeedCard(feedCard);
    container.appendChild(taskComponent.render());
  }
};

api.getData()
  .then((feed) => {
    renderFeed(feed);
  });

