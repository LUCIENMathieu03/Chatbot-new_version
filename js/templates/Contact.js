export class Contact {
    constructor(bot) {
        this._bot = bot;
    }

    buildContact() {
        let li = document.createElement("li");
        li.innerHTML = `<div class="user-contacts--items">
                            <div class="user-contacts--items--avatar">
                                <img
                                    src="${this._bot._profilPicture}"
                                    alt="Contact avatar"
                                />
                            </div>
                            <div class="user-contacts--items--name">${this._bot._name}</div>
                        </div>`;
        li.firstChild;
        return li;
    }
}
