import styled from 'styled-components';

//Arrow Mui icons
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
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
`;

const ImgContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" >
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper>
          <Slide>
          <ImgContainer>
              <ImgContainer>
                  <Image src='https://i.ibb.co/cXFnLLV/3.png' />
              </ImgContainer>
              <InfoContainer></InfoContainer>
          </ImgContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right" >
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider