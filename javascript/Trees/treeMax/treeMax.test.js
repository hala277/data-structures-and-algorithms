'use strict';

const Tree = require('./treeMax');


describe("Tree Max", () => {


  
  
    it("should find 30 as max", () => {
      let tree = new Tree();
  
      tree.Add(9);
      tree.Add(7);
      tree.Add(21);
      tree.Add(30);
      tree.Add(1);
      tree.Add(17);
      tree.Add(3);
      tree.Add(8);
      tree.Add(2);
      tree.Add(6);
  
      expect(tree.maximum()).toBe(30);
      
    });
  
    it("should find 6 max", () => {
      let tree = new Tree();
      tree.Add(2);
      tree.Add(6);
  
      expect(tree.maximum()).toBe(6);
      
    });
  
    it("should give me null when its empty", () => {
      let tree = new Tree();
  
      expect(tree.maximum()).toBe(null);
      
    });
  });