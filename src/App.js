/* eslint-disable */
import React, { useContext, useState, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, FormControl, Form, Offcanvas } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
// import Detail from './Detail.js';
let Detail = lazy(() => import('./Detail.js'));
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart.js';
export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([13, 11, 12, 4, 6, 1, 5, 7, 8, 2, 5, 23, 24, 7]);

  return (
    <div className="App">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand><Link className='text-link' to="/"><h1><strong>Shoes #</strong></h1></Link></Navbar.Brand>
          {/* <Nav.Link as={Link} to="/detail">Detail</Nav.Link> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><strong>Shoes #</strong></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="background">
            <div className='textBox'>
              <h1>shoes 20% Season Off</h1>
              <p></p>
              <p><Button variant="outline-light">Learn More</Button></p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>
            <button className='btn btn-primary' onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  console.log(result.data);
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(() => {
                  console.log('실패했어요')
                })
            }}>more</button>
          </div>
          <div className="background1">
          </div>
        </Route>
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Suspense fallback={
              <div className='preloader'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" className='loader'>
                  <path className='path' stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943" />
                </svg>
              </div>}>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
            </Suspense>
          </재고context.Provider>
        </Route>
        <Route path="/Cart">
          <Cart></Cart>
        </Route>
      </Switch>
      <footer className="footer">
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 foot subscribe">
                <h5 className="foot-title">COMPANY NAME</h5>
                <p>About the company, little discription will goes here.. </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="foot">
                  <h5 className="foot-title">Quick Links</h5>
                  <ul className="thumbnail-foot">
                    <li><a href="#.">Get Started</a></li>
                    <li><a href="#.">Top Leaders</a></li>
                    <li><a href="#.">Success Stories</a></li>
                    <li><a href="#.">Event/Tickets</a></li>
                    <li><a href="#.">News</a></li>
                    <li><a href="#.">Lifestyle</a></li>
                    <li><a href="#.">About</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="foot">
                  <h5 className="foot-title">Get Started</h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="foot">
                  <h5 className="foot-title">Contact Us</h5>
                  <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                  <ul className="snsFooter">
                    <li><a title="youtube" target="_blank" href="#void"><img alt="youtube" src={require('./images/facebook.png')} /></a></li>
                    <li><a href="#void" target="_blank" title="Facebook"><img alt="Facebook" src={require('./images/insta.png')} /></a></li>
                    <li><a href="#void" target="_blank" title="Twitter"><img alt="Twitter" src={require('./images/twitter.png')} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className='foot-title'>Copyright Company Name © 2021. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
function Card(props) {
  let history = useHistory();
  return (
    <div className="col-md-4 item imgHover" onClick={() => { history.push('/detail/' + props.shoes.id) }}>
      <img src={require('./images/item' + (props.shoes.id) + '.jpg')} alt='' width="100%" />
      <div className='textBoxs'>
        <h3>{props.shoes.title}</h3>
        <p>{props.shoes.content}</p>
        <small>{props.shoes.price}₩</small>
      </div>
      <div><Button className='buyBtn' variant="dark">Buy</Button></div>
    </div>
  )
}

export default App;
