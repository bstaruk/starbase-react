import React from 'react';
import { Helmet } from 'react-helmet';

import { A } from 'components/Link';

const AboutPage = () => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>

    <p>
      The <code>start</code> command uses{' '}
      <A
        href="https://github.com/webpack/webpack-dev-server"
        title="webpack-dev-server on github"
      >
        webpack-dev-server
      </A>{' '}
      to serve up your project on a development server (localhost) which will
      recompile and lint as you modify the source. You can even access this web
      server via LAN, with a static IP, for testing your app on multiple
      devices.
    </p>

    <p>
      The <code>build</code> command will compile production-ready (linted,
      minified &amp; optimized) assets that can be integrated into your CMS
      theme or used as a standalone static website.
    </p>
  </>
);

export default AboutPage;
