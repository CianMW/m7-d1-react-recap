import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useEffect, useState } from "react";

const JobSearch = () => {
  const [query, setQuery] = useState(null);
  const [category, setCategory] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
         console.log(query)
      async function fetchData() {  
            if (query.length > 4 && category) {

       const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`)
       if (response.ok){
           const data = response.json()
           console.log("HERE IS THE FETCHED DATA :", data)
           setSearchResult(data)
       } else {
           console.log("ERROR: could not fetch data")
       }

    } else if (query.length > 4 ) {

    };}
    fetchData()
 

  }, [query]);


  return (
    <div>
      <div style={{ height: "100px", backgroundColor: "blue" }}>
        <Container className="p-2">
          <Row>
            <Col sm={6}>
              <h2>Search for your new future today!</h2>
            </Col>
            <Col sm={6}>
              {" "}
              <Form inline className="d-flex">
                <FormControl
                  value={query}
                  onChange={e => setQuery(e.target.value)}
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
            </Col>
          </Row>
        </Container>
      </div>

      {searchResult && searchResult.map()}
    </div>
  );
};

export default JobSearch;
