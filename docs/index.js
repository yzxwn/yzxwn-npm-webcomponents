"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var XwnCheckbox = function XwnCheckbox(arr, color, callback) {
    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { key: "key", value: "value", check: "check", children: "children", itemChildren: "itemCh" };

    var cssText = ".yzxwn-checkbox{\n        position: relative;\n        width: 100%;\n        margin: -6px -10px;\n    }\n    .yzxwn-checkbox-item{\n        vertical-align: top;\n    }\n    .yzxwn-checkbox-parent{\n\n    }\n    .yzxwn-checkbox-itemParent{\n        display: flex!important;\n        align-items: flex-start;\n    }\n    .yzxwn-checkbox-itemChildren>.yzxwn-checkbox-itemParent{\n        display: inline-flex!important;\n    }\n    .yzxwn-checkbox-parent>.yzxwn-checkbox-body{\n        border: 1px solid #40a9ff;\n        padding: 0 20px 0 3px;\n        border-radius: 3px;\n    }\n    .yzxwn-checkbox-parent>.yzxwn-checkbox-body>.yzxwn-checkbox-body-text{\n        font-weight: bold;\n    }\n    .yzxwn-checkbox-children{\n        margin-left: 20px;\n    }\n    .yzxwn-checkbox-itemChildren{\n        display: inline-block;\n    }\n    .yzxwn-checkbox-itemChildren>.yzxwn-checkbox-item{\n        display: inline-block;\n    }\n    .yzxwn-checkbox-body{\n        position: relative;\n        cursor: pointer;\n        margin: 6px 10px;\n        display: inline-flex;\n        align-items: center;\n    }\n    .yzxwn-checkbox-body-box {\n        display: inline-block;\n        position: relative;\n        width: 14px;\n        height: 14px;\n        border-radius: 2px;\n        border: 1px solid #40a9ff;\n        background: white;\n    }\n    .yzxwn-checkbox-body-box-active {\n        background: #40a9ff;\n        border-color: transparent;\n    }\n    .yzxwn-checkbox-body-box:before {\n        content: '';\n        position: absolute;\n        top: 1px;\n        left: 4px;\n        width: 4px;\n        height: 8px;\n        border: 1px solid white;\n        border-width: 0 2px 2px 0;\n        transform: rotate(45deg);\n    }\n    .yzxwn-checkbox-body-box-someActive:before {\n        top: 6px;\n        left: 2px;\n        width: 8px;\n        height: 0;\n        transform: rotate(0);\n    }\n    .yzxwn-checkbox-body-text{\n        display: inline-block;\n        margin-left: 4px;\n        white-space: nowrap;\n    }\n    .yzxwn-checkbox-parent-contract{\n        position: relative;\n        display: inline-block;\n        margin-right: 12px;\n        margin-left: -26px;\n    }\n    .yzxwn-checkbox-parent-contract:before {\n        content: '';\n        position: absolute;\n        top: -10px;\n        left:0;\n        width: 8px;\n        height: 8px;\n        border: 1px solid #40a9ff;\n        border-width: 0 2px 2px 0;\n        transform: rotate(-135deg);\n        cursor: pointer;\n    }\n    .yzxwn-checkbox-parent-contract-active:before {\n        transform: rotate(45deg);\n        top: -14px;\n    }\n    .yzxwn-checkbox-parent-contract.yzxwn-checkbox-parent-contract1:before {\n        transform: rotate(135deg);\n        top: 12px;\n        left:0;\n    }\n    .yzxwn-checkbox-parent-contract-active.yzxwn-checkbox-parent-contract1:before {\n        transform: rotate(-45deg);\n        left:-4px;\n    }\n    .yzxwn-checkbox-parent-contract-active + .yzxwn-checkbox-itemChildren, .yzxwn-checkbox-parent-contract-active + .yzxwn-checkbox-children {\n        display: none;\n    }";
    var dom = document.createElement("div");
    dom.classList.add("yzxwn-checkbox");

    //显示父选择
    var parentBox = function parentBox(d) {
        var parent = [].concat(_toConsumableArray(Array.from(d.getElementsByClassName("yzxwn-checkbox-itemChildren"))), _toConsumableArray(Array.from(d.getElementsByClassName("yzxwn-checkbox-children"))));
        parent.map(function (parentCheck) {
            var checkbox = Array.from(parentCheck.getElementsByClassName("yzxwn-checkbox-body"));
            var checkbox1 = parentCheck.previousSibling.previousSibling.childNodes[0];
            var check = 0,
                checkp = 0;
            checkbox.map(function (item) {
                if (!item.dataset.check) {
                    checkp += 1;
                }
                if (item.dataset.check === "true") {
                    check += 1;
                }
            });
            if (check) {
                checkbox1.classList.add("yzxwn-checkbox-body-box-active");
                check + checkp < checkbox.length && checkbox1.classList.add("yzxwn-checkbox-body-box-someActive");
                check + checkp === checkbox.length && checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            } else {
                checkbox1.classList.remove("yzxwn-checkbox-body-box-active");
                checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            }
        });
    };

    //显示元素
    var addBox = function addBox(a, parent) {
        var childCheck = [];
        a.map(function (item) {
            var checki = document.createElement("div");
            checki.classList.add("yzxwn-checkbox-item");
            var check = document.createElement("div");
            check.classList.add("yzxwn-checkbox-body");
            check.dataset.key = item[name.key];
            var box = document.createElement("div");
            box.classList.add("yzxwn-checkbox-body-box");
            var text = document.createElement("div");
            text.classList.add("yzxwn-checkbox-body-text");
            text.innerHTML = item[name.value];
            check.appendChild(box);
            check.appendChild(text);
            checki.appendChild(check);
            if (item[name.children] || item[name.itemChildren]) {
                //有子选择
                checki.classList.add("yzxwn-checkbox-parent");
                var checkc = document.createElement("div");
                var checka = document.createElement("div");
                if (item[name.children]) {
                    checkc.classList.add("yzxwn-checkbox-children");
                    checka.classList.add("yzxwn-checkbox-parent-contract");
                    var childBox = addBox(item[name.children], checkc);
                    checki.appendChild(checka);
                    checki.appendChild(checkc);
                    parentBox(checki);
                    childCheck = [].concat(_toConsumableArray(childCheck), _toConsumableArray(childBox));
                } else if (item[name.itemChildren]) {
                    checki.classList.add("yzxwn-checkbox-itemParent");
                    checkc.classList.add("yzxwn-checkbox-itemChildren");
                    checka.classList.add("yzxwn-checkbox-parent-contract");
                    checka.classList.add("yzxwn-checkbox-parent-contract1");
                    checki.appendChild(checka);
                    checki.appendChild(checkc);
                    var _childBox = addBox(item[name.itemChildren], checkc);
                    parentBox(checki);
                    childCheck = [].concat(_toConsumableArray(childCheck), _toConsumableArray(_childBox));
                }
            } else {
                //无子选择
                if (item[name.check]) {
                    childCheck.push(item[name.key]);
                    box.classList.add("yzxwn-checkbox-body-box-active");
                }
                check.dataset.check = item[name.check];
            }
            parent.appendChild(checki);
        });
        return childCheck;
    };
    var value = [].concat(_toConsumableArray(addBox(arr, dom)));
    var cssLink = document.createElement("style");
    cssLink.innerHTML = cssText;
    dom.appendChild(cssLink);

    //事件监听
    dom.addEventListener("click", function (e) {
        // console.log(e.target)
        var target = e.target;
        if (target.parentNode.className.includes("yzxwn-checkbox-body")) {
            //显示子选择
            var box = target.parentNode.childNodes[0];
            var key = target.parentNode.dataset.key;
            if (box.className.includes("yzxwn-checkbox-body-box-active")) {
                box.classList.remove("yzxwn-checkbox-body-box-active");
                if (target.parentNode.nextSibling) {
                    box.classList.remove("yzxwn-checkbox-body-box-someActive");
                    var childCheck = Array.from(target.parentNode.nextSibling.nextSibling.getElementsByClassName("yzxwn-checkbox-body-box"));
                    childCheck.map(function (item) {
                        if (!item.parentNode.nextSibling) {
                            value.indexOf(item.parentNode.dataset.key) > -1 && value.splice(value.indexOf(item.parentNode.dataset.key), 1);
                            item.parentNode.dataset.check = false;
                        }
                        item.classList.remove("yzxwn-checkbox-body-box-active");
                    });
                } else {
                    value.indexOf(key) > -1 && value.splice(value.indexOf(key), 1);
                    target.parentNode.dataset.check = false;
                }
            } else {
                box.classList.add("yzxwn-checkbox-body-box-active");
                if (target.parentNode.nextSibling) {
                    var _childCheck = Array.from(target.parentNode.nextSibling.nextSibling.getElementsByClassName("yzxwn-checkbox-body-box"));
                    _childCheck.map(function (item) {
                        if (!item.parentNode.nextSibling) {
                            value.push(item.parentNode.dataset.key);
                            item.parentNode.dataset.check = true;
                        }
                        item.classList.add("yzxwn-checkbox-body-box-active");
                        item.classList.remove("yzxwn-checkbox-body-box-someActive");
                    });
                } else {
                    value.push(key);
                    target.parentNode.dataset.check = true;
                }
            }
            parentBox(dom);
            callback(value);
        } else if (target.className.includes("yzxwn-checkbox-parent-contract")) {
            var _box = target;
            if (_box.className.includes("yzxwn-checkbox-parent-contract-active")) {
                _box.classList.remove("yzxwn-checkbox-parent-contract-active");
            } else {
                _box.classList.add("yzxwn-checkbox-parent-contract-active");
            }
        }
    });
    callback(value);
    return { dom: dom };
};
// export {XwnCheckbox}