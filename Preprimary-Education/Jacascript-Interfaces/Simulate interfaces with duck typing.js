//import Interface

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

// CompositeForm class

var CompositeForm = function(id, method, action) {
   //...
};
// Implement the Composite interface.

CompositeForm.prototype.add = function (child) {
    //add的实现...
};
CompositeForm.prototype.remove = function (child) {
    //...
};
CompositeForm.prototype.getChild = function (index) {
    //...
};

// Implement the FormItem interface.

CompositeForm.prototype.save = function () {
    //...
};

//...

function addForm(formInstance) {
    ensureImplements(formInstance, Composite, FormItem);
    // This function will throw an error if a required method is not implemented.
    //...
}
