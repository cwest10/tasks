import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieL, changeValueL] = useState<number>(1);
    const [dieR, changeValueR] = useState<number>(6);

    function rollL(): void {
        // const newRoll = d6();
        // changeValueL(newRoll);
        changeValueL(d6());
    }

    function rollR(): void {
        // const newRoll = d6();
        // changeValueR(newRoll);
        changeValueR(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={rollL}>Roll Left Die</Button>
                <Button onClick={rollR}>Roll Right Die</Button>
            </div>
            <div>
                Left Die: <span data-testid="left-die">{dieL}</span>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{dieR}</span>
            </div>
            <div>
                {dieL === 1 && dieR === 1 ? (
                    <span>Lose</span>
                ) : dieL === dieR && dieL !== 1 && dieR !== 1 ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
