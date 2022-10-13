export class Message {
  constructor(data) {
    this._content = data.content;
    this._date = data.date;
    this._sender = data.sender || null;
  }

  get content() {
    return this._content;
  }

  get sender() {
    return this._sender;
  }

  get content() {
    return this._date;
  }
}
