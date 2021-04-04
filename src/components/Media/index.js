import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from "../Container"
import Row from "../Row"



function Media(){
    return (
        <div>
            <Container>
            <p>You can follow me on:</p>
                        <Row>
                        <a href="https://www.instagram.com/davidr095/" alt="My instagram page"><i
                            className="fab fa-instagram-square fa-5x"></i>
                            instagram <FontAwesomeIcon icon={['fab', 'instagram']} /></a></Row>
                            <Row>
                        <a href="https://github.com/Droman09" alt="My Github page"><i
                            className="fab fa-github-square fa-5x"></i>github <FontAwesomeIcon icon={['fab', 'github']} /></a></Row>
                     
                        <Row>
                        <a href="https://www.linkedin.com/in/david-roman-123983203/" alt="Linkedin page"><i
                            className="fab fa-linkedin fa-5x"></i>Linkedin <FontAwesomeIcon icon={['fab' , 'linkedin' ]}  fixedWidth/></a></Row>
                    </Container>
        </div>
    )

}

export default Media