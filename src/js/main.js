import API from './api';
import FeedCard from './components/feed/feed-card';

const renderWidget = (endPoint, itemsCount, interval, placeToRender) => {
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

// The widget should accept the following configuration options:
// - Feed URL
// - Number of posts to display
// - Update interval
const container = document.querySelector(`.app__feed`);
renderWidget(`//api.massrelevance.com/MassRelDemo/`, 20, 60, container);
