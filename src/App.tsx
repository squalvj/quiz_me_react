import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
