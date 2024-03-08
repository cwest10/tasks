import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// What is /13/i and why won't that test pass?

export function GiveAttempts(): JSX.Element {
    const [numAttemptsLeft, setNumAttemptsLeft] = useState<number>(3);
    const [numAttemptsRequest, setNumAttemptsRequest] = useState<number>(0);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setNumAttemptsRequest(parseInt(event.target.value));
        }
        // setNumAttemptsLeft(
        //     parseInt(numAttemptsRequest) + numAttemptsLeft || numAttemptsLeft
        // );
    }

    function use() {
        setNumAttemptsLeft(numAttemptsLeft - 1);
    }

    function gain() {
        setNumAttemptsLeft(numAttemptsLeft + numAttemptsRequest);
    }

    return (
        <div>
            <Form.Group controlId="formNumAttempts">
                <Form.Label>Requested Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numAttemptsRequest}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <Button onClick={use} disabled={numAttemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
            <div>Number of Attempts Left: {numAttemptsLeft}</div>
        </div>
    );
}
