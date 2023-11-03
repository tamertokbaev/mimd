import React from "react";
import {Layout} from "../layouts/Layout";
import {Figure} from "react-bootstrap";

const Profile = () => {

    return (
        <Layout>
            <div className="bg-body-tertiary p-2 border-2">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"
                    />
                    <Figure.Caption>
                        Tamerlan Tokbayev.Author
                    </Figure.Caption>
                </Figure>
            </div>
        </Layout>
    )
}

export {Profile}