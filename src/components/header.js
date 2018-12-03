import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import { requestSearchApiData } from './../actions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: '#000000',
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
    },
  },
  headerImg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 5,
    backgroundColor: fade('#999999', 0.1),
    '&:hover': {
      backgroundColor: fade('#999999', 0.2),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIconContainer: {
    width: theme.spacing.unit * 9,
    height: '100%',
    color: '#333333',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -60,
    marginTop: -11,
    [theme.breakpoints.up('sm')]: {
      marginLeft: -70,
      marginTop: -15,
    },
  },
  searchIcon: {
    color: '#ffffff',
    cursor: 'pointer',
  },
  inputRoot: {
    color: '#ffffff',
    width: '100%',
    fontSize: 15,
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue(value) {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={0}>
              <Grid item xs={2} sm={1}>
                <div className={classes.headerImg}>
                  <img
                    src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="twitter"
                    width="30"
                    height="30"
                  />
                </div>
              </Grid>
              <Grid item xs={10} sm={11}>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search Github users"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    value={this.state.inputValue}
                    onKeyPress={evt => {
                      if (evt.key === 'Enter')
                        this.props.requestSearchApiData(this.state.inputValue);
                    }}
                    onChange={evt => this.updateInputValue(evt.target.value)}
                  />
                </div>
              </Grid>
              <Grid item>
                <div className={classes.searchIconContainer}>
                  <SearchIcon
                    className={classes.searchIcon}
                    onClick={() =>
                      this.props.requestSearchApiData(this.state.inputValue)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSearchApiData }, dispatch);

const Head = withStyles(styles)(Header);

export default connect(
  () => ({}),
  mapDispatchToProps
)(Head);
