"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XwnCheckbox = function XwnCheckbox(arr) {
    var dom = document.createElement("div");
    dom.innerHTML = arr;
    var styleJson = _defineProperty({
        color: "chartreuse"
    }, "font-size", "20px");
    var toString = function toString(obj) {
        var string = "";
        for (var key in obj) {
            string += key + ":" + obj[key] + ";";
        }
        return string;
    };
    dom.style.cssText = toString(styleJson);
    return dom;
};
exports.XwnCheckbox = XwnCheckbox;