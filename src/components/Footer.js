import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBLink,MDBIcon,MDBBtn} from "mdbreact";
import Logo from '../images/logo.png'

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footfont">
      <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
        <MDBCol className="footer-logo">
            <img src={Logo} alt="SUBA STARS"/>
        </MDBCol>
        <MDBCol>
        <MDBBtn size="md" color="indigo">LOG IN<MDBIcon fas icon="sign-in-alt" className="mr-2 ml-1" /></MDBBtn>
        <MDBBtn size="md" color="red">SIGN UP<MDBIcon far icon="user" className="mr-2 ml-1" /></MDBBtn>
        <MDBBtn size="md" color="yellow" >DONATE<MDBIcon far icon="gem" className="mr-2 ml-1" /></MDBBtn>
        </MDBCol>
        <MDBCol className="social-icons">
        <MDBIcon  fab icon="youtube" size="3x" className=" white-text ml-5 rounded"/>
        <MDBIcon  fab icon="facebook-f" size="2x" className="white-text ml-5 rounded"/>
        <MDBIcon  fab icon="twitter"  size="2x" className=" white-text ml-5 rounded"/>
        <MDBIcon  fab icon="instagram"  size="2x" className="white-text ml-5 rounded"/>
        </MDBCol>
        </MDBRow>
        <MDBRow className="important-links">
            <MDBLink  to="/" >Home</MDBLink>
            <MDBLink  to="/" >News</MDBLink>
            <MDBLink  to="/" >Fixtures</MDBLink>
            <MDBLink  to="/" >Players</MDBLink>
            <MDBLink  to="/" >Funs</MDBLink>
            <MDBLink  to="/" >Donation</MDBLink>
            <MDBLink  to="/" >About</MDBLink>
            <MDBLink  to="/" >Activities</MDBLink>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">Suba Stars</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;