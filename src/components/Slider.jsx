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
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" >
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Arrow direction="right" >
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider