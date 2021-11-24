import { useState } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";
import { connect } from "react-redux";


 const mapStateToProps = (state) => state

 const mapDispatchToProps = (dispatch) => ({
    favourite: (elementId) => {
      dispatch({
        type: "FAVOURITE",
        payload: elementId
        })
      }
  }) 



const SearchResults = ({ result }) => {
  const [searchResult, setSearchResult] = useState(result);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);


  const toggleClick =( id )=> {
   const index = selectedItemsArray.indexOf(id)
   if (index === -1) {
       setSelectedItemsArray([...selectedItemsArray, id])
   } else {
       setSelectedItemsArray([...selectedItemsArray.filter(el => el !== id)])
   }

  };

 

  return (
    <div>
      {result ? (
        result.data.map((data, i) => (
          <Row className={i % 2 === 0 ? "grayer" : "whiter"}>
            <Col sm={6}>
              <div>
                <p className="d-flex">
                  <h6>Company Name</h6> : {data.company_name}
                </p>
                <p className="d-flex">
                  <h6>Position</h6> : {data.title}
                </p>
                <p className="d-flex">
                  <h6>Hours</h6> : {data.job_type}
                </p>
                <p className="d-flex">
                  <h6>Category</h6> : {data.category}
                </p>
              </div>
            </Col>
            <Col sm={6}>
                <div className="d-flex justify-content-between">
              <Link to={`/company/${data._id}`}>
                <Button>find out more</Button>
              </Link>
              <i className={
             selectedItemsArray.includes(data._id) ? "bi bi-star-fill" : "bi bi-star"
          }
          onClick={() => toggleClick(data._id)} style={{color: "black", fontSize: "25px", cursor: "pointer"}}></i>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
