import {
  Header,
  Navbar,
  FirstSection,
  SecondSection,
  Footer,
} from "../components/components";

function Home() {
  return (
    <div className="home">
      <Header>
        <Navbar />
      </Header>
      <div className="main">
        <div className="firstsection">
          <FirstSection />
        </div>
        <div className="secondsection">
          <SecondSection />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
