import React, { useState } from 'react';
import useGetJobs from '../../useGetJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';

function Body() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useGetJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error... Please refresh page</h1>}
      <h1>
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </h1>
    </Container>
  );
}

export default Body;
