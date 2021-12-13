/*
    虚拟DOM：
    {
        tag: "div",
        attrs: null,
        children: ["hello", { tag: "span", attrs: null, children: ["world!"] }],
    };
*/

function dfs(vnode) {
    const dom = document.createElement(vnode.tag);
    vnode.children.forEach(element => {
        if (typeof element === 'string') {
            dom.innerHTML = dom.innerHTML + element;
        }
        else {
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
    render
};