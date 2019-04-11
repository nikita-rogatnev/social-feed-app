import Component from '../../helpers/component';

class Feed extends Component {
  constructor(data) {
    super();
    this.id = data.id;
    this.text = data.text;
    this.user = data.user;
  }

  get template() {
    return `
      <article class="trip-point">
        ${this.id}
      </article>`.trim();
  }

  bind() {
  }

  unbind() {
  }
}

export default Feed;
