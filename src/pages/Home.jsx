import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "./style.scss";
const Home = () => {
  return (
    <div className="home-div">
      <Header />
      <section>
        <Main />
        <Footer />
      </section>
    </div>
  );
};
export default Home;
