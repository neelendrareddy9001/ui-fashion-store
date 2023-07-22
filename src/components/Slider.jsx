import styled from 'styled-components';

//Arrow Mui icons
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left : ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  backgroung-color: transparent;
  font-size: 20px;
  cursor: pointer;
  border-radius: 25px;
`;



const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" >
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper>
          <Slide bg="f5fafd">
              <ImgContainer>
                  <Image src='https://i.ibb.co/cXFnLLV/3.png' />
              </ImgContainer>
              <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIAVALS.</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
          </Slide>
          <Slide bg="fcf1ed">
              <ImgContainer>
                  <Image src='https://i.ibb.co/cXFnLLV/3.png' />
              </ImgContainer>
              <InfoContainer>
                <Title>WINTER SAL</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIAVALS.</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
          </Slide>
          <Slide bg="fbf0f4">
              <ImgContainer>
                  <Image src='https://i.ibb.co/cXFnLLV/3.png' />
              </ImgContainer>
              <InfoContainer>
                <Title>POPULAR SALE</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIAVALS.</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right" >
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider