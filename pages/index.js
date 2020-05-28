import Header from "../components/header";

const Home = props => (
  <>
    <Header />
    <h1>Hello World!</h1>
    <h3>{props.text}</h3>
  </>
);

export default Home;

export function getStaticProps() {
  const props = import("../data.json").default;
  console.log("props", props);
  return {
    props
  };
}
