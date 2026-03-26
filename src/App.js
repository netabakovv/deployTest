import React from 'react';
import {Routes, Route, Link, HashRouter} from 'react-router-dom';

const PageOne = () => {
  return <h1>Page onneeeeee</h1>;
};

const PageTwo = () => {
  return <h1>Page twoooooooo</h1>;
};

function App() {
  return (
      <HashRouter>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Страница 1</Link>
          <Link to="/page-two">Страница 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </HashRouter>
  );
}

export default App;