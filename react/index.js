// 将上文定义的createElement方法放到对象React中
function createElement( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}
export default React = {
    createElement
};