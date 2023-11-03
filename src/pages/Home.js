import React, {useEffect, useState} from "react";
import {Layout} from "../layouts/Layout";
import "./Home.css"
import {Button, Card} from "react-bootstrap";

const postsHardcoded = [
    {
        title: "Ronaldo won 231231 Balon'Dor",
        image: "https://www.portugal.com/wp-content/uploads/2022/02/cristiano-ronaldo-scaled.jpeg",
        description: "Emaa on sdelal eto"
    },
    {
        title: "Кайрат Нюшаны",
        image: "https://stan.kz/wp-content/uploads/2017/05/CMuSWh0lnS0.jpg",
        description: "Араларында не бар"
    },
    {
        title: "Кайрат пен Тореш жаксы достар",
        image: "https://cdn.nur.kz/images/1120x630/14bb95f35cb310c5.jpeg",
        description: "Нагыз достык"
    },
    {
        title: "Месси джунгар",
        image: "https://krot.club/uploads/posts/2022-03/1646897204_1-krot-info-p-messi-prikoli-smeshnie-foto-1.jpg",
        description: "Британские ученые доказали это"
    },
]

const HomePage = () => {
    const [posts, setPosts] = useState(postsHardcoded)

    useEffect(() => {
        const localStoragePosts = JSON.parse(localStorage.getItem("posts"))
        if (localStoragePosts) {
            setPosts([...postsHardcoded, ...localStoragePosts])
        }
    }, [])

    return (
        <Layout>
            <h1>Welcome to Tipa Twitter no ne Twitter applicaiton</h1>
            <h2>
                List of posts
            </h2>
            <div className="listOfPosts">
                {posts.map((item, inedx) => (
                    <Card style={{width: "300px"}}>
                        <Card.Img style={{height: "200px"}} variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary">Read detiled</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Layout>
    )
}

export {HomePage}