import { MessageBubble } from "../templates/MessageBubble.js";

export class DisplayMessage {
    constructor() {
        this._chat = document.querySelector(".chat");
        this._chat = document.querySelector(".chat-and-input .chat");
    }

    scrollToLast() {
        this._chat.scrollTop = this._chat.scrollHeight;
    }

    addMessage(newMessage) {
        let messageToAdd = new MessageBubble(newMessage);
        let messageHtml = messageToAdd.buildMessage();
        this._chat.appendChild(messageHtml);
        this.scrollToLast();
    }

}
