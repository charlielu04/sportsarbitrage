import { Description } from "../components/explains-components";
import { TableExplanation } from "../components/explains-components";
import { Header } from "../components/common";
import "./Explain.css";

function Explain() {
  return (
    <div>
      <Header />
      <Description />
      <TableExplanation />
    </div>
  );
}

export default Explain;
