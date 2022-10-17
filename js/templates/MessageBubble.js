export class MessageBubble {
    constructor(message) {
        this._message = message;
    }

    buildMessage() {
        let div = document.createElement("div");
        if (this._message._sender) {
            div.classList.add("message-received");
            div.innerHTML = `<div class="message-received--header">
            <span class="message-received--header--name"><strong>${this._message._sender}</strong></span>
            </div>
          <p>
            ${this._message._content}
          </p>
          <div class="message-received-footer">
            <div class="information-of-message">
              <span class="time-message">${this._message._date.hour}</span>
              <span class="date-message">(${this._message._date.day})</span>
            </div>
          </div>`;
            div.firstChild;
            return div;
        } else {
            div.classList.add("message-sent");
            div.innerHTML = `<p>
            ${this._message._content}
          </p>
          <div class="message-sent-footer">
            <div class="information-of-message">
              <span class="time-message">${this._message._date.hour}</span>
              <span class="date-message">(${this._message._date.day})</span>
            </div>
          </div>`;
            div.firstChild;
            return div;
        }
    }
}
