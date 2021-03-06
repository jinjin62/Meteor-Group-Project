import { Jobs } from "../../api/jobs";
import { Applications } from "../../api/applications";

export function getJobPosts() {
  const jobs = Jobs.find({}).map(job => {
    const owner = Meteor.users.findOne({ _id: job.owner });
    return { ...job, owner: owner };
  });
  return jobs;
}

export function getUnappliedJobs() {
  const apps = Applications.find({ applicant: Meteor.userId() }).fetch();
  const jobs = Jobs.find({ taken: false }).fetch().filter(job=>!apps.find(app=>app.jobId===job._id));
  return jobs;
}

export function getApplications() {
  const applications = Applications.find({}).map(app => {
    const applicant = Meteor.users.findOne({ _id: app.applicant });
    const jobOwner = Meteor.users.findOne({ _id: app.jobOwner });
    const job = Jobs.findOne({ _id: app.jobId });
    return { ...app, applicant: applicant, jobOwner: jobOwner, job: job };
  });
  return applications;
}


export function applyToJob(jobId, jobOwnerId) {
  Meteor.call("applications.apply", jobId, jobOwnerId);
}

export function replyToApplication(app, reply) {
  
  Meteor.call("applications.reply", app._id,app.applicant._id, reply);
  if (reply) {
    const jobId = app.job._id;
    Meteor.call("jobs.close", jobId);
  }
}

export function createJob(job) {
  Meteor.call(
    "jobs.open",
    job.title,
    job.description,
    job.location,
    moment(job.time).format("ddd, MMM D"),
    job.professions
  );
}

export function deleteJob(job,applications) {
  if (applications.length > 0) { 
    Meteor.call("jobs.close", job._id);
    applications.forEach(application => { 
      replyToApplication(application, false);
    });
  } else { Meteor.call("jobs.delete", job._id); }
}

export function removeApplication(application){
  Meteor.call("applications.delete", application._id);
}
