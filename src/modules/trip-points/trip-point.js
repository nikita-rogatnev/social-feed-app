import Component from '../component';

// Trip Point Class
class TripPoint extends Component {
  constructor(data) {
    super();
    this._destination = data.destination;
  }

  get template() {
    return `
      <article class="trip-point">
        123
      </article>`.trim();
  }

  bind() {
  }

  unbind() {
  }
}

export default TripPoint;
