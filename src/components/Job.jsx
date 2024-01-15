import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Job = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log("prima di set" , isSelected)
    setIsSelected(isSelected => !isSelected)
    console.log(isSelected, "dopo set")



    if(!isSelected){
      console.log(isSelected, "dentro if quando è true")
      dispatch({
        type : 'ADD_FAVOURITES',
        payload : data
      })}

    else if(isSelected){
      console.log(isSelected, "dentro else if quando è false")
      dispatch({
        type : 'REMOVE_FAVOURITES',
        payload : data
      })
    }}
  

  return(
    <Row
    onClick={handleClick}
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <FaStar
      className={isSelected ? 'favourites' : ''}/>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )
}

export default Job
