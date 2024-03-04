import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setNumberAttempts] = useState<number>(4);
    const [progress, changeProgress] = useState<boolean>(false);

    function start(): void {
        changeProgress(true);
        setNumberAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <Button onClick={start} disabled={progress || attempts < 1}>
                    Start Quiz
                </Button>
                <Button
                    onClick={() => changeProgress(false)}
                    disabled={!progress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setNumberAttempts(attempts + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <span> {attempts} Attempts Remaining </span>
            </div>
        </div>
    );
}
