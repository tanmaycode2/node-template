// import base scss & other styles module here
import './index.scss';
import Home from './Home';

// import essential modules here
import {
  BrowserRouter,
  Routes as Switch,
  Route
} from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact element={<Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
