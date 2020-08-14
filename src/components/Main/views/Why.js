import React from 'react';

import { A } from '@components/Link';

const Why = () => (
  <>
    <p>
      starbase-react is a spinoff of{' '}
      <A
        href="https://github.com/bstaruk/starbase"
        title="learn more about starbase on github"
      >
        starbase
      </A>
      , which was created in early 2017, shortly after webpack 2 was released
      and it became clear that many popular development boilerplates were not
      being maintained or upgraded to the latest versions of the software they
      were built to utilize.
    </p>

    <p>
      The primary mission of starbase and starbase-react is to provide an
      elegant but simple baseline development process that generates clean,
      production-ready assets while being bloat-free and easy to maintain.
    </p>
  </>
);

export default Why;
