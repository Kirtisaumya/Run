
import { Card, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="border-top mt-5 pt-4">
      <Card>
        <footer className='Footer bg-white text-dark'>
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h3>&copy;RUN 2024.</h3>
                <p>Run Faster and in Style</p>
              </div>
              <div className="col-md-3">
                <div className="product-section">
                  <h4>Product</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Title</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Solution</a></li>
                    <li><a href="#">Tutorial</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Releases</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="resources-section">
                  <h4>Resources</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Tutorial</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stay-updated-section">
                  <h5>Stay up to Date</h5>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginTop: "8px" }}>
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Card>
    </div>
  );
};

export default Footer;
