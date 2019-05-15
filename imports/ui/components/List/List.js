import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withTracker } from "meteor/react-meteor-data";
import Divider from "@material-ui/core/Divider";
import Gravatar from "react-gravatar";
// import { Jobs } from "../../../api/jobs";
import moment from "moment";
import styles from "./styles";
import MOCK_DB from "../../../mock";
const { Jobs: MOCK_JOBS } = MOCK_DB;

// import mock db, filter
const ItemsList = props => {
  const { classes, jobs, fetchUserEmails, filter } = props;

  return (
    <List className={classes.root}>
      {MOCK_JOBS.filter(j =>
        filter ? new RegExp(filter, "i").test(j.location) : 1
      ).map(job => {
        return (
          <div key={job._id}>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  <Gravatar
                  // email={fetchUserEmails(job.ownerId)[0].emails[0].address}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={job.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {job.description}{" "}
                    </Typography>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Date:{" "}
                      {moment(job.createdAt)
                        .add(10, "days")
                        .calendar()}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
};

ItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("jobs");
  Meteor.subscribe("userEmails");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    // jobs: Jobs.find({}).fetch(),
    fetchUserEmails: ownerId => Meteor.users.find({ _id: ownerId }).fetch()
  };
})(withStyles(styles)(ItemsList));
