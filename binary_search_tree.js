class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(value) {
    let node = {
      value,
      left: null,
      right: null
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
          return
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node
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
    if (!node) {
      return
    }

    console.log(node.value)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder(node) {
    if (!node) {
      return
    }

    if (node.left) {
      this._inOrder(node.left)
    }

    console.log(node.value)
    this._inOrder(node.right)
  }
}

let b = new BinarySearchTree()

b.add(10)
b
b.add(2)
b.add(20)
b.add(1)
b.add(14)
// console.log(JSON.stringify(b))
console.log(b.contains(14))
console.log(b.contains(15))

b.preOrder()
b.inOrder() // equals to sorting the content in the binary tree
