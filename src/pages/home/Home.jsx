import Category from "../../components/Category/Category";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <div>
      <Container>
        <Category></Category>
        <SectionTitle
          subHeading={"Our Latest Service"}
          heading={"Services"}
        ></SectionTitle>
      </Container>
    </div>
  );
};

export default Home;
