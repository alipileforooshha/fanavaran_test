import React from 'react'
import Tree from 'react-hierarchy-tree-graph'
function HierarchyTree() {
    const myTreeData = [
        {
          name: 'Top Level',
          attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
          },
          onclick : () => {
            console.log('wosas')
          },
          children: [
            {
              name: 'Level 2: A',
              attributes: {
                keyA: 'val A',
                keyB: 'val B',
                keyC: 'val C',
              },
            },
            {
              name: 'Level 2: B',
            },
          ],
        },
    ];

    const svgSquare = {
        shape: 'rect',
        shapeProps: {
          width: 20,
          height: 20,
          x: -10,
          y: -10,
        }
    }
    const handleClick = (nodeData, evt) => {
        console.log(nodeData, evt)
    }
    return (
        <div id="treeWrapper" style={{height : "100vh"}}>
 
            <Tree data={myTreeData}
            orientation="vertical"
            pathFunc="diagonal"
            nodeSvgShape={svgSquare}
            onClick = {(nodeData, evt) => {
                nodeData.onclick()
            }}
            // onMouseOver = {(nodeData, evt) => {
            //     handleClick(nodeData, evt)
            // }}
            />
 
        </div>
    )
}

export default HierarchyTree