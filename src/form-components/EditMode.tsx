import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function editMode(): JSX.Element {
        return (
            <Form.Group controlId="editMode">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="string"
                    value={name}
                    onChange={updateName}
                />
            </Form.Group>
        );
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="inEditMode-check"
                    label="Edit Mode:"
                    checked={inEditMode}
                    onChange={updateEditMode}
                />
                <div>
                    The user is{" "}
                    {inEditMode ? " in Edit Mode" : " not in Edit Mode"}.{" "}
                </div>
                {inEditMode ? editMode : ""}
            </div>
            {inEditMode ? (
                <Form.Group controlId="editName">
                    <Form.Label>New Name:</Form.Label>
                    <Form.Control
                        type="string"
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            ) : (
                ""
            )}
            {inEditMode ? (
                <Form.Check
                    type="checkbox"
                    id="isStudent-check"
                    label="Are you a Student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            ) : (
                <div>
                    {name} {isStudent ? "is" : "is not"} a student.
                </div>
            )}
        </div>
    );
}
