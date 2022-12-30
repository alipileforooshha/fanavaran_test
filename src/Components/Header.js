import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import '../App.css';

const Header = () => {

    var show = 0;

    const showDropdown = event =>{
        console.log(show);
        window.show = 1
    }
    const hideDropdown = e => {
        window.show = 0;
        // setShow(false);
    }

  return (
      <Navbar expand="lg" className='bg-success'>
        <Container fluid  className='justify-contents-start'>
            <Navbar.Toggle aria-controls='navbar-dark-example' className='' />
            <Col>
                <Nav.Link href='#' className='text-white'>صفحه اصلی</Nav.Link>
            </Col>

            <Col>
                <Nav className=''>
                    <NavDropdown
                        title="درباره سازمان فروش"
                        id='nav-dropdown'
                        show={show}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}
                    >
                        <NavDropdown.Item href="#action/3.1" className='text-danger'>مزایای عضویت</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">قوانین و مقررات عضویت</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
            
            <Col>
                <Nav className=''>
                    <NavDropdown
                        title="محصولات ما"
                        id='nav-dropdown'
                        // show={show}
                        // onMouseEnter={showDropdown} 
                        // onMouseLeave={hideDropdown}
                    >
                        <NavDropdown.Item href="#action/3.1" className='text-danger'>بیمه اندوخته دار امید</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
            
            <Col>
                <Nav className=''>
                    <NavDropdown
                        title="درباره بیمه عمر"
                        id='nav-dropdown'
                        // show={show}
                        // onMouseEnter={showDropdown} 
                        // onMouseLeave={hideDropdown}
                    >
                        <NavDropdown.Item href="#action/3.1" className='text-danger'>مزایای بیمه عمر</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">سوالات متداول</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>

            <Col>
                <Nav.Link href='#' className='text-white'>راهنمای عضویت</Nav.Link>
            </Col>

            <Col>
                <Nav.Link href='#' className='text-white'>ثبت نام</Nav.Link>
            </Col>

            <Col>
                <Nav.Link href='#' className='text-white'>ورود/پیگیری خرید</Nav.Link>
            </Col>

        </Container>
    </Navbar>
  )
}

export default Header