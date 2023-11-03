import React, {useState} from "react";
import {Layout} from "../layouts/Layout";
import {Button, Form} from "react-bootstrap";

const AddPost = () => {
    const [title, setTitle] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [imageURL, setImageURL] = useState()

    const submit = () => {
        const localStoragePosts = JSON.parse(localStorage.getItem("posts"))
        if (localStoragePosts) {
            localStorage.setItem("posts", JSON.stringify([...localStoragePosts, {
                title,
                image: imageURL,
                description: shortDescription
            }]))
        } else {
            localStorage.setItem("posts", JSON.stringify([{
                title,
                image: imageURL,
                description: shortDescription
            }]))
        }
        setTitle("")
        setShortDescription("")
        setImageURL("")
    }

    return (
        <Layout>
            <h1>Add new post</h1>

            <Form onSubmit={e => {
                e.preventDefault()
                submit()
            }} style={{width: "60%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title}
                                  onChange={e => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control type="text" placeholder="Short description" value={shortDescription}
                                  onChange={e => setShortDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" value={imageURL}
                                  onChange={e => setImageURL(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add new post
                </Button>
            </Form>
        </Layout>
    )
}

export {AddPost}