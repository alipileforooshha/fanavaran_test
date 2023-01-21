import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';

function Rorg() {
    const [state, setState] = useState();

    useEffect(() => {
        
        fetchUser()
        return () => {
            setState();            
        };
    }, []);
    
    const fetchUser = async () => {
        await axios.get('http://127.0.0.1:8000/api/subs').then(res => {
            const result = res.data;
            setState(result);
        })
    }

    const initechOrg = {
        name: "Bill Lumbergh",
        actor: "Gary Cole",
        Role : "Branch",
        children: [
            {
                name: "Peter Gibbons",
                actor: "Ron Livingston",
                Role : "Agency",
                children: [
                    {
                        name: "And More!!",
                        actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!",
                        Role : "Marketer"
                    }
                ]
            },
            {
                name: "Milton Waddams",
                actor: "Stephen Root",
                Role : "Agency",
            },
            {
                name: "Bob Slydell",
                actor: "John C. McGi...",
                Role : "Agency",
            },
        ]
    };
  
    return (
        <div className="App mb-4" id="initechOrgChart">
            {/* <OrgChart tree={state} NodeComponent={MyNodeComponent} /> */}
            {state ? <OrgChart tree={state} NodeComponent={MyNodeComponent} /> : ""}
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
            }}>{ node.name }
                <div class="card-body">
                    <h4 class="card-title">{node.Role}</h4>
                    <p class="card-text">{node.name}</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
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