import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimateProvider from './AnimateProvider';

const Analysis = ({ scoreFinal }) => (
  <div className="border p-4 mb-4 text-center" style={{ width: '100%' }}>
    <h3 className="text-md text-neutral-900 font-bold md:text-lg mb-3">
      Analysis
    </h3>
    <p className="lead">Score Details:</p>

    {Object.entries(scoreFinal).map(([key, value], index) => (
      <div key={index} className="mb-4">
        <p className="lead mb-2">
          {key.replace(/_/g, ' ').toUpperCase()}:
        </p>
        <ProgressBar
          now={value * 2} // Bootstrap ProgressBar uses values between 0 and 100
          label={`${value}%`}
          variant={
            value <= 10
              ? 'danger'
              : value <= 30
              ? 'warning'
              : 'success'
          }
          className="mb-2 mx-auto"
          style={{ width: '60%' }} // Adjust the width as needed
        />
      </div>
    ))}
  </div>
);

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.careerSuggestions || !state.scoreFinal) {
    return <div>Error: No state data found</div>;
  }

  const { careerSuggestions, scoreFinal } = state;

  const handleBackClick = () => {
    navigate('/');
  };

  const handleBackDomainClick = () => {
    navigate('/domain');
  };

  if (!careerSuggestions || careerSuggestions.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <h1 className="display-4">Quiz Result</h1>
            <p className="lead">No career suggestions available.</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5" style={{overflowY: 'auto'}} fluid>
      <Row>
        <Col>
          <h1 className="display-4 text-center">Quiz Result</h1>
          <AnimateProvider className="flex flex-col space-y-10 md:max-w-xl md:mx-auto">
      <Analysis scoreFinal={scoreFinal} />

      <h3 className="text-lg text-center text-neutral-900 font-bold md:text-xl mt-4 mb-4">
        Your Career Suggestions are:
      </h3>

      <Container fluid style={{justifyContent: 'center', alignItems: 'center'}}>
        <Row>
  {careerSuggestions.map((career, index) => (
    <Col
      key={index}
      className="text-6xl font-bold p-5 rounded-lg bg-orange-500 text-neutral-100 border-2 border-orange-700 md:text-7xl"
      style={{
        display: 'inline-block',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'orange',
        overflow: 'hidden', // Ensure overflow is hidden to apply borderRadius
        marginBottom: '10px', // Increase the bottom margin
        marginTop: '10px',
        marginLeft: '50px',
        marginRight: '50px' // Increase the top margin
      }}
    >
      <h3 className="text-center">{career}</h3>
    </Col>
  ))}
  </Row>
</Container>



      <div className="d-flex justify-content-center mt-4" style={{ marginBottom: '80px', marginTop: '200px', }}>
        <Button
          onClick={handleBackClick}
          variant="warning"
          className="rounded-pill mr-2"
        >
          Back to Dashboard
        </Button>

        <Button
          onClick={handleBackDomainClick}
          variant="warning"
          className="rounded-pill"
        >
          Go to Domains Page
        </Button>
      </div>
    </AnimateProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;