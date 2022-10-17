/* Les modules (import, export) ne fonctionnent qu'avec le live server 
https://fr.javascript.info/modules-intro
( ne fonctionne pas en chargeant les fichier locaux sur le navigateur ) */
import { SendMessage } from "./sendMessage/SendMessage.js";
import { DisplayMessage } from "./displayMessage/DisplayMessage.js";
import { MessageApi } from "./api/Api.js";
import { Message } from "./models/Message.js";

class App {
    constructor() {
        this._messageApi = new MessageApi("./data/messages.json");
        this._display = new DisplayMessage();
    }
    async main() {
        let messagesFromApi = await this._messageApi.get();
        let allMessage = messagesFromApi.map((message) => new Message(message));

       
        allMessage.forEach((message) => {
            this._display.addMessage(message);
        });

        let send = new SendMessage();
        send.sendMessage();

        this._display.scrollToLast();
    }
}

const app = new App();
app.main();
