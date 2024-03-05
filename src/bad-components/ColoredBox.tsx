import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Gotta use Props and Interface
// EX) changeColor({colorIndex, setColorIndex}: valueProps)

interface ColoredBoxProps {
    colorIndex: number;
    setColorIndex: (expression: number) => void;
}

export const COLORS = ["red", "blue", "green"];

function ChangeColor(props: ColoredBoxProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                props.setColorIndex((1 + props.colorIndex) % COLORS.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview(props: ColoredBoxProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    console.log("Current Color: " + COLORS[colorIndex]);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
