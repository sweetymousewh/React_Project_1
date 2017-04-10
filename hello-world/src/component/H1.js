'use strict';

import React from 'react';
import { Row, Col} from 'reactstrap';
import { Nav, NavbarToggler, Navbar, NavLink, Collapse, NavbarBrand } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const rightColStyle = {
    width : '100px'
};

const ToggleStyle = {
    width : '100px',
    margin : 'auto auto auto 20px',
    backgroundColor : 'lightblue'
};

const centerRow = {
    margin : 'auto'
}
 const BreadStyle = {
    backgroundColor: 'transparent',
    height : '40px'
 }


export default class Header extends React.Component{
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render(){
        return (
        <div>
            <Navbar color="faded" light>
                <Row>
                    <Col xs="12" md="8">
                        <Row>
                            <Col md="2">
                                <NavbarToggler style={ToggleStyle} onClick={this.toggleNavbar} />
                            </Col>
                            <Col md="2">
                                <Breadcrumb style={BreadStyle}>
                                    <BreadcrumbItem>HomePage</BreadcrumbItem>
                                </Breadcrumb>

                            </Col>
                        </Row>
                        <Row style={centerRow}>
                            <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
                                        <NavbarBrand>
                                            <Nav>
                                                <NavLink><Link to="/home">Homepage</Link></NavLink>
                                                <NavLink><Link to="/list">List</Link></NavLink>
                                                <NavLink><Link to="/records">Records</Link></NavLink>
                                                <NavLink><Link to="/contact_us">Contact us</Link></NavLink>
                                            </Nav>
                                        </NavbarBrand>
                            </Collapse>
                        </Row>
                    </Col>
                    <Col xs="6" md="4">
                        <Nav navbar>
                            <Row>
                                <Col/>
                                <Col>
                                    <NavLink href="/components/">Components</NavLink>
                                </Col>
                                <Col>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                                </Col>
                            </Row>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>



        </div>

        );
    }
}
