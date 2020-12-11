import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="navfont" dark expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
        <img src={Logo} className="logo" alt="SUBA STARS"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
            <MDBNavLink to="/">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <span className="mr-2">{" "}NEWS</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default drop">
                  <MDBDropdownItem><Link to="/news/latest">Latest</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/men">Men</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/women">Women</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/under23s">Under-23s</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/under18s">Under-18s</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/club">Club</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/breakingNewsAlerts">Breaking News Alerts</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/injuriesAndSuspensions">Injuries &amp; Suspensions</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/news/academy">Academy</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <span className="mr-2">{" "}FIXTURES</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default drop">
                  <MDBDropdownItem href="#!">All</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Men</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Women</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Under-23s</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Under-18s</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Division-1</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Friendlies</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <span className="mr-2">{" "}PLAYERS</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default drop">
                  <MDBDropdownItem prevent default href="/players">Men</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Women</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Under-23s</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Under-18s</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Legends</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Managers</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Coaches</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Academy</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">DONATION</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">FUNS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <span className="mr-2">{" "}ABOUT</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default drop">
                  <MDBDropdownItem href="#!">History</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Honours</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Stadium</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Charities</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Contacts</MDBDropdownItem>
                  <MDBDropdownItem href="#!">FAQs</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">ACTIVITIES</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="youtube" style={{color:"white"}}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="facebook-f" style={{color:"white"}}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" style={{color:"white"}}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="instagram" style={{color:"white"}}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default drop">
                  <MDBDropdownItem href="#!">LogIn</MDBDropdownItem>
                  <MDBDropdownItem href="#!">SignUp</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;