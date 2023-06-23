import React from 'react'
import "./Profile.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
function Profile() {
    const user=useSelector(selectUser);
 
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU" alt="" />
           <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
                <h3>Plans</h3>
                <div className="plans_info">
                <div className="plan_item">
                  <h5>Premium</h5>
                  <button>Subscribe</button>
                </div>
                <div className="plan_item">
                  <h5>Basic</h5>
                  <button>Subscribe</button>
                </div>
                <div className="plan_item">
                  <h5>Standard</h5>
                  <button>Subscribe</button>
                </div>
                </div>
                <button onClick={()=>auth.signOut()}className="profileScreen_signOut">
                    Sign Out
                </button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
