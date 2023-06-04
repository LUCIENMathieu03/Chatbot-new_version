/* Les modules (import, export) ne fonctionnent qu'avec le live server 
https://fr.javascript.info/modules-intro
( ne fonctionne pas en chargeant les fichier locaux sur le navigateur ) */
import { SendMessage } from "./sendMessage/SendMessage.js";
import { DisplayMessage } from "./displayMessage/DisplayMessage.js";
import { MessageApi } from "./api/Api.js";
import { Message } from "./models/Message.js";
import {Bot} from "./models/Bot.js";
import {DisplayBot} from './displayBot/DisplayBot.js'

class App {
    constructor() {
        this._messageApi = new MessageApi("./data/messages.json");
        this._displayMessage = new DisplayMessage();
        this._displayBot = new DisplayBot();
    }
    async main() {
        let messagesFromApi = await this._messageApi.get();
        let allMessage = messagesFromApi.map((message) => new Message(message));

        allMessage.forEach((message) => {
            this._displayMessage.addMessage(message);
        });

        let bot1 = new Bot('Aria stark', 'https://i.pinimg.com/originals/fd/29/9c/fd299c3743a9679df23f110daf575ee4.jpg');
        
        this._displayBot.addBot(bot1);

        let send = new SendMessage();
        send.sendMessage();

        this._displayMessage.scrollToLast();
    }
}

const app = new App();
app.main();
