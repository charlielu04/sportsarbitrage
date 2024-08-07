import { Table } from "../components/home-components";
import { Header } from "../components/common";
import { SignUpForm } from "../components/home-components";
import "./Home.css";

function Home() {
  return (
    <div className="flexbox">
      <Header />
      <Table />
      <SignUpForm />
    </div>
  );
}

export default Home;
