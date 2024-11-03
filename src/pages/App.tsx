import React, { useState } from 'react';
// import Button from './components/button';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import Chronometer from '../components/chronometer';
import { IJob } from '../types/job';

function App() {
  const [jobs, setJobs] = useState<IJob[] | []>([])
  const [selected, setSelected] = useState<IJob>();

  function selectedJob(jobSelected: IJob) {
    setSelected(jobSelected)
    setJobs(jobsOld => jobsOld.map(job => ({
      ...job,
      selected: job.id === jobSelected.id ? true : false
    })))
  }
  
  function finishJob() {
    if (selected) {
      setSelected(undefined)
      setJobs(jobsOld => jobsOld.map(job => {
        if (job.id === selected.id) {
          return {
            ...job,
            selected: false,
            completed: true
          }
        }
        return job
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setJobs={setJobs}/>
      <List 
        jobs={jobs}
        selectedJob={selectedJob}
        />
      <Chronometer 
        selected={selected}
        finishJob={finishJob} 
      />
    </div>
  );
}

export default App;
