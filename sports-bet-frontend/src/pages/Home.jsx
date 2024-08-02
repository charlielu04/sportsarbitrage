import { Table } from "../components/home-components";
import { Header } from "../components/common";
import { SignUpForm } from "../components/home-components";
import { Description } from "../components/home-components";
import "./Home.css";

function Home() {
  return (
    <div className="flexbox">
      <Header />
      <Table />
      <Description />
      <SignUpForm />
    </div>
  );
}

export default Home;
