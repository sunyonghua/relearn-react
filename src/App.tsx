import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import State from './State';
import './App.css'

function App() {
  return (
    <div className="App app">
      <Router>
        <div>
          <h3>基础知识</h3>
          <Link to={'/state'}>State</Link>
          <Link to={'/props'}>Props</Link>
          <h3>性能优化</h3>
          <Link to={'/purecomponent'}>PureComponent</Link><br/>
          <Link to={'/purecomponent'}>shouldComponentUpdate</Link><br/>
          <Link to={'/memo'}>memo</Link><br/>
          <Link to={'/useMemo'}>useMemo</Link><br/>
          <h3>hooks</h3>
          <Link to={'/useState'}>useState</Link><br/>
          <Link to={'/useEffect'}>useEffect</Link><br/>
          <Link to={'/useCallback'}>useCallback</Link><br/>
          <Link to={'/useMemo'}>useMemo</Link><br/>
        </div>
        <div>
          <Route path="/state" component={State} />
        </div>
      </Router>
    </div>
  );
}

export default App;
