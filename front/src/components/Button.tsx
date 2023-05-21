import React from 'react'
import { StyledButton } from '../assets/styles/Button'

interface ButtonProps {
    onClick: (val: boolean) => void;
    disabled?: boolean;
    children: React.ReactNode;
    styleType?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, styleType = "default" }) => {
    return (
        <StyledButton color={styleType} onClick={() => onClick(true)} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;
