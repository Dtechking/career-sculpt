import { Link } from "react-router-dom";
import "../Show.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from '../AuthContext';


const Welcome = () => {

  const { isLoggedIn, login, logout } = useAuth();  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLinkClick = (path) => {
    navigate(path);
    
  }

  const handleModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
        <div>
            <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="hero-header">
                <h2>
                  Tomorrow Looks Better Because We're <span className="hero-head">Here to Help You </span>Choose Your Career Track.
                </h2>
              </div>
              <div className="more">
                <Link to="/aboutus">
                  <button className="btn" id="btns">
                    About Career <span className="brand">Guidance</span>
                  </button>
                </Link>
              </div>
              <div style={{ marginTop: '30px'}}>
                {
                  isLoggedIn ? (
                    <Link to="/quiz" onClick={() => handleLinkClick('/quiz')}>
                      <button type="button" className="btn btn-dark" id="btns">
                        Take Test
                      </button>
                    </Link>    
                  ) : (
                    <button type="button" onClick={handleModal} className="btn btn-dark" id="btns">
                        Take Test
                      </button>
                  )
                }
                
              </div>
              
            </div>
            
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please log in first to take the test.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Link to="/user" onClick={() => handleLinkClick('/user')}>
              <Button variant="primary">Go to Login</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </section>
        </div>
    )
};

export default Welcome;