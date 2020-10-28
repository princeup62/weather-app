import React from "react";
import Tree from "./movingTree.gif";
import Leaf from "./leaf.gif";

function FloatingLeafs() {
  return (
    <>
      <img className="treeImage" src={Tree} alt="logo" />
      <img className="leafOneImage" src={Leaf} alt="Leaf" />
      <img className="leaf2Image" src={Leaf} alt="Leaf" />
      <img className="leaf3Image" src={Leaf} alt="Leaf" />
      <img className="leaf4Image" src={Leaf} alt="Leaf" />
      <img className="leaf5Image" src={Leaf} alt="Leaf" />
    </>
  );
}

export default FloatingLeafs;
