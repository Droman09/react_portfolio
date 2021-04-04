import React from "react"
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom"
import Jumbotron from "../Jumbotron"
import Col from "../Col"
import Row from "../Row"
import Rock from "/Users/davidroman/Desktop/react_portfolio/src/images/rock_and_roam.png"
import Weather from "/Users/davidroman/Desktop/react_portfolio/src/images/weather_app.png"
import Pop from "/Users/davidroman/Desktop/react_portfolio/src/images/pop_quiz.png"
import Culture from "/Users/davidroman/Desktop/react_portfolio/src/images/culture.png"


const projectArr = [
    {
        title: "Rock and Roam",
        picture: Rock,
        website: "https://glynismullankwok.github.io/musiclocations/",
        github: "https://github.com/glynismullankwok/musiclocations",
        description: "Rock and Roam is an interactive website where users can enter the name of a city/state/country and get results of songs about the place."
    },
    {
        title: "Weather Dashboard",
        picture: Weather,
        website: "https://droman09.github.io/weather_dashboard/",
        github: "https://github.com/Droman09/weather_dashboard",
        description: "A weather dashboard that will run in the browser and let travelers see the weather outlook for multiple cities to plan a trip accordingly."
    },
    {
        title: "Pop Quiz!",
        picture: Pop,
        website: "https://droman09.github.io/pop_quiz-/",
        github: "https://github.com/Droman09/pop_quiz-",
        description: "Timed coding quiz with multiple-choice questions using HTML, CSS and Javascript."
    },
    {
        title: "Culture",
        picture: Culture,
        website: "https://gentle-cliffs-54160.herokuapp.com",
        github: "https://github.com/matthayden09/project_2",
        description: "This project is a blog and CMS system about different cultural topics that allows authors to delete their own posts, and allows for non-author users to like posts and add comments that are then appended to a comment box."
    }
]

function Projects() {
    return (
        <>
            {projectArr.map(index => {
                return (
                    <Jumbotron>
                        <Row>
                            <Col size="md-12">
                                <h1>{index.title}</h1>
                                <Row>
                                    <Col size="md-6">
                                        <Parallax bgImage={index.picture} strength={200}><div style={{ height: 350 }} onClick={() => window.open(index.website)}>
                                        </div>
                                        </Parallax>
                                    </Col>
                                    <Col size="md-4">
                                        <p>{index.description}</p>
                                        <p>Github page: <a href={index.github}>{index.github}</a></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                )
            })}
        </>
    )

}

export default Projects