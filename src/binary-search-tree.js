const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      } else if(node.data === data) {
        return node;
      } else if(node.data > data) {
        node.left = addNode(node.left, data);
        return node;
      } else {
      node.right = addNode(node.right, data);
      return node;
    }
  }
}

  has(data) {
    return hasNode(this.rootTree, data);

    function hasNode(node, data) {
      if(!node) {
        return false;
      } else if(node.data === data) {
        return true;
      } else if(node.data > data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootTree, data);

    function findNode(node, data) {
      if(!node) {
        return null;
      }else if(node.data === data) {
        return node;
      } else if(node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }

    }
  }

  min() {
    if(!this.rootTree) {
      return null;
    } else {
      return minNode(this.rootTree);
    }

    

    function minNode(node) {

      if(node.left) {
        return minNode(node.left);
      } else {
        return node.data
      }

      
    }
  }

  max() {
    if(!this.rootTree) {
      return null;
    } else {
      return maxNode(this.rootTree);
    }

    function maxNode(node) {

      if(node.right) {
        return maxNode(node.right);
      } else {
        return node.data
      }

      
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)

    function removeNode(node, data) {
      if(!node){
        return null;
      } else if(node.data === data) {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          return node.right;
        }

        if(!node.right) {
          return node.left;
        }

        let maxLeft = node.left;

        while(maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        node.right = removeNode(node.right, maxLeft.data);

        return node;
      }else if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }

      
    }
  }
}

module.exports = {
  BinarySearchTree
};