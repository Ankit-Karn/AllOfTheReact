import logo from './logo.svg';
import './App.css';
import ReactBenifit from './component/reactBenifit';
import Button from './component/button';
import Image from './component/image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <ReactBenifit />
        <Button />
      </header>
    </div>
  );
}

export default App;
