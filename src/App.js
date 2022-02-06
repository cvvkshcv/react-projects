import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Todo from './pages/Todo';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/home'} element={<Home />}></Route>
            <Route path={'/about'} element={<About />}></Route>
            <Route path={'/contact'} element={<Contact />}></Route>
            <Route path={'/todo'} element={<Todo />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
    </>
  )
}

export default App;
