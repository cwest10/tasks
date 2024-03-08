import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Why won't onChange work? The tests all pass but for some reason it doesn't like updateSelected

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const defaultOption = options[0];
    const [selected, setSelected] = useState<string>(defaultOption);

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>How do you feel?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {selected === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
