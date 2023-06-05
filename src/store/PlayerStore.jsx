import {makeAutoObservable} from "mobx";

export default class PlayerStore {
    constructor() {
        this._playerMusic = {}
        this._play = false
        this._stop = true
        makeAutoObservable(this)
    }

    setPlayerMusic(playerMusic) {
        this._playerMusic = playerMusic
    }

    setPlay(play){
        this._play = play
    }

    setStop(stop){
        this._play = stop
    }

    get playerMusic() {
        return this._playerMusic
    }

    get play() {
        return this._play
    }

    get stop() {
        return this._stop
    }
}