/*
    虚拟DOM：
    {
        tag: "div",
        attrs: null,
        children: ["hello", { tag: "span", attrs: null, children: ["world!"] }],
    };
var element =  React.createElement(
    "div",
    {
        style: {
            width: 200,
            height: 200,
            backgroundColor: "red",
        },
    },
    "hello",
    React.createElement("span", null, "world!"),
    React.createElement("div", null, "huangyunze"),
    React.createElement("b", null)
);
*/

function setAttribute(dom, attrs) {
    attrs.forEach((attr, value) => {
        // 如果是Event: onXXX
        if (/on\w+/.test(attr)) {
            dom[attr.toLowerCase()] = value;
        } else if (attr === "style") {
            Object.entries(value).forEach(
                (styleName, styleValue) => (dom[styleName] = styleValue)
            );
        } else {
            dom.setAttribute(attr, value);
        }
    });
}

function dfs(vnode) {
    const dom = document.createElement(vnode.tag);
    setAttribute(dom, vnode.attrs);
    vnode.children.forEach(element => {
        if (typeof element === "string") {
            dom.appendChild(document.createTextNode(element));
        } else {
            dom.appendChild(dfs(element));
        }
    });
    return dom;
}

/**
 *
 * @param {HTMLElement} domContainer
 */
function render(vnode, domContainer) {
    domContainer.appendChild(dfs(vnode));
}

export const ReactDOM = {
    render,
};
