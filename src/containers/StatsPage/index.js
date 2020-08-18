import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getRepoDetailsAction } from './actions';
import { selectRepoDetails, selectRepoDetailsLoaded } from './selectors';

const StatsPage = ({ getRepoDetails, repoDetails, repoDetailsLoaded }) => {
  useEffect(() => {
    if (!repoDetailsLoaded) {
      getRepoDetails({ owner: 'bstaruk', repo: 'starbase-react' });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {repoDetailsLoaded && (
        <>
          <p>
            {repoDetails.name} is open source and completely free for personal
            or commercial use. It is a personal project-- a living code
            styleguide and outlet for technical exploration that you can make
            your own if you dig it. Pick it up, check it out and make it do a
            barrel roll.
          </p>
          <p>
            {repoDetails.name} enables developers to spin up new React projects
            and begin coding within minutes instead of hours. It is ready, right
            out of the box, to watch your code during development and can handle
            production builds when you&apos;re ready to integrate and/or deploy.
          </p>
        </>
      )}
    </>
  );
};

StatsPage.propTypes = {
  getRepoDetails: PropTypes.func.isRequired,
  repoDetails: PropTypes.object.isRequired,
  repoDetailsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repoDetails: selectRepoDetails(),
  repoDetailsLoaded: selectRepoDetailsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    getRepoDetails: ({ owner, repo }) =>
      dispatch(getRepoDetailsAction({ owner, repo })),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(StatsPage);
