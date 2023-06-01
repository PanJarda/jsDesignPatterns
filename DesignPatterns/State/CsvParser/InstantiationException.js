define("InstantiationException", [], function() {
    function InstantiationException(object) {
        this.name = 'InstantiationException';
        this.message = "can not create instance of " + object.constructor.name;
    }

    return InstantiationException;
})