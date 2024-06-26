import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleArticle } from "../interfaces/interfaces"
import { Col, Container, Row, Spinner } from "react-bootstrap"

const MyDetails = () => {
  const params = useParams()
  const artId = params.artId
  console.log(artId)

  const [singleArt, setSingleArt] = useState<SingleArticle>()
  const [isLoading, setIsLoading] = useState(true)

  const singleFetchArticle = async () => {
    try {
      const resp = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${artId}`
      )
      if (resp.ok) {
        const singleArt = await resp.json()
        setSingleArt(singleArt)

        console.log(singleArt)
      } else {
        throw new Error("errore nel singolo articolo")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    singleFetchArticle()
  }, [])
  return (
    <Container>
      {isLoading && isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <h1 className="my-4">Grande pagina dettaglio</h1>
          <Col>
            <div className="d-flex gap-3 mb-4">
              <img
                className="w-50"
                src={singleArt?.image_url}
                alt={singleArt?.title}
              />

              <div className="d-flex flex-column">
                <h2 className=" mb-auto">{singleArt?.title}</h2>

                <p>{singleArt?.news_site}</p>
                <p>{new Date(singleArt?.published_at).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <h4>Summary</h4>
              <p>{singleArt?.summary}</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}
export default MyDetails
