import { action, observable } from 'mobx';

export default class Store {
    @action handleChange = (e) => {
        const { name, value } = e.target;
        this[name] = value;
    }
}