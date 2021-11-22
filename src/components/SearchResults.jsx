import { useState } from "react";
import { Form, FormControl, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";

const SearchResults = ({result}) => {

    const [searchResult, setSearchResult] = useState(result);

  return (
      <div>
    { result ? (result.data.map((data, i) =>
        <Row className={i%2 ===0 ? "grayer" : "whiter" } >
            <Col sm={6}>
                <div>
                    <p className="d-flex"><h6>Company Name</h6> : {data.company_name}</p>
                    <p className="d-flex"><h6>Position</h6> : {data.title}</p>
                    <p className="d-flex"><h6>Hours</h6> : {data.job_type}</p>
                    <p className="d-flex"><h6>Category</h6> : {data.category}</p>
                </div>
            </Col>
            <Col sm={6}>
                <Link to="/" >
                    <Button>find out more</Button>
                </Link>
            </Col>
        </Row>
)):(<></>)}
    </div>
  );
};

export default SearchResults;