//使用闭包实现cpp中Singleton代码的js实现
var namespaceOfHost = {};//命名空间
namespaceOfHost.getInstance = (function () {

    var _instance = null;  //静态私有变量
    function Singleton() { //Singleton类
        this.a = { x: 3, y: 4 };
        this.b = { x: 30, y: 40 };
        this.c = { x: 300, y: 40 };
    }
    
    Singleton.prototype = {
        doSomething:function(p){},
        d:3
    }

    return function () {
        if (!_instance)
            _instance = new Singleton();//只创建一次实例
        return _instance;
    };
})();

//使用
namespaceOfHost.getInstance.doSomething(x);
