import React, { Fragment } from 'react'
import { Cancel } from "../assets/images"
import { Button, Form } from '.' // './index'
import { StylePositionAbs, StyleParentElm, StylePopupElm, StylePopupHaderElm, StyleImgCancel } from '../assets/styles/NewJob'
//import Form from './Form';

interface NewJobProps {
    handleShowPopupClick: (val: boolean) => void;
}

//Job Details

//Name -- Type a name for this job...
//Printer Operator -- Select a Printer Operator...
//Priority job

//Job Preferences

//Surface Finish  -- 
//Vivid Materials
//Strength
//Material in support


// Cancel -- Save

const NewJob: React.FC<NewJobProps> = ({ handleShowPopupClick }) => {
    return (
        <StylePositionAbs>
            <StyleParentElm />
            <StylePopupElm >
                <StylePopupHaderElm>
                    New job
                    <StyleImgCancel src={Cancel} onClick={() => handleShowPopupClick(false)} />
                </StylePopupHaderElm>
                <div style={{ flexGrow: "1" }}>
                    <Form onClick={() => handleShowPopupClick(false)} />
                    {/* <Button onClick={() => handleShowPopupClick(false)} styleType={"Cancel"}>Cancel</Button>
                    <Button onClick={() => handleShowPopupClick(false)} styleType={"Save"} >Save</Button> */}
                </div>
            </StylePopupElm>
        </StylePositionAbs>
    )
}

export default NewJob
