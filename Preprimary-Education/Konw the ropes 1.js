/* This version allows the calls to be chained. 
   在对象方法中返回this使其可链式调用
*/

Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};


