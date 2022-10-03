import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

const App = () => (
  <>
    <Helmet
      titleTemplate="%s - starbase-react"
      defaultTitle="starbase-react"
      htmlAttributes={{ lang: 'en-US' }}
    >
      <meta name="description" content="My React application, bootstrapped with starbase-react." />
    </Helmet>

    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
