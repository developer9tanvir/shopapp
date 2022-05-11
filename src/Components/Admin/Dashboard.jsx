import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css';

const Dashboard = () => {
  return (
    <section>
        <Container className='dash my-5'>
            <Row>
                <Col md={ 3 } >
                    <ul className='list-group dash-menu'>
                        <li className='list-group-item' ><Link to="/admin/dashboard">Dashboard</Link></li>
                        <li className='list-group-item' ><Link to="/admin/products">Products</Link></li>
                        <li className='list-group-item' ><Link to="/admin/category">Category</Link></li>
                        <li className='list-group-item' ><Link to="/admin/tag">Tags</Link></li>
                        <li className='list-group-item' ><Link to="/admin/layout">Lagout</Link></li>
                    </ul>
                </Col>
                <Col md={ 9 } >
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default Dashboard;