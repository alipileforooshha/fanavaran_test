import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const MyNodeComponent = ({ nodeData }) => {
    const [state,setState] = useState(false);

  const selectNode = () => {
    alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
  };

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className="initechNode card rounded" 
            onDoubleClick={() => {
                setState(!state)
            }}
            >{ nodeData.username }
                <div class="card-body">
                    <h4 class="card-title">{nodeData.email}</h4>
                    <p class="card-text">{nodeData.username}</p>
                    <a href="#" class="btn btn-primary rounded-circle border border-primary text-center">+</a>
                </div>
            </div>
            {state ? 
            <div class="card-text m-2 p-2 border border-danger rounded">
                <div>
                    <span>تعداد زیر مجموعه ها : </span>
                    <span>{nodeData.children?.length}</span>
                </div>
                <div>
                    <span>آدرس : </span>
                    <span>{nodeData.Address}</span>
                </div>
            </div> 
            : ""}

        </div>
  );
};


export default MyNodeComponent;