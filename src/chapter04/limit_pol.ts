type TreeNode = {
  value: string
}

// TreeNodeが持っている全てのプロパティに加えて、
// 常にtrueであるプロパティisLeafを持つ
type LeafNode = TreeNode & {
  isLeaf: true
}

// TreeNodeの全てのプロパティをもち、
// その他に、１つまたは２つの子ノードを指し示すchildrenプロパティを持つ
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}


function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T {
  return {
    ...node,
    value: f(node.value)
  }
}

let aNode: TreeNode = { value: 'a' }
let bNode: LeafNode = { value: 'b', isLeaf: true }
let cNode: InnerNode = { value: 'c', children: [bNode] }

let aNode1 = mapNode(aNode, _ => _.toUpperCase())
let bNode1 = mapNode(bNode, _ => _.toUpperCase())
let cNode1 = mapNode(cNode, _ => _.toUpperCase())



type HasSides = {
  numberOfSides: number
}

type SidesHaveLength = {
  sideLength: number
}

function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
  console.log(s.numberOfSides * s.sideLength)
  return s
}

type Square = HasSides & SidesHaveLength
let square: Square = {
  numberOfSides: 4,
  sideLength: 3
}

logPerimeter(square)