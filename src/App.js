import { users } from './data';
import ProfileComponent from './Components/Profile/ProfilesComponent';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <Header />
     <ProfileComponent users={users}/>
    </>
  );
}

export default App;
