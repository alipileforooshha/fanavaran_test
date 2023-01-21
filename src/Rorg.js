import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import './App.css';

function Rorg() {
    const[searchWord, setSearchWord] = useState('');

    const [state, setState] = useState();

    useEffect(() => {
        console.log('heyyyyy');
        fetchUser();
    }, []);
    
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
        })
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
                        fetchUser()
                    }}>جستجو</button>
                </form>
                {/* <OrgChart tree={state} NodeComponent={MyNodeComponent} /> */}
                {state ? <OrgChart tree={state} NodeComponent={MyNodeComponent} /> : <h3>No Results were found</h3>}
            </div>
        )
    }

const MyNodeComponent = ({node}) => {
    const [state,setState] = useState(false);
    
    return (
        <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className="initechNode card rounded" onMouseEnter={() => {
                setState(true)
            }}
            onMouseLeave={() => {
                setState(false)
            }}>{ node.username }
                <div class="card-body">
                    <h4 class="card-title">{node.email}</h4>
                    <p class="card-text">{node.username}</p>
                    <a href="#" class="btn btn-primary rounded-circle border border-primary text-center">+</a>
                </div>
            </div>
            {state ? 
            <div class="card-text m-2 p-2 border border-danger rounded">
                <div>
                    <span>تعداد زیر مجموعه ها : </span>
                    <span>{node.children?.length}</span>
                </div>
                <div>
                    <span>آدرس : </span>
                    <span>{node.Address}</span>
                </div>
            </div> 
            : ""}

        </div>
    );
};


export default Rorg