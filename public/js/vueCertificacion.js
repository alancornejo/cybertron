var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jdelacruz on 15/08/2017.
 */
/**
 * Created by jdelacruz on 9/08/2017.
 */
var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'get',
        value: function get(field) {
            if (this.errors[field]) return this.errors[field][0];
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
                return;
            }
            this.errors = {};
        }
    }, {
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'record',
        value: function record(errors) {
            this.errors = errors;
        }
    }]);

    return Errors;
}();

var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;
        for (var field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }
    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }
    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }
    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }
            this.errors.clear();
        }
    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    resolve(response.data);
                    $('.modaladdCertification').modal('toggle');
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();
/**
 * Created by jdelacruz on 14/08/2017.
 */


var vmCertificaciones = new Vue({
    el: '#datosCertificaciones',
    data: {
        certificate: []
    },
    mounted: function mounted() {
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this2 = this;

            axios.post('/viewCertificaciones').then(function (response) {
                return _this2.certificate = response.data;
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }
});