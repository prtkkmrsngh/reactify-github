import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "./header";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  body: {
    margin: "0 auto",
    maxWidth: 600
  }
});

const Layout = ({ title, classes, children }) => (
  <>
    <Helmet
      title={title}
      meta={[
        {
          name: "description",
          content: "VMock"
        },
        {
          name: "keywords",
          content: "vmock, react, redux, redux-saga"
        }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div className={classes.body}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
