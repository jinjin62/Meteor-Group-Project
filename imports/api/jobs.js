import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
  "jobs.insert"(title, description, shift) {
    // if (!this.userId) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Jobs.insert({
      id,
      title,
      description,
      location: undefined,
      professions: [],
      // workspace
      shift,
      createdAt: new Date(),
      owner: this.userId // change when auth set up: (this.userId)
    });
  }
});
