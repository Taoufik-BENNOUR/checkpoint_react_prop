import React from "react";
import UserProfile from "./UserProfile";

const ProfilesComponent = ({users}) => {
  const handleName =(username)=>{
    return alert(username)
  }
  return(    
    <>
    <div style={{margin:'50px 15%',display:'flex',justifyContent:'space-between'}}>
    {users.map((user,i)=><UserProfile user={user} key={i} handleName={handleName} />)}  
    </div>
    </>
  
  )
};

export default ProfilesComponent;
