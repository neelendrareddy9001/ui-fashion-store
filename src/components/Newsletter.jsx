import styled from 'styled-components';

//import Material icon
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  height : 60vh;
  background-color : #fcf5f5;
  display : flex;
  align-items : center;
  justify-content : center; 
`;

const Title = styled.h1``;

const Description = styled.div``;

const InputContainer = styled.div``;

const Input = styled.div``;

const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite prouducts.</Description>
        <InputContainer>
          <Input placeholder='Your Email Address '/>
          <Button>
            <SendIcon/>
          </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter