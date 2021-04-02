import React from "react";
import Row from "../components/Row"
import Col from "../components/Col"
import Jumbotron from "../components/Jumbotron"
import Parallex from "../components/Parallax"

function Main() {
    return (
        <div>

            <Row>
                <Col size="md-6">
                    <h1>David Roman</h1>
                </Col>
            </Row>

            <Row>
                <Jumbotron>
                    <Row>
                        <Col size="md-6">
                                <Parallex />
                        </Col>

                        <Col size="md-6">
                            <p >I was born and raised in the city of Chicago, Illinois. A son of immigrant parents from
                            Mexican descent and the second oldest of two brothers and a sister diagnosed with down syndrome. Even
                            though my sister needs were a priority, my parents supported and loved each of us individually and as a
                            whole. Growing up, I realized how full their plate was so I did my best to support them as much as I can
                            by attending to my brothers needs. These unique challenges help me develop a level of maturity at a
                young age.</p>

                            <p> I worked in various positions growing up. During high school, I was given the privilege to work as a
                            student aid for the Driver's Education program until I graduated. Ive worked in fast food as a
                            chasier, managed a gas station, and climb my way up in the hospitality industry at a fine dining
                            restaurant called Momotaro. I attended collage for a computer science degree and attended Illinois
                            institute of technology for a short period of time. During my free time, I write music and mix vocals
                            for local artist. I enjoy reading as it reveals things in a new light, and brew Kombucha to share with
                my friends and family.</p>
                        </Col>
                    </Row>
                </Jumbotron>
            </Row>
        </div>
    )
}

export default Main;