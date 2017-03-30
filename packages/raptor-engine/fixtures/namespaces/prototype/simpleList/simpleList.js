const DefaultMinValue = 5;
const DefaultMaxValue = 35;

function produceNewData(oldData, min, max) {
    const len = Math.floor(Math.random() * (max - min)) + min;
    const data = [];
    for (let i = 0; i < len; i += 1) {
        if (Math.round(Math.random()) === 1 && oldData[i]) {
            data.push(oldData[i]);
        } else {
            data.push({ x: Math.floor(Math.random() * 100) });
        }
    }
    return data;
}

import { Element } from "raptor";

export default class SimpleList extends Element {
    min = DefaultMinValue;
    max = DefaultMaxValue;
    label = 'default label';
    header = 'default header';

    constructor() {
        super();
        this.counter = 0;
        this.state.itemClassName = 'item';
        this.state.data = [];
    }

    static get observedAttributes() {
        return ['min', 'max'];
    }

    attributeChangedCallback() {
        this.state.data = produceNewData(this.state.data, this.min, this.max);
    }

    handleClick() {
        this.counter += 1;
        const newData = produceNewData(this.state.data, this.min, this.max);
        this.state.data = newData;
        console.log('clicked');
    }

    @method foo() {
        console.log('foo was called: ', arguments);
        return 1;
    }
}