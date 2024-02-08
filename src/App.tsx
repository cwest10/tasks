import React from "react";
import "./App.css";
import logo from "./Images/Logo.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <img src={logo} alt="UD's Logo" />
                <h2>Connor Westerman</h2>
            </header>
            <p> </p>
            <Container>
                <div className="App-column">
                    <Row>
                        <Col>Hello World</Col>
                        <Col>Goodbye World</Col>
                    </Row>
                </div>
            </Container>
            <p> </p>
            Colors:
            <ol>
                <li>Green</li>
                <li>Blue</li>
                <li>Red</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p> </p>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
