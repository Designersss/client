import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._usersAll = []
        makeAutoObservable(this)
    }
    setIsAuth (bool) {
        this._isAuth = bool
    }
    setUser (user) {
        this._user = user
    }
    setUsersAll (usersAll) {
        this._usersAll = usersAll
    }
    get isAuth () {
        return this._isAuth
    }
    get user () {
        return this._user
    }
    get usersAll () {
        return this._usersAll
    }
}