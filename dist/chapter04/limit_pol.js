"use strict";
function mapNode(node, f) {
    return Object.assign(Object.assign({}, node), { value: f(node.value) });
}
let aNode = { value: 'a' };
let bNode = { value: 'b', isLeaf: true };
let cNode = { value: 'c', children: [bNode] };
let aNode1 = mapNode(aNode, _ => _.toUpperCase());
let bNode1 = mapNode(bNode, _ => _.toUpperCase());
let cNode1 = mapNode(cNode, _ => _.toUpperCase());
function logPerimeter(s) {
    console.log(s.numberOfSides * s.sideLength);
    return s;
}
let square = {
    numberOfSides: 4,
    sideLength: 3
};
logPerimeter(square);
