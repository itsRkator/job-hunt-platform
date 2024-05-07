// jobUtils.js
export const filterJobs = (jobs, filters) => {
  const filteredJobs = jobs.filter((job) => {
    return !Object.keys(filters).length
      ? job
      : filters.companyName !== job.companyName &&
          filters.jobRole === job.jobRole &&
          filters.minExp === job.minExp &&
          filters.minJdSalary === job.minJdSalary;
  });

  return filteredJobs;
};
