const XwnCheckbox = (arr)=>{
    const dom = document.createElement("div");
    dom.innerHTML = arr;
    const styleJson = {
        color: "chartreuse",
        ["font-size"]: "20px"
    };
    const toString = (obj)=>{
        let string = "";
        for(let key in obj){
            string += `${key}:${obj[key]};`;
        }
        return string;
    };
    dom.style.cssText = toString(styleJson);
    return dom;
};
export {XwnCheckbox}