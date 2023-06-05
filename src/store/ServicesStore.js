import {makeAutoObservable} from "mobx";

export default class ServicesStore{
    constructor() {
        this._servicesAll = []
        makeAutoObservable(this)
    }

    setServicesAll (servicesAll) {
        this._servicesAll = servicesAll
    }

    get servicesAll () {
        return this._servicesAll
    }
}