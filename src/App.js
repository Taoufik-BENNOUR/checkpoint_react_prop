import { users } from './data';
import ProfileComponent from './Components/Profile/ProfilesComponent';
function App() {
  return (
    <>
     <ProfileComponent users={users}/>
    </>
  );
}

export default App;
