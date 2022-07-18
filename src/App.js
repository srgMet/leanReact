import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


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
