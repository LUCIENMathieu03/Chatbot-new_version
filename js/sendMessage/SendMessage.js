import { Message } from "../models/Message.js";
import { MessageBubble } from "../templates/MessageBubble.js";

export class SendMessage {
  constructor() {
    this._textInput = document.querySelector(".messageTextInput");
    this._button = document.querySelector(".buttonMessage");
    this._chat = document.querySelector('.chat-and-input .chat');
  }

  sendMessage() {
    this._button.addEventListener("click", (e) => {
      e.preventDefault();
      let messageContent = this._textInput.value;

      //calculate date and time
      var today = new Date();
      var date = today.getFullYear() +"-" +(today.getMonth() + 1) + "-" +today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() 
     
      if(messageContent){
        const messageSent = new Message({
            content : messageContent,
            date : {
              hour: time, 
              day : date,
            },
        });
        let newMessage = new MessageBubble(messageSent);
        let messageHtml = newMessage.buildMessage();
        this._chat.appendChild(messageHtml);
      }
      
    });
  }
}
