import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { A } from 'components/Link';

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
        <title>Stats</title>
      </Helmet>

      <p>
        This page is here to give react-router and redux-saga something to work
        with.
      </p>

      {repoDetailsLoaded && (
        <>
          <p>
            <A href={repoDetails.htmlUrl} title={repoDetails.description}>
              {repoDetails.name}
            </A>{' '}
            has {repoDetails.stargazersCount} stargazers and has been forked{' '}
            {repoDetails.forksCount} times.
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
