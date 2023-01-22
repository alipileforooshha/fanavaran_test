import React, { useEffect, useState } from 'react'
import ChartContainer from '@dabeng/react-orgchart'
import axios from 'axios';
import './App.css';
import MyNodeComponent from './MyNodeComponent';

function Dabeng() {
  const[searchWord, setSearchWord] = useState('mr.Admin');

    const [state, setState] = useState();

    useEffect(() => {
        console.log('heyyyyy');
        fetchUser();
    }, []);
    
    const NodeClick = (e) => {
      console.log(e)
    }
    const fetchUser = async () => {
        console.log(searchWord)
        await axios.get(`http://127.0.0.1:8000/api/hierarchy`,{
            params : {
                search : searchWord
            }
        }).then(res => {
            const result = res.data;
            console.log(res);
            result !== "error" ? setState(result) : setState();
            console.log(state);
        })
    }
    // const ds = {
    //     id: "n1",
    //     name: "Lao Lao",
    //     title: "general manager",
    //     children: [
    //       { id: "n2", name: "Bo Miao", title: "department manager" },
    //       {
    //         id: "n3",
    //         name: "Su Miao",
    //         title: "department manager",
    //         children: [
    //           { id: "n4", name: "Tie Hua", title: "senior engineer" },
    //           {
    //             id: "n5",
    //             name: "Hei Hei",
    //             title: "senior engineer",
    //             children: [
    //               { id: "n6", name: "Dan Dan", title: "engineer" },
    //               { id: "n7", name: "Xiang Xiang", title: "engineer" }
    //             ]
    //           },
    //           { id: "n8", name: "Pang Pang", title: "senior engineer" }
    //         ]
    //       },
    //       { id: "n9", name: "Hong Miao", title: "department manager" },
    //       {
    //         id: "n10",
    //         name: "Chun Miao",
    //         title: "department manager",
    //         children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
    //       }
    //     ]
    // };
    
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
                    fetchUser()
                }}>جستجو</button>
            </form>
            <ChartContainer datasource={state}
            draggable={true}
            onClickNode={(e) => {NodeClick(e)}}
            chartClass="chartClass"
            containerClass="containerClass"
            NodeTemplate={MyNodeComponent}/>
        </div>
    )
}

export default Dabeng