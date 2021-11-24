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
    favourite: (element) => {
      dispatch({
        type: "FAVOURITE",
        payload: element
        })
      },
    removeFavourite: (element) => {
      dispatch({
        type: "REMOVE_FAVOURITE",
        payload: element
        })
      }
  }) 



const SearchResults = ({ result, favourite, removeFavourite }) => {
  const [searchResult, setSearchResult] = useState(result);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);


  const toggleClick =(element)=> {
   const index = selectedItemsArray.indexOf(element._id)
   if (index === -1) {
       setSelectedItemsArray([...selectedItemsArray, element._id])
       favourite(element)
   } else {
       setSelectedItemsArray([...selectedItemsArray.filter(el => el !== element._id)])
       removeFavourite(element)
   }

  };

 

  return (
    <div>
      {result ? (
        result.data.map((data, i) => (
          <Row className={i % 2 === 0 ? "grayer" : "whiter"}>
            <Col sm={9}>
              <Col sm={6}>
                
                  <p className="d-flex">
                    <h6>Company Name</h6> : {data.company_name}
                  </p>
                  <p className="d-flex">
                    <h6>Position</h6> : {data.title}
                  </p>
           
              </Col>
              <Col sm={6}>
                       <p className="d-flex">
                    <h6>Hours</h6> : {data.job_type}
                  </p>
                  <p className="d-flex">
                    <h6>Category</h6> : {data.category}
                  </p>
            
              </Col>
            </Col>
            <Col sm={3}>
                <div className="d-flex justify-content-between">
              <Link to={`/company/${data._id}`}>
                <Button>find out more</Button>
              </Link>
              <div >
              <i className={
             selectedItemsArray.includes(data._id) ? "bi bi-star-fill fav-star bubble" : "bubble bi bi-star fav-star"
          }
          onClick={() => toggleClick(data)} ></i>
          </div>
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
