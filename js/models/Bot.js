export class Bot {
    constructor(name, profilPicture){
        this._name = name;
        this._messages = [];
        this._profilPicture = profilPicture;
    }

    get name (){
        return this._name;
    }

    get messages (){
        return this._messages;
    }

    get profilPicture (){
        return this._profilPicture;
    }


}