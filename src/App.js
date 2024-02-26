import './App.css';
import MyNavbar from './components/MyNavbar';
import ContriList from './components/ContriList';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <ContriList />
      <footer className="footer">
        @Made by Tirth Rami
      </footer>
    </div>
  );
}

export default App;