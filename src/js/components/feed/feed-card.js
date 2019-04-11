import Component from '../../helpers/component';
import moment from 'moment/moment';
import 'moment-timezone';

// Each post record should display:
// - Post date (formatted as DD/MM/YYYY HH:MM) in the user's timezone
// - Author name
// - Message body

class FeedCard extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._text = data.text;
    this._user = data.user;
    this._nickname = data.nickname;
    this._date = data.date;
  }

  get template() {
    return `
      <article class="feed-card" id="${this._id}">
        <header class="feed-card__header">
          <h1 class="feed-card__title">
            <a href="${this._user.url}" target="_blank">
              ${this._user.name}
              <span class="feed-card__nickname">@${this._nickname}</span>
            </a>
          </h1>
        </header>
        <main class="feed-card__body">
          <p>${this._text}</p>
        </main>
        <footer class="feed-card__footer">
          <time datetime="${moment(this._date).format(`YYYY-MM-DD`)}">
            ${moment(this._date).format(`DD/MM/YYYY HH:MM`)}
          </time>
        </footer>
      </article>`.trim();
  }
}

export default FeedCard;
