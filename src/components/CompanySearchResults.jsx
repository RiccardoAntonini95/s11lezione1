import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
/* import Favourite from './Favourite' */

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} id={jobData._id} /* onclick dispatch */ />
          ))}
{/*           <Favourite key={1}/> */}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
