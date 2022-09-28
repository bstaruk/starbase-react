import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';

const App = () => (
  <>
    <Helmet
      titleTemplate="%s - My React App"
      defaultTitle="My React App"
      htmlAttributes={{ lang: 'en-US' }}
    >
      <meta name="description" content="My React application." />
    </Helmet>

    <Routes>
      <Route index element={<HomePage />} />
      {/* TODO: Replace below with 404 Page */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  </>
);

export default App;
