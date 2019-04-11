class FeedModel {
  constructor(data) {
    this.id = data.id;
    this.text = data.text || ``;
    this.user = data.user || ``;
    this.nickname = data.user.screen_name || ``;
    this.date = new Date(data.created_at);
  }

  static parseFeedItem(data) {
    return new FeedModel(data);
  }

  static parseFeedItems(data) {
    return data.map(FeedModel.parseFeedItem);
  }
}

export default FeedModel;
