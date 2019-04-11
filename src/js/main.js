import API from './api';
import FeedCard from './components/feed/feed-card';

const widget = (endPoint, itemsCount, interval, placeToRender) => {
  const api = new API({
    url: endPoint,
    count: itemsCount,
    time: interval
  });

  const renderFeed = (feed) => {
    placeToRender.innerHTML = ``;

    for (const feedCard of feed) {
      const taskComponent = new FeedCard(feedCard);
      placeToRender.appendChild(taskComponent.render());
    }
  };

  api.getData()
    .then((feed) => {
      renderFeed(feed);
    });
};

// - Feed URL
// - Number of posts to display
// - Update interval
const container = document.querySelector(`.app__feed`);
widget(`//api.massrelevance.com/MassRelDemo/`, 20, 1000, container);
