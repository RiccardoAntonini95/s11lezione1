import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Job from "./Job";

const Favourite = () => {
    const favJobs = useSelector((state) => state.favourites)
    console.log(favJobs)

    return(
        <Row>
          <Col>
            {favJobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} id={jobData._id} />
            ))}
          </Col>
        </Row>
    )
}

export default Favourite