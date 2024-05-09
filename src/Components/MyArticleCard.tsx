import {  Card, Col } from "react-bootstrap"
import {Result}from "../interfaces/interfaces"
import { Link } from "react-router-dom"


interface SingleArticleProps {
    art: Result
}

const MyArticleCard =(props:SingleArticleProps)=>{
return(
    <Col xs={12} sm={12} md={6} lg={3} className="mb-2" >
    <Card className="h-100" >
    <Card.Img className="image-style" src={props.art.image_url} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{props.art.title}</Card.Title>
      <Card.Text className="mb-auto">
        Pubblicato il: {props.art.published_at}
      </Card.Text>
      <Link to={`/details/${props.art.id}`} className="btn btn-info">Go to details</Link>
    </Card.Body>
  </Card>
    
    </Col>
)
}
export default MyArticleCard