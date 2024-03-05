// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import "./index.css"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>chuks</h1>
      </header> */}
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
