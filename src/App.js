import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import Users from './pages/users'
import Home from './pages/home'
import useReducer from "./store/reducer/user";
import './sass/style.scss'

function App() {
  const store = createStore(useReducer)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
