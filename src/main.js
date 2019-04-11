import API from './api';
import FeedCard from './modules/feed/feed-card';

// The widget should accept the following configuration options:
// - Feed URL
// - Number of posts to display
// - Update interval

// API
const END_POINT = `http://api.massrelevance.com/MassRelDemo/`;
const api = new API({endPoint: END_POINT});

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

