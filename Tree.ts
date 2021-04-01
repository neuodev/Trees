class NodeClass {
  left;
  right;
  constructor(public value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  root = null;

  insert(value: number | string) {
    const node = new NodeClass(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            return;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            return;
          }
        }
      }
    }
    return node;
  }

  find(value: string | number) {
    if (!this.root) return false;
    if (value == this.root.value) return true;
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  traversePreOrder() {
    let node = this.root;
    let array = [];
    function preOrder(node) {
      if (!node) return;
      array.push(node.value);
      preOrder(node.left);
      preOrder(node.right);
    }
    preOrder(node);
    console.log(array);
  }

  traversePostOrder() {
    let node = this.root;
    let array = [];
    function postOrder(node) {
      if (!node) return;
      postOrder(node.left);
      postOrder(node.right);
      array.push(node.value);
    }
    postOrder(node);
    console.log(array);
  }
  traverseInOrder() {
    let node = this.root;
    let array = [];
    function InOrder(node) {
      if (!node) return;
      InOrder(node.left);
      array.push(node.value);
      InOrder(node.right);
    }
    InOrder(node);
    console.log(array);
  }

  BreathFirstSearch() {
    let array = [];
    let stack = [];
    let node = this.root;
    stack.push(node);
    while (stack.length !== 0) {
      let removedNode = stack.pop();
      array.push(removedNode.value);
      if (removedNode.left) stack.push(removedNode.left);
      if (removedNode.right) stack.push(removedNode.right);
    }
    console.log(array);
  }

  // calc the height using the formula 1 + max(height(R) , height(L))
  height(node) {
    if (!node) return -1;
    if (!node.right && !node.left) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.traversePreOrder();
tree.traversePostOrder();
tree.traverseInOrder();
tree.BreathFirstSearch();
console.log(tree.height(tree.root));

console.log(tree.find(-1));
console.log(tree);

// Importants Terms
//  BREATH FIRST -> level by level
//  DEPTH FIRST ->
//        - Pre-order ->  ROOT, LEFT , RIGHT **
//        - In-order ->    LEFT , ROOT , RIGHT  **
//        - Post-order ->  LEFT , RIGHT , ROOT **

// DEPTH AND HEIGHT
// <depth>  is number of edges to reatch given node
// <height>   is the longest path from the leaf to the node
