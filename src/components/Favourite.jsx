import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";

const Favourite = () => {
    const favJobs = useSelector((state) => state.favourites)

    return(
        <Container>
        <Row>
          <Col>
            {favJobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} id={jobData._id} />
            ))}
          </Col>
        </Row>
      </Container>
    )
}

export default Favourite