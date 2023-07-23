import styled from 'styled-components';

//import Material Ui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Container = styled.div`
  display : flex;
`;

const Left = styled.div`
  flex : 1;
  display : flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialIconCenter = styled.div`
  display : flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
`;

const Center = styled.div`
  flex : 1;
`;

const Right = styled.div`
  flex : 1;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo>LAMA.</Logo>
          <Desc>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialIconCenter>
            <SocialIcon>
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon>
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon>
                <TwitterIcon/>
            </SocialIcon>
            <SocialIcon>
                <PinterestIcon/>
            </SocialIcon>
          </SocialIconCenter>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer