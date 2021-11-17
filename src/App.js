import { Link, Route, Routes, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import EffectTutorial from './useEffect';
import ImperativeHandle from './useImperativeHandle';
import LayoutEffectTutorial from './useLayoutEffect';
import ReducerTutorial from './useReducer';
import RefTutorial from './useRef';
import StateTutorial from './useState';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/useEffect" element={<EffectTutorial />} />
          <Route path="/useImperativeHandle" element={<ImperativeHandle />} />
          <Route path="/useLayoutEffect" element={<LayoutEffectTutorial />} />
          <Route path="/useReducer" element={<ReducerTutorial />} />
          <Route path="/useRef" element={<RefTutorial />} />
          <Route path="/useState" element={<StateTutorial />} />
          <Route path="*" element={<EffectTutorial />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/useEffect">use Effect</Link>
          </li>
          <li>
            <Link to="/useImperativeHandle">use Imperative Handle</Link>
          </li>
          <li>
            <Link to="/useLayoutEffect">use Layout Effect</Link>
          </li>
          <li>
            <Link to="/useReducer">use Reducer</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
