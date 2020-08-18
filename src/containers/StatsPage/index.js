import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { A } from 'components/Link';

import { getRepoDetailsAction } from './actions';
import {
  selectRepoDetails,
  selectRepoDetailsError,
  selectRepoDetailsLoaded,
} from './selectors';

const StatsPage = ({
  getRepoDetails,
  repoDetails,
  repoDetailsError,
  repoDetailsLoaded,
}) => {
  useEffect(() => {
    if (!repoDetailsLoaded) {
      getRepoDetails({ owner: 'bstaruk', repo: 'starbase-react' });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Stats</title>
      </Helmet>

      <p>
        This page is here to give react-router and redux-saga something to work
        with.
      </p>

      {repoDetailsLoaded && (
        <>
          <p>
            The stats you see below were requested asyncronously from GitHub
            when you landed on the stats page and stored in redux so they
            won&apos;t need to be requested again unless you reload the app.
          </p>
          <p>
            <A href={repoDetails.htmlUrl} title={repoDetails.description}>
              {repoDetails.name}
            </A>{' '}
            has {repoDetails.stargazersCount} stargazers and has been forked{' '}
            {repoDetails.forksCount} times.
          </p>
        </>
      )}

      {repoDetailsError && (
        <>
          <p>
            The app encountered an error while attempting to retrieve the stats
            for starbase-react: <br />
            <em>{repoDetailsError}</em>
          </p>
        </>
      )}
    </>
  );
};

StatsPage.propTypes = {
  getRepoDetails: PropTypes.func.isRequired,
  repoDetails: PropTypes.object.isRequired,
  repoDetailsError: PropTypes.string.isRequired,
  repoDetailsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repoDetails: selectRepoDetails(),
  repoDetailsError: selectRepoDetailsError(),
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
