import Home from './Components/Home/HomeComponent';
import NavBar from './Components/Nav/NavbarComponent';

function App(prop) {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;





