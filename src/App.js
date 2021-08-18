
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
import Contacts from './Contacts';
function App() {
  const[{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ):
      (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* <Widgets /> */}
          <Contacts />

        </div>
        </>
      )}
      
    </div>
  );
}

export default App;
