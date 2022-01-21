import React from "react";
import UserProfile from "./UserProfile";

const ProfilesComponent = ({users}) => {
  const handleName =(username)=>{
    return alert(username)
  }
  return(    
    <>
    <div style={{margin:'0 15%',display:'flex',justifyContent:'space-between'}}>
    {users.map(user=><UserProfile user={user} handleName={handleName} />)}  
    </div>
    </>
  
  )
};

export default ProfilesComponent;
