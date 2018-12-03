import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import withRoot from '../withRoot';
import Layout from '../components/layout';
import { requestSearchApiData } from '../actions';

const styles = {
  root: {
    maxWidth: 600,
    marginTop: 8,
    margin: '0 auto',
  },
  card: {
    borderRadius: 0,
    borderLeft: '1px solid #e6ecf0',
    borderRight: '1px solid #e6ecf0',
    backgroundClip: 'padding-box',
    borderBottom: '1px solid #e6ecf0',
  },
  cardContent: {
    padding: '8px !important',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImage: {
    borderRadius: 2,
  },
  subCard1: {
    padding: 5,
  },
  subCard2: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 900,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
};

const SearchPage = ({ classes, requestSearchApiData, users }) => {
  return (
    <Layout title="Search Users">
      {users.items ? (
        <div className={classes.root}>
          {users.items.map((u, i) => {
            return (
              <Card key={i} className={classes.card} elevation={0}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.cardContainer}>
                    <div className={classes.subCard1}>
                      <Link to={`/users/:${u.login}`}>
                        <img
                          alt=""
                          className={classes.userImage}
                          src={u.avatar_url}
                          width="48"
                          height="48"
                        />
                      </Link>
                    </div>
                    <div className={classes.subCard2}>
                      <Link to={`/users/${u.login}`}>
                        <Typography
                          variant="body2"
                          gutterBottom
                          className={classes.userName}
                        >
                          {u.login}
                        </Typography>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </Layout>
  );
};

const mapStateToProps = state => ({ ...state.search });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSearchApiData }, dispatch);

const Search = withRoot(withStyles(styles)(SearchPage));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
