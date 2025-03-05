import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormPropsType } from "../types/types";

const CustomForm: React.FC<FormPropsType> = ({ id,value, handleInputChange, isLoading, onLoadIssues }) => {
    return (
        <InputGroup className="mb-3">
            <Form.Control
                id={id}
                placeholder="Enter GitHub Repo URL"
                value={value}
                onChange={handleInputChange}
            />
            <Button onClick={onLoadIssues} variant="outline-secondary" disabled={isLoading}>
                {isLoading ? "Loading..." : "Load"}
            </Button>
        </InputGroup>
    );
};

export default CustomForm;