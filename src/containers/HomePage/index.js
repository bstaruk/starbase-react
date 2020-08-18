import React from 'react';
import { Helmet } from 'react-helmet';

import { A } from 'components/Link';

const HomePage = () => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>

    <p>
      starbase-react is open source and completely free for personal or
      commercial use. It is a personal project-- a living code styleguide and
      outlet for technical exploration that you can make your own if you dig it.
      Pick it up, check it out and make it do a barrel roll.
    </p>
    <p>
      starbase-react enables developers to spin up new React &amp; redux
      projects and begin coding within minutes instead of hours. It is ready,
      right out of the box, to watch your code during development and can handle
      production builds when you&apos;re ready to integrate and/or deploy.
    </p>

    <p>
      The <code>start</code> command uses{' '}
      <A
        href="https://github.com/webpack/webpack-dev-server"
        title="webpack-dev-server on github"
      >
        webpack-dev-server
      </A>{' '}
      to serve up your project on a development server (localhost:3000) which
      will recompile and lint your source code as you modify it. You can also
      access this web server via LAN with a static local IP, for testing your
      app on devices besides the computer running it.
    </p>

    <p>
      The <code>build</code> command will compile production-ready (linted,
      minified &amp; optimized) assets that can be deployed to a web server in
      seconds.
    </p>
  </>
);

export default HomePage;
