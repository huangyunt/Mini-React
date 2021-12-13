/*
    Jsx:
        <div>
            hello<span>world!</span>
        </div>
    会被编译成：
    {
        tag: "div",
        attrs: null,
        children: ["hello", { tag: "span", attrs: null, children: ["world!"] }],
    };
*/
function createElement( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}
export const React = {
    createElement
};