import Header from "../components/header";

const Home = props => (
  <>
    <Header />
    <h1>Hello World!</h1>
    <h3>{props.text}</h3>
  </>
);

export default Home;

export async function getStaticProps() {
  const props = (await import("../data.json")).default;
  console.log("props", props);
  return {
    props
  };
}
