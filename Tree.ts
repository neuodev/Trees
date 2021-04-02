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

  //NOTE: use in Binary tree not BST
  // need to find the min the left sub treen and the min in the right sub tree and commbare with each others and then compare with the root node vlaue
  min(root) {
    if (this._isLeaf(root)) return root.value;
    let left = this.min(root.left);
    let right = this.min(root.right);
    return Math.min(Math.min(left, right), root.value);
  }

  // using pre order traversal
  equals(other) {
    if (!other || !other.root) return false;
    let first = this.root;
    let second = other.root;
    function equals(first, second) {
      if (first === null && second === null) return true;
      if (first.value !== null && second.value !== null)
        return (
          first.value === second.value &&
          equals(first.left, second.left) &&
          equals(first.right, second.right)
        );

      return false;
    }

    return equals(first, second);
  }

  isBindarySearchTree() {
    function validate(node, min, max) {
      if (node === null) return true;
      if (node.value < min || node.value > max) return false;
      return (
        validate(node.left, min, node.value - 1) &&
        validate(node.right, node.value - 1, max)
      );
    }

    return validate(this.root, -Infinity, Infinity);
  }

  KDistance(distance: number) {
    function KDistance(distance: number, node) {
      if (!node) return;
      if (distance === 0) return console.log(node.value);

      KDistance(distance--, node.left);
      KDistance(distance--, node.right);
    }
    KDistance(distance, this.root);
  }

  private _isLeaf(node) {
    if (!node.right && !node.left) return true;
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
console.log(tree.min(tree.root));
console.log(tree.isBindarySearchTree());
console.log(tree.KDistance(3));

console.log(tree.find(-1));
console.log(tree);

const secondTree = new Tree();
secondTree.insert(7);
secondTree.insert(4);
secondTree.insert(9);
secondTree.insert(1);
secondTree.insert(6);
secondTree.insert(8);
secondTree.insert(10);

console.log(tree.equals(secondTree));

// Importants Terms
//  BREATH FIRST -> level by level
//  DEPTH FIRST ->
//        - Pre-order ->  ROOT, LEFT , RIGHT **
//        - In-order ->    LEFT , ROOT , RIGHT  **
//        - Post-order ->  LEFT , RIGHT , ROOT **

// DEPTH AND HEIGHT
// <depth>  is number of edges to reatch given node
// <height>   is the longest path from the leaf to the node
