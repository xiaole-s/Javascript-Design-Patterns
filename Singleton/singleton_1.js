//use closures achieve the Singleton Design Pattern
//Who is this Instance,we can wear the host's namespace
var namespaceOfHost = {};
namespaceOfHost.getInstance = (function () {

    var _instance = null;
    function Singleton() {
        this.a = { x: 3, y: 4 };
        this.b = { x: 30, y: 40 };
        this.c = { x: 300, y: 40 };
    }

    return function () {
        if (!_instance)
            _instance = new Singleton();
        return _instance;
    };
})();
