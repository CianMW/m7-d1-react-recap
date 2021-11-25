import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  FormGroup,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";
import { fetchJobsAction } from "../actions/index.js";
const mapStateToProps = (state) => state;

//setJobs takes a url as payload and uses it as props
const mapDispatchToProps = (dispatch) => ({
  setJobs: (url) => {
    dispatch(fetchJobsAction(url))
  }
});

const JobSearch = ({setJobs, state}) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const fetchData = async () => {
    if (query.length > 3 && category) {
      const response = await setJobs(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&category=${category}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", ...data);
        await setSearchResult(...data);
      } else {
        console.log("ERROR: could not fetch data");
      }
    } else if (query.length > 3) {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        await setSearchResult(data);
      } else {
        console.log("ERROR: could not fetch data");
      }
    } else {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10`
      );
      if (response.ok) {
         setJobs("SHOULD BE URL");
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        await setSearchResult(data);
      } else {
        console.log("ERROR: could not fetch data");
      }
    }
  };
  
  useEffect(() => {
    console.log("this is the query:", query);
    console.log("this is the category:", category);

    fetchData();
  }, [query]);

  useEffect(() => {
    console.log("this is the query:", query);
    console.log("this is the category:", category);
    if (!searchResult) {
      fetchData();
    }
  }, []);

  return (
    <div className="total-cover">
      <div className="head-background">
        <Container className="p-2">
          <Row>
            <Col sm={6}>
              <h2>Search for your new future today!</h2>
            </Col>
            <Col sm={6}>
              {" "}
              <FormGroup className="search-group">
                <Form inline className="d-flex">
                  <FormControl
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button
                    onClick={() => console.log(query)}
                    variant="outline-info"
                  >
                    Search
                  </Button>
                </Form>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Control
                      as="select"
                      onSelect={(e) => setCategory(e.target.value)}
                      custom
                    >
                      <option></option>
                      <option>All Others</option>
                      <option>Business</option>
                      <option>Data</option>
                      <option>Marketing</option>
                      <option>Finance / Legal</option>
                      <option>Product</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {searchResult && <SearchResults result={searchResult} />}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
