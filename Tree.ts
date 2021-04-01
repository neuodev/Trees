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


  
}

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
console.log(tree.find(-1));
console.log(tree);

// Importants Terms
//  BREATH FIRST -> level by level
//  DEPTH FIRST ->
//        - Pre-order ->  ROOT, LEFT , RIGHT **
//        - In-order ->    LEFT , ROOT , RIGHT  **
//        - Post-order ->  LEFT , RIGHT , ROOT **
