import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Question = ({ qno, question, options, handleAnswer }) => {
  return (
      <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={10} lg={8} style={{ width: '100%' }}>
          <div className="border p-4 mt-5 text-center rounded" style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
            <div style={{ border: '2px solid black', paddingTop: '30px', borderRadius: '15px', width: '100%' }}>
              <div className="mb-4">
                <h3>{question}</h3>
              </div>

              <div className="p-4" style={{ backgroundColor: '#f0f0f0', width: '80%', margin: 'auto' }}>
                {options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option, question, qno)}
                    className="mb-2 w-100"
                    variant="primary" // Set the desired color for the options
                    style={{ borderRadius: '10px' }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
