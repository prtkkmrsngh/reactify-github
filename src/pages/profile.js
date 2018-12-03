import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../withRoot';
import Layout from '../components/layout';
import { requestUserData, requestUserRepos } from '../actions';

const styles = {
  root: {},
};

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.requestUserData(this.props.match.params.username);
    this.props.requestUserRepos(this.props.match.params.username);
  }
  render() {
    const { classes } = this.props;
    return (
      <Layout title="Profile">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={4}>
            <div className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <div />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUserData, requestUserRepos }, dispatch);

const Profile = withRoot(withStyles(styles)(ProfilePage));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
