import React from 'react';
import RichText from '@components/RichText/RichText';
import { A } from '@components/Link';

const What = () => (
  <RichText>
    <p>
      starbase-react enables developers to spin up new React projects and begin
      coding within minutes instead of hours. It is ready, right out of the box,
      to watch your code during development and can handle production builds
      when you&apos;re ready to integrate and/or deploy.
    </p>

    <p>
      The <code>dev</code> command uses{' '}
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
  </RichText>
);

export default What;
