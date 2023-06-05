import {makeAutoObservable} from "mobx";

export default class MusicStore {
    constructor() {
        this._music = []
        this._musicGenres = []
        makeAutoObservable(this)
    }
    setMusic (music) {
        this._music = music
    }

    get music () {
        return this._music
    }

}