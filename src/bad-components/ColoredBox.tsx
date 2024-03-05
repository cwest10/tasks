import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    const COLORS = ["red", "blue", "green"];

    function getNextIndex(): void {
        if (colorIndex === 2) {
            setColorIndex(0);
        } else {
            setColorIndex(colorIndex + 1);
        }
    }

    function ChangeColor(): JSX.Element {
        return <Button onClick={getNextIndex}>Next Color</Button>;
    }

    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }

    console.log("Current Color: " + COLORS[colorIndex]);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}

// function ChangeColor(): JSX.Element {
//     const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
//     return (
//         <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
//             Next Color
//         </Button>
//     );
// }

// function ColorPreview(): JSX.Element {
//     return (
//         <div
//             data-testid="colored-box"
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
//                 display: "inline-block",
//                 verticalAlign: "bottom",
//                 marginLeft: "5px"
//             }}
//         ></div>
//     );
// }

// export function ColoredBox(): JSX.Element {
//     return (
//         <div>
//             <h3>Colored Box</h3>
//             <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
//             <div>
//                 <ChangeColor></ChangeColor>
//                 <ColorPreview></ColorPreview>
//             </div>
//         </div>
//     );
// }
