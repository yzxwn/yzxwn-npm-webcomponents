const XwnCheckbox = (arr, color, callback, name={key: "key", value: "value", check: "check", children: "children", itemChildren: "itemCh"})=>{
    const cssText = `.yzxwn-checkbox{
        position: relative;
        width: 100%;
        margin: -6px -10px;
    }
    .yzxwn-checkbox-item{
        vertical-align: top;
    }
    .yzxwn-checkbox-parent{

    }
    .yzxwn-checkbox-itemParent{
        display: flex!important;
        align-items: flex-start;
    }
    .yzxwn-checkbox-itemChildren>.yzxwn-checkbox-itemParent{
        display: inline-flex!important;
    }
    .yzxwn-checkbox-parent>.yzxwn-checkbox-body{
        border: 1px solid #40a9ff;
        padding: 0 20px 0 3px;
        border-radius: 3px;
    }
    .yzxwn-checkbox-parent>.yzxwn-checkbox-body>.yzxwn-checkbox-body-text{
        font-weight: bold;
    }
    .yzxwn-checkbox-children{
        margin-left: 20px;
    }
    .yzxwn-checkbox-itemChildren{
        display: inline-block;
    }
    .yzxwn-checkbox-itemChildren>.yzxwn-checkbox-item{
        display: inline-block;
    }
    .yzxwn-checkbox-body{
        position: relative;
        cursor: pointer;
        margin: 6px 10px;
        display: inline-flex;
        align-items: center;
    }
    .yzxwn-checkbox-body-box {
        display: inline-block;
        position: relative;
        width: 14px;
        height: 14px;
        border-radius: 2px;
        border: 1px solid #40a9ff;
        background: white;
    }
    .yzxwn-checkbox-body-box-active {
        background: #40a9ff;
        border-color: transparent;
    }
    .yzxwn-checkbox-body-box:before {
        content: '';
        position: absolute;
        top: 1px;
        left: 4px;
        width: 4px;
        height: 8px;
        border: 1px solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    .yzxwn-checkbox-body-box-someActive:before {
        top: 6px;
        left: 2px;
        width: 8px;
        height: 0;
        transform: rotate(0);
    }
    .yzxwn-checkbox-body-text{
        display: inline-block;
        margin-left: 4px;
        white-space: nowrap;
    }
    .yzxwn-checkbox-parent-contract{
        position: relative;
        display: inline-block;
        margin-right: 12px;
        margin-left: -26px;
    }
    .yzxwn-checkbox-parent-contract:before {
        content: '';
        position: absolute;
        top: -10px;
        left:0;
        width: 8px;
        height: 8px;
        border: 1px solid #40a9ff;
        border-width: 0 2px 2px 0;
        transform: rotate(-135deg);
        cursor: pointer;
    }
    .yzxwn-checkbox-parent-contract-active:before {
        transform: rotate(45deg);
        top: -14px;
    }
    .yzxwn-checkbox-parent-contract.yzxwn-checkbox-parent-contract1:before {
        transform: rotate(135deg);
        top: 12px;
        left:0;
    }
    .yzxwn-checkbox-parent-contract-active.yzxwn-checkbox-parent-contract1:before {
        transform: rotate(-45deg);
        left:-4px;
    }
    .yzxwn-checkbox-parent-contract-active + .yzxwn-checkbox-itemChildren, .yzxwn-checkbox-parent-contract-active + .yzxwn-checkbox-children {
        display: none;
    }`;
    const dom = document.createElement("div");
    dom.classList.add("yzxwn-checkbox");

    //显示父选择
    const parentBox = (d) => {
        const parent = [...Array.from(d.getElementsByClassName("yzxwn-checkbox-itemChildren")), ...Array.from(d.getElementsByClassName("yzxwn-checkbox-children"))];
        parent.map((parentCheck)=>{
            const checkbox = Array.from(parentCheck.getElementsByClassName("yzxwn-checkbox-body"));
            const checkbox1 = parentCheck.previousSibling.previousSibling.childNodes[0];
            let check = 0, checkp = 0;
            checkbox.map((item)=>{
                if(!item.dataset.check){
                    checkp += 1;
                }
                if(item.dataset.check === "true"){
                    check += 1;
                }
            });
            if(check){
                checkbox1.classList.add("yzxwn-checkbox-body-box-active");
                (check+checkp<checkbox.length)&&checkbox1.classList.add("yzxwn-checkbox-body-box-someActive");
                (check+checkp===checkbox.length)&&checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            }else{
                checkbox1.classList.remove("yzxwn-checkbox-body-box-active");
                checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            }
        });
    };

    //显示元素
    const addBox = (a, parent)=>{
        let childCheck = [];
        a.map((item)=>{
            const checki = document.createElement("div");
            checki.classList.add("yzxwn-checkbox-item");
            const check = document.createElement("div");
            check.classList.add("yzxwn-checkbox-body");
            check.dataset.key = item[name.key];
            const box = document.createElement("div");
            box.classList.add("yzxwn-checkbox-body-box");
            const text = document.createElement("div");
            text.classList.add("yzxwn-checkbox-body-text");
            text.innerHTML = item[name.value];
            check.appendChild(box);
            check.appendChild(text);
            checki.appendChild(check);
            if(item[name.children]||item[name.itemChildren]){
                //有子选择
                checki.classList.add("yzxwn-checkbox-parent");
                const checkc = document.createElement("div");
                const checka = document.createElement("div");
                if(item[name.children]){
                    checkc.classList.add("yzxwn-checkbox-children");
                    checka.classList.add("yzxwn-checkbox-parent-contract");
                    const childBox = addBox(item[name.children], checkc);
                    checki.appendChild(checka);
                    checki.appendChild(checkc);
                    // childBox.length && box.classList.add("yzxwn-checkbox-body-box-active");
                    // childBox.length && (childBox.length < item[name.children].length) && box.classList.add("yzxwn-checkbox-body-box-someActive");
                    // childCheck.push(childBox);
                    parentBox(checki);
                    childCheck = [...childCheck, ...childBox];
                }else if(item[name.itemChildren]){
                    checki.classList.add("yzxwn-checkbox-itemParent");
                    checkc.classList.add("yzxwn-checkbox-itemChildren");
                    checka.classList.add("yzxwn-checkbox-parent-contract");
                    checka.classList.add("yzxwn-checkbox-parent-contract1");
                    checki.appendChild(checka);
                    checki.appendChild(checkc);
                    const childBox = addBox(item[name.itemChildren], checkc);
                    // item[name.itemChildren].length && box.classList.add("yzxwn-checkbox-body-box-active");
                    // childBox.length && (childBox.length < item[name.itemChildren].length) && box.classList.add("yzxwn-checkbox-body-box-someActive");
                    // childCheck.push(childBox);
                    parentBox(checki);
                    childCheck = [...childCheck, ...childBox];
                }
            }else{
                //无子选择
                if(item[name.check]){
                    childCheck.push(item[name.key]);
                    box.classList.add("yzxwn-checkbox-body-box-active");
                }
                check.dataset.check = item[name.check];
            }
            parent.appendChild(checki);
        });
        return childCheck;
    };
    const value = [...addBox(arr, dom)];
    const cssLink = document.createElement("style");
    cssLink.innerHTML = cssText;
    dom.appendChild(cssLink);

    //事件监听
    dom.addEventListener("click", (e)=>{
        // console.log(e.target)
        const target = e.target;
        if(target.parentNode.className.includes("yzxwn-checkbox-body")){
            //显示子选择
            const box = target.parentNode.childNodes[0];
            const key = target.parentNode.dataset.key;
            if(box.className.includes("yzxwn-checkbox-body-box-active")){
                box.classList.remove("yzxwn-checkbox-body-box-active");
                if(target.parentNode.nextSibling){
                    box.classList.remove("yzxwn-checkbox-body-box-someActive");
                    const childCheck = Array.from(target.parentNode.nextSibling.nextSibling.getElementsByClassName("yzxwn-checkbox-body-box"));
                    childCheck.map((item)=> {
                        if(!item.parentNode.nextSibling){
                            value.splice(value.indexOf(item.parentNode.dataset.key), 1);
                            item.parentNode.dataset.check = false;
                        }
                        item.classList.remove("yzxwn-checkbox-body-box-active");
                    });
                }else{
                    value.splice(value.indexOf(key), 1);
                    target.parentNode.dataset.check = false;
                }
            }else{
                box.classList.add("yzxwn-checkbox-body-box-active");
                if(target.parentNode.nextSibling){
                    const childCheck = Array.from(target.parentNode.nextSibling.nextSibling.getElementsByClassName("yzxwn-checkbox-body-box"));
                    childCheck.map((item)=> {
                        if(!item.parentNode.nextSibling){
                            value.push(item.parentNode.dataset.key);
                            item.parentNode.dataset.check = true;
                        }
                        item.classList.add("yzxwn-checkbox-body-box-active");
                        item.classList.remove("yzxwn-checkbox-body-box-someActive");
                    });
                }else{
                    value.push(key);
                    target.parentNode.dataset.check = true;
                }
            }
            //显示父选择
            parentBox(dom);
            // const parentCheck = target.parentNode.parentNode.parentNode;
            // if(parentCheck.className.includes("yzxwn-checkbox-itemChildren")||parentCheck.className.includes("yzxwn-checkbox-children")){
            //     const checkbox = Array.from(parentCheck.getElementsByClassName("yzxwn-checkbox-body"));
            //     const checkbox1 = parentCheck.previousSibling.previousSibling.childNodes[0];
            //     let check = 0;
            //     checkbox.map((item)=>{
            //         if(!item.dataset.check || item.dataset.check === "true"){
            //             check += 1;
            //         }
            //     });
            //     if(check){
            //         checkbox1.classList.add("yzxwn-checkbox-body-box-active");
            //         (check<checkbox.length)&&checkbox1.classList.add("yzxwn-checkbox-body-box-someActive");
            //         (check===checkbox.length)&&checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            //     }else{
            //         checkbox1.classList.remove("yzxwn-checkbox-body-box-active");
            //         checkbox1.classList.remove("yzxwn-checkbox-body-box-someActive");
            //     }
            // }
            callback(value);
        }else if(target.className.includes("yzxwn-checkbox-parent-contract")){
            const box = target;
            if(box.className.includes("yzxwn-checkbox-parent-contract-active")){
                box.classList.remove("yzxwn-checkbox-parent-contract-active");
            }else{
                box.classList.add("yzxwn-checkbox-parent-contract-active");
            }
        }
    });
    callback(value);
    return {dom};
};
// export {XwnCheckbox}