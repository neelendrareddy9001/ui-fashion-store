import  styled  from "styled-components";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom : 20px;
`;

const Button = styled.button`
  border : none;
  padding : 10px;
  background-color : white;
  color : greay;
  cursor : pointer;
  font-weight : 600;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }

`;

const CategoryItem = ({item}) => {
  return (
      <Container>
          <Image src={item.img}/>
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
      </Container>
  )
}

export default CategoryItem;