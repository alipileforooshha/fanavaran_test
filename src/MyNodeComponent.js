import React from 'react'

function MyNodeComponent(props) {
    return (
        <div className="initechNode" onClick={() => alert("Hi my real name is: " + props.node.actor)}>{ props.node.name }</div>
    );
}

export default MyNodeComponent