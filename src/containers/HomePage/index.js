import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getRepoDetailsAction } from './actions';
import { selectRepoDetails, selectRepoDetailsLoaded } from './selectors';

const HomePage = ({ getRepoDetails, repoDetails, repoDetailsLoaded }) => {
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

      <p>home</p>

      {repoDetailsLoaded && <p>{repoDetails.name}</p>}
    </>
  );
};

HomePage.propTypes = {
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

export default compose(withConnect)(HomePage);
