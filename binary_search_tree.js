class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(value) {
    let node = {
      value,
      left: null,
      right: null,
      parent: null
    }

    if (this.root === null) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node
          node.parent = current
          return
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node
          node.parent = current
          return
        }

        current = current.right
      } else {
        // it's already there
        return
      }
    }
  }

  contains(value) {
    let current = this.root

    while (current) {
      if (current.value === value) {
        return true
      }

      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }

  preOrder() {
    this._preOrder(this.root)
  }

  _preOrder(node) {
    if (node) {
      console.log(node.value)
      this._preOrder(node.left)
      this._preOrder(node.right)
    }
  }

  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder(node) {
    if (node) {
      this._inOrder(node.left)
      console.log(node.value)
      this._inOrder(node.right)
    }
  }

  mininum(node) {
    let current = node || this.root

    while (current.left) {
      current = current.left
    }

    return current
  }

  maximum(node) {
    let current = node || this.root

    while (current.right) {
      current = current.right
    }

    return current
  }

  successor(node) {
    if (node.right) {
      return this.mininum(node.right)
    }

    let y = node.parent
    while (y !== null && y.right === node) {
      node = y
      y = y.parent
    }

    return y
  }
}

let b = new BinarySearchTree()

b.add(10)
b
b.add(2)
b
console.log(b.successor(b.root.left).value)
b.add(20)
b.add(1)
b.add(14)
console.log(b)
console.log(b.contains(14))
console.log(b.contains(15))

b.preOrder()
b.inOrder() // equals to sorting the content in the binary tree

// console.log(b.mininum(b.root))
// console.log(b.maximum(b.root))
console.log(b.root.left.left.value, b.successor(b.root.left.left).value)
