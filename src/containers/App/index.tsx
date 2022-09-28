import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
