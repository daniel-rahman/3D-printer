import React, { useState } from 'react';
import style from "../assets/styles/NavBar.module.css";
import { NewJob, Button } from '.' // './index'

interface BarProps {
    caption: string;
    showBtn: boolean;
    handleShowPopupClick: (val: boolean) => void;
}

const Bar: React.FC<BarProps> = ({ caption, showBtn , handleShowPopupClick }) => {
     return (
        <div className={style.Bar}>
            <h4>{caption}</h4>
            {showBtn && <Button onClick={handleShowPopupClick}>Add a job</Button>}
        </div>
    )
}

export default Bar;
