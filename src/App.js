
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Body */ }
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
