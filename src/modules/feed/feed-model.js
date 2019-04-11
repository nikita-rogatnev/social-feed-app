class FeedModel {
  constructor(data) {
    this.id = data.id;
    this.text = data.text || ``;
    this.user = data.user || `Unknown user`;
    this.nickname = data.user.screen_name || `Unknown user nickname`;
    this.date = new Date(data.created_at) || new Date();
  }

  static parseFeedItem(data) {
    return new FeedModel(data);
  }

  static parseFeedItems(data) {
    return data.map(FeedModel.parseFeedItem);
  }
}

export default FeedModel;
