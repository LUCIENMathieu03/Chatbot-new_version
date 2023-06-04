import { Contact } from "../templates/Contact.js";

export class DisplayBot {

    constructor(){
        this._contact = document.querySelector(".user-contacts").firstElementChild;
    }

    addBot(bot) {
        let newBot = new Contact(bot);
        let botHtml = newBot.buildContact();
        this._contact.appendChild(botHtml);
    }
}