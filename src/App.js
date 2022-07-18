import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
    <dir className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </dir>
  );
}




export default App;
