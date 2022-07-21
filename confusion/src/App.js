import './App.css';
import { DISHES } from './shared/dish';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './containers/Home';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  const [dishes] = useState(DISHES);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <HomePage dishes={dishes} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
