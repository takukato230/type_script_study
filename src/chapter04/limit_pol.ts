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

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  }
}

const aNode: TreeNode = { value: 'a' }
const bNode: LeafNode = { value: 'b', isLeaf: true }
const cNode: InnerNode = { value: 'c', children: [bNode] }

const aNode1 = mapNode(aNode, (_) => _.toUpperCase())
const bNode1 = mapNode(bNode, (_) => _.toUpperCase())
const cNode1 = mapNode(cNode, (_) => _.toUpperCase())

type HasSides = {
  numberOfSides: number
}

type SidesHaveLength = {
  sideLength: number
}

function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): Shape {
  console.log(s.numberOfSides * s.sideLength)
  return s
}

type Square = HasSides & SidesHaveLength
const square: Square = {
  numberOfSides: 4,
  sideLength: 3,
}

logPerimeter(square)

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value)
}

function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args)
}

const callA = call(fill, 10, 'a')

console.log(`callA=${callA}`)
