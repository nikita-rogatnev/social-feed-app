import Component from '../../helpers/component';
import moment from 'moment/moment';
import 'moment-timezone';

class FeedCard extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._text = data.text;
    this._user = data.user;
    this._nickname = data.nickname;
    this._date = data.date;
  }

  _getTime() {
    let localTime = moment.utc(this._date).toDate();
    localTime = moment(localTime).format(`DD/MM/YYYY HH:MM`);
    return localTime;
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
            ${this._getTime()}
          </time>
        </footer>
      </article>`.trim();
  }
}

export default FeedCard;
