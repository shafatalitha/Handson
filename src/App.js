
import './App.css';
import Search from './pages/Search';
import {Provider} from 'react-redux';
import Store from './Store'
function App() {
  return (
    <Provider store={Store}>
      <Search />
    </Provider>
  );
}

export default App;

