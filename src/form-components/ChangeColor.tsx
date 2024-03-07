import React, { useState } from "react";
import { Form } from "react-bootstrap";

//How to get the background colors on the names?

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h2>Change Color</h2>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="red"
                    label="red"
                    value="Red"
                    checked={color === "Red"}
                    style={{ backgroundColor: "red" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="blue"
                    label="blue"
                    value="Blue"
                    checked={color === "blue"}
                    style={{ backgroundColor: "blue" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="green"
                    label="green"
                    value="Green"
                    checked={color === "Green"}
                    style={{ backgroundColor: "green" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="orange"
                    label="orange"
                    value="Orange"
                    checked={color === "Orange"}
                    style={{ backgroundColor: "orange" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="white"
                    label="white"
                    value="White"
                    checked={color === "White"}
                    style={{ backgroundColor: "white" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="yellow"
                    label="yellow"
                    value="Yellow"
                    checked={color === "Yellow"}
                    style={{ backgroundColor: "yellow" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="cyan"
                    label="cyan"
                    value="Cyan"
                    checked={color === "Cyan"}
                    style={{ backgroundColor: "cyan" }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="purple"
                    label="purple"
                    value="Purple"
                    checked={color === "Purple"}
                    style={{ backgroundColor: "purple" }}
                />
                <div>
                    Current Color is:
                    <span
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                </div>
            </div>
        </div>
    );
}
