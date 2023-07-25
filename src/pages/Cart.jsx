import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';



const Container = styled.div``;

const Wrapper = styled.div`
  padding : 20px;
`;  

const Title = styled.h1`
  font-weight : 300;
  text-align : center;
`;

const Top = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between; 
`;

const TopButton =  styled.button``;

const TopTexts = styled.div``;

const TopText = styled.span``;

const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom></Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart