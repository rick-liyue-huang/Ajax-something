
/**
 *  Here I will create one promise object
 * 
 * Promise characters:
 * 1. 创建时候必须传入一个函数，否则会报错 has to pass in one function when create Promise object, otherwise throw error;
 * 2. 会给传入的函数设置两个回调函数 setting two callbacks in the passed in fucntion;
 * 3. 刚创建的Promise对象状态是'pending', the initial state of new Promise object is 'pending';
 * 4. 状态一旦发生改变就不可以改变 the state can not change back;
 * 5. 可以通过then来监听状态的改变 can use 'then' method to listen the state change;
 * 6. 如果添加监听状态已经改变，立即执行监听回调
 * 7. 如果添加监听时候状态未改变，那么状态改变时候再执行监听回调
 * 8. 同一个Promise对象可以添加多个then监听，状态改变时候所有的监听按照添加孙旭执行 one Promise object can add multiple 'then' method listener. When the state of promise changes, it will trigger the 'then' by the order as the written code.
 *  
 *  */ 
 
// define the constants to store the promise object status
 const PENDING = 'pending';
 const FULLFILLED = 'fullfilled';
 const REJECTED = 'rejected';

 class MyPromise {
   constructor(handler) {

    //  initial the status
    this.status = PENDING;

    // define the variables to store the arguments in '_resolve' and '_reject' function
    this.value = undefined;
    this.reason = undefined;

    // define variable to store the listened function
    // 定义变量保存监听的函数
    // this.onResovledCallback = null;
    // this.onRejectedCallback = null;

    // one promise can trigger the different then
    this.onResovledCallback = [];
    this.onRejectedCallback = [];

    // confirm the handler is function, otherwise throw one exception
    if(!this._isFunction(handler)) {
      throw new Error('please pass in one function');
    }
    // pass two function arguments in the handler
    // here notes: need to bind this to new MyPromise 
    handler(this._resolve.bind(this), this._reject.bind(this));

   }
  //  export 'then' method, can trigger the different callback by status,  
  then(onResovled, onRejected) {
    // confirm has 'onResolved' callback
    if(this._isFunction(onResovled)) {
      // confirm the current status is fullfilled
      if(FULLFILLED === this.status) {
        onResovled(this.value);
      }
    }
    // confirm has 'onRejected' callback
    if(this._isFunction(onRejected)) {
      // confirm the current status is rejected
      if(REJECTED === this.status) {
        onRejected(this.reason);
      }
    }
    // 如果添加监听时候状态未改变，那么状态改变时候再执行监听回调
    // 判断当前的状态是否是默认状态 confirm the current status is the default status
    if(PENDING === this.status) {
      if(this._isFunction(onResovled)) {
        // this.onResovledCallback = onResovled;
        this.onResovledCallback.push(onResovled);
      } 
      if(this._isFunction(onResovled)) {
        // this.onRejectedCallback = onRejected;
        this.onRejectedCallback.push(onRejected);
      }
    }
  }
  // private mehtod
   _isFunction(fn) {
     return 'function' === typeof fn;
   }
   _resolve(value) {
    //  the status cannot change back!!
    if(PENDING === this.status) {
      // console.log('resolve');
      this.status = FULLFILLED;
     // console.log(this);
     this.value = value;

    // 之前是默认状态，当状态改变的时候执行回调
    // this.onResovledCallback(this.value);
    this.onResovledCallback.forEach(fn => {
        fn(this.value); // arrow function can bind this
      })
    }
    
   }
   _reject(reason) {
     //  the status cannot change back!!
     if(PENDING === this.status) {
      // console.log('reject');
      this.status = REJECTED;
      this.reason = reason;
      // 之前的状态没有改变，当状态改变的时候执行回调
      // this.onRejectedCallback(this.reason);
      this.onRejectedCallback.forEach(fn => {
        fn(this.reason); // arrow function can bind this
      })
     }
    
   }
 }

