import React, { useEffect, useState, useRef } from 'react'
import ChartContainer from '@dabeng/react-orgchart'
import axios from 'axios';
import './App.css';
import MyNodeComponent from './MyNodeComponent';

function Dabeng() {
    const[searchWord, setSearchWord] = useState('mr.Admin');
    
    const [state, setState] = useState();
    const [depth, setDepth] = useState(3);
    
    useEffect(() => {
        fetchUser()
    }, []);
    
    const fetchUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/hierarchy`,{
            params : {
                search : searchWord
            }
        }).then((res) => {
            // return res.data
            setState(res.data);
        })
    }

    const NodeClick = (e) => {
    //   console.log(e)
    }

    let ds = {
        id: "n1",
        username: "Lao Lao",
        email: "general manager",
        children: [
          { id: "n2", username: "Bo Miao", email: "department manager" },
          {
            id: "n3",
            username: "Su Miao",
            email: "department manager",
            children: [
              { id: "n4", username: "Tie Hua", email: "senior engineer" },
              {
                id: "n5",
                username: "Hei Hei",
                email: "senior engineer",
                children: [
                  { id: "n6", username: "Dan Dan", email: "engineer" },
                  { id: "n7", username: "Xiang Xiang", email: "engineer" }
                ]
              },
              { id: "n8", username: "Pang Pang", email: "senior engineer" }
            ]
          },
          { id: "n9", username: "Hong Miao", email: "department manager" },
          {
            id: "n10",
            username: "Chun Miao",
            email: "department manager",
            children: [{ id: "n11", username: "Yue Yue", email: "senior engineer", children: [{ id: "n11", username: "Yue Yue", email: "senior engineer", children: [{ id: "n11", username: "Yue Yue", email: "senior engineer" }] }] }]
          }
        ]
    };
    
    const getChildren = (node) => {
        node.children = node?.children?.filter((child) => {
            if(child.depth < depth){
                getChildren(child)
            }
            else{
                return
            }
            return child.depth === node.depth + 1 && child.depth <= depth;
        })
        console.log(node.children)
        return node
    }

    return (
        <div className="App mb-4 d-flex justify-content-center align-items-center flex-column sticky" id="initechOrgChart">
            <form className='d-flex flex-column flex-shrink position-sticky sticky-top'>
                <input className="form-control my-2" value={searchWord} onChange={(e) => {
                    setSearchWord(e.target.value);
                }}
                ></input>
                {searchWord}
                <button type='submit' className='btn btn-primary my-2' onClick={(e) => {
                    e.preventDefault();
                    // fetchUser()
                }}>جستجو</button>
            </form>
            {state ? <ChartContainer datasource={getChildren(state)}
            draggable={true}
            onClickNode={(e) => {NodeClick(e)}}
            chartClass="chartClass"
            containerClass="containerClass"
            pan={true}
            NodeTemplate={MyNodeComponent}/> : ""}
        </div>
    )
}

export default Dabeng