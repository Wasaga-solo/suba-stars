import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav className="justify-content-start inner-nav">
    <MDBNavItem>
        <MDBNavLink disabled to="#!"><strong className="navtab-title">PLAYERS</strong></MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Men</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!" className="navtab">Women</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!" className="navtab">Under-23s</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Under-18s</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Legends</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Managers</MDBNavLink>
      </MDBNavItem> 
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Coaches</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to="#!" className="navtab">Academy</MDBNavLink>
      </MDBNavItem>     
    </MDBNav>

  </BrowserRouter>
);