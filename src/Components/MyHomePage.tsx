import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Articles } from "../interfaces/interfaces"
import MyArticleCard from "./MyArticleCard"

const MyHomePage = () => {
  const [articles, setArticles] = useState<Articles | null>(null)

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      )
      if (response.ok) {
        const articlesObj = await response.json()
        setArticles(articlesObj)
      } else {
        throw new Error("errore nella fetch")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Container>
      <Row>
        <h1 className="my-4">Il mio grande sito di Articoli </h1>
        {articles &&
          articles?.results.map((art) => {
            return <MyArticleCard key={art.id} art={art} />
          })}
      </Row>
    </Container>
  )
}
export default MyHomePage
