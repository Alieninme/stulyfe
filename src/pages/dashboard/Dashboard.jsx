import React from 'react';
import "./dashboard.css";
import image from "../../assets/image.png"
import {Students} from "../../assets/data"
import {useNavigate} from 'react-router-dom';

export default function Dashboard() {

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const navigate = useNavigate();

    if(!username || !password){
        navigate('/')
    }

  function handleLogout(){
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className='dashContainer'>
        <nav className='sideBar'>
         <div className='topContainer'>
            <div className='adminInfo'>
              <img src={image} alt="" />
              <div>
              <h1>{username}</h1>
              <p>Supervisor Admin</p>
              </div>
            </div>
              <div><span>-</span><a href="#0" className="inactiveLink">Teacher</a></div>
              <div className='navSelected'><span>-</span><a href="#0" className="inactiveLink">Student</a></div>
              <div><span>-</span><a href="#0" className="inactiveLink">Analysis</a></div>
              <div><span>-</span><a href="#0" className="inactiveLink">Buses</a></div>
              <div><span>-</span><a href="#0" className="inactiveLink">Feed</a></div>
              <div><span>-</span><a href="#0" className="inactiveLink">Circular</a></div>
            </div>
         <div className='bottomContainer'>
              <div><span>-</span><a href="#0" className="inactiveLink">Sub Admin</a></div>
              <div className='navLogout'><span>-</span><a href="/" onClick={handleLogout}>Logout</a></div>
         </div>
        </nav>
            <section>
                <div className='studentSearch'>
                    <h1>Student</h1>
                    <div>
                        <input type="search" placeholder='Search here'/>
                        <button>+ Create Student Profile</button>
                    </div>
                </div>
                <div className='studentSelection'>
                    <thead>
                        <th>CLASS</th>
                        <th>SECTION</th>
                    </thead>
                    <tbody>
                        <td>5th class</td>
                        <td>A Section</td>
                    </tbody>
                </div>
                <div className='studentContainer'>
                    <div className='studentWrapper'>
                        {
                            Students.map((index) => (
                                <div key={index.id} className='studentBox'>
                                   <img src={index.img} alt="" />
                                   <div>
                                   <h1>{index.name}</h1>
                                   <p>{index.category}</p>
                                   </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    </div>
  )
}
