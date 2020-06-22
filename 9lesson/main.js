'use strict'
'use strict'
const CustomPromise = function(callback){
	this.__success__ = [];
	this.__error__ = [];
	this._callback = callback;
	this.then = function(successCb, rejectCb){
		if(successCb){
			this.__success__.push(successCb);
		}
		if(rejectCb){
			this.__error__.push(rejectCb)
		}
	}

	this.catch = function(rejectCb){
		this.then(null,rejectCb);
	}

	this._resolve = function(result){
		this.__success__.forEach(cb => cb(result))
	}
	this._reject = function(err){
		this.__error__.forEach(cb => cb(err))
	}

	setTimeuot(()=>{
		callback(this._resolve.bind(this), this._reject.bind(this))
	},0)
}




function chain(callback) {
    console.log("<chain>");
    var queue = [];
    function _next() {
        console.log("next");
        var cb = queue.shift();
        if (cb) {
            cb(_next);
        }
        console.log("next")
    }
    setTimeout(_next, 0);
    var then = function(cb) {
        console.log("then");
        queue.push(cb);
        console.log("then");
        return { then: then }
    }
    console.log("chain");
    return then(callback);
}

chain(function(next) {
    console.log('1');
    setTimeout(function() {
        console.log('2');
        next();
    }, 1000);
}).then(function(next) {
    console.log('3');
    setTimeout(function() {
        console.log('4');
        next();
    }, 1000);
}).then(function(next) {
    console.log('5');
    next();
});
