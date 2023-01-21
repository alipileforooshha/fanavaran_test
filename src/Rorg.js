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
        <div className="App" id="initechOrgChart">
            {/* <OrgChart tree={state} NodeComponent={MyNodeComponent} /> */}
            {state ? <OrgChart tree={state} NodeComponent={MyNodeComponent} /> : ""}
        </div>
    )
}

const MyNodeComponent = ({node}) => {
    const [state,setState] = useState(false);
    
    return (
        <div className="initechNode card" onMouseEnter={() => {
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
            {state ? 
            <p class="card-text">{node.children?.length}</p> 
            : ""}
        </div>
    );
};


export default Rorg