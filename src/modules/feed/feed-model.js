class FeedModel {
  constructor(data) {
    this.id = data.id;
    this.text = data.text;
    this.user = data.user;
  }

  static parseFeedItem(data) {
    return new FeedModel(data);
  }

  static parseFeedItems(data) {
    return data.map(FeedModel.parseFeedItem);
  }
}

export default FeedModel;
