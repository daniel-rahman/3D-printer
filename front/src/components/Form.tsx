import React, { useState } from 'react';
import { Button } from '.' // './index'
import { DisplayFlex, FormStyle, NameInputStyle, PrinterOperatorSelectStyle } from '../assets/styles/Form';
import { useFetch } from "../hooks"

interface FormData {
    name: string;
    printerOperator: string;
    isPriorityJob: boolean;
}

interface FormProps {
    onClick: (val: boolean) => void;
}

const Form: React.FC<FormProps> = ({ onClick }) => {
    const { sendRequest } = useFetch()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        printerOperator: '',
        isPriorityJob: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? (checked as boolean) : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);


        const SaveJob = async () => {
            const data = await sendRequest({
                params: formData,
                method: 'POST',
                type: "BASE",
            });
            onClick(false)
        }
        SaveJob()
    };

    return (
        <FormStyle onSubmit={handleSubmit}>
            <h4>Job Details</h4>
            <DisplayFlex>
                <label htmlFor="name">Name</label>
                <NameInputStyle type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </DisplayFlex>
            <DisplayFlex>
                <label htmlFor="printerOperator">Printer Operator</label>
                <PrinterOperatorSelectStyle id="printerOperator" name="printerOperator" value={formData.printerOperator} onChange={handleInputChange}>
                    <option value="">Select an operator...</option>
                    <option value="Operator 1">Operator 1</option>
                    <option value="Operator 2">Operator 2</option>
                    <option value="Operator 3">Operator 3</option>
                </PrinterOperatorSelectStyle>
            </DisplayFlex>
            <div>
                <label htmlFor="priorityJob">
                    <input type="checkbox" id="priorityJob" name="isPriorityJob" checked={formData.isPriorityJob} onChange={handleInputChange} />
                    Priority Job
                </label>
            </div>
            <Button onClick={() => onClick(false)} styleType={"Cancel"}>Cancel</Button>
            <Button onClick={() => handleSubmit} styleType={"Save"} >Save</Button>
        </FormStyle>
    );
};

export default Form;