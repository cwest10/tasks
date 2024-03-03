import React from "react";
import "./App.css";
<<<<<<< HEAD
import logo from "./Images/Logo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <img src={logo} alt="UD's Logo" />
                <h2>Connor Westerman</h2>
            </header>
<<<<<<< HEAD
            <p> </p>
            <Container>
                <Row>
                    <Col>
                        <div className="App-column">Hello World</div>
                    </Col>
                    <Col>
                        <div className="App-column">Goodbye World</div>
                    </Col>
                </Row>
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
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
