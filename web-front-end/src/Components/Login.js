import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/side-logo.svg" alt="" />
                </a>
            </Nav>
        </Container>
    );
};



const Container = styled.div`
  padding: 0;
  background-color: #2B2D42;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  & > p {
    color: #EDF2F4;
  }
  
  & > a {
    width: 135px;
    padding-left: 20px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export default Login;