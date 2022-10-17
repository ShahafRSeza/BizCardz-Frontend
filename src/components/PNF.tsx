import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface PNFProps {}

const PNF: FunctionComponent<PNFProps> = () => {
  return (
    <div className="page404">
      <div className="d-flex justify-content-center align-items-center flex-column h-100 container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          We're sorry, the page you requested could not be found. <br /> Please
          go back to the Homepage
        </p>
        <Link to="/" className="btn btn-warning">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PNF;
