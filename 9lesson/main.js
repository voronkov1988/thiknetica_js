'use strict'
class CustomPromise {
    constructor(callback) {
        this.__success__ = [];
        this.__error__ = [];
        this._callback = callback;
        this.condition = 'pending';

        if (callback) {
            setTimeout(() => {
                callback(this._resolve.bind(this), this._reject.bind(this));
            }, 0)
        }
    }

     thenAndCatch(promise) {
        promise.then(console.log, console.error);
        promise.catch(result => console.error(result - 5));
    }

    catch (rejectCb) {
        this.then(null, rejectCb)
    }

    resolve(value) {
        this._resolve(value);
    }

    reject(value) {
        this._reject(value);
    }

    _resolve(value) {
        if (this.condition !== 'pending')
            throw new Error('промис выполнен');
        this.__success__.forEach(cb => cb(value));
        this.condition = 'fulfilled';
        this._value = value;
    }

    _reject(value) {
        if (this.condition !== 'pending')
            throw new Error('промис выполнен');
        this.__error__.forEach(cb => cb(value))
        this.condition = 'rejected';
        this._value = value;
    }

    get state() {
        return this.condition;
    }

    get value() {
        return this.state;
    }

    then(successCb, rejectCb) {
        if (this.condition === 'fulfilled' && successCb) {
            successCb(this._value);
        }
        if (this.condition === 'rejected' && rejectCb) {
            rejectCb(this._value);
        }
        if (this.condition === 'pending') {
            if (successCb) {
                this.__success__.push(successCb);
            }
            if (rejectCb) {
                this.__error__.push(rejectCb);
            }
        }
    }

    static resolve(value) {
        const myPromise = new CustomPromise();
        myPromise._value = value;
        myPromise.condition = 'fulfilled';
        return myPromise;
    }

    static reject(value) {
        const myPromise = new CustomPromise();
        myPromise._value = value;
        myPromise.condition = 'rejected';
        return myPromise;
    }
}



const prom = new CustomPromise();
const prom2 = new CustomPromise();
const prom3 = CustomPromise.reject(100);
const prom4 = CustomPromise.resolve(343);
prom.thenAndCatch(prom);
prom.reject(3434);
prom2.resolve(233);
prom2.thenAndCatch(prom2);
prom3.thenAndCatch(prom3);
prom4.thenAndCatch(prom4);