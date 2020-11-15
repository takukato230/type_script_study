"use strict";
class Cat {
    constructor(name) {
        this.meow = () => console.info('meow!!');
        this.eat = (food) => console.info('Ate some', food, '. Mmm!');
        this.sleep = (hours) => console.info('sleep for', hours, 'hours');
        this.name = name;
    }
}
