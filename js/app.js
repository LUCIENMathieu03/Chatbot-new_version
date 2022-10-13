/* Les modules (import, export) ne fonctionnent qu'avec le live server 
https://fr.javascript.info/modules-intro
( ne fonctionne pas en chargeant les fichier locaux sur le navigateur ) */
import { SendMessage } from './sendMessage/SendMessage.js';


class App {
  main() {
    // C'est la qu'on va mettre le code a executer
    let send = new SendMessage();
    send.sendMessage();
  }
}

const app = new App();
app.main();
