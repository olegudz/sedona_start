let hotelSearch = document.querySelector('.hotel-search');
let btnShowHotel = document.querySelector('#btn-show-hotel');

let countAdult = document.querySelector('#count_adult');
let countKid = document.querySelector('#count_kid');

btnShowHotel.addEventListener('click', (evn) => {
    evn.preventDefault();
    hotelSearch.classList.toggle('show');
})

class Counter {
    constructor(obj) {
        this.pre = obj.querySelector('.pre');
        this.counter = obj.querySelector('input[type=text]');
        this.next = obj.querySelector('.next');
        this.number = this.counter.value;

        this.pre.addEventListener('click', () =>  this.number-- );
        this.next.addEventListener('click', () =>  this.number++ );
        this.counter.addEventListener('change', () => this.number = this.counter.value);
    }

    set number(value) {
        this._number = +parseInt(value);
        if (!this._number) {
            this._number = 0;
        }
        this.counter.value = this._number;
    }

    get number() {
        return this._number;
    }

}

let countAdultObj = new Counter(countAdult);
let countKidObj = new Counter(countKid);