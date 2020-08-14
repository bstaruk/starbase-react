import React from 'react';

import { A } from '@components/Link';

const WhoPage = () => (
  <>
    <p>
      starbase-react is open source and completely free for personal or
      commercial use. It is a personal project-- a living code styleguide and
      outlet for technical exploration that you can make your own if you dig it.
      Pick it up, check it out and make it do a barrel roll.
    </p>

    <p>
      If you encounter any problems along the way, please be sure to{' '}
      <A
        href="https://github.com/bstaruk/starbase-react/issues"
        title="report an issue with starbase-react on github"
      >
        report an issue
      </A>{' '}
      on GitHub and it&apos;ll likely be taken care of faster than you think!
    </p>
  </>
);

export default WhoPage;
