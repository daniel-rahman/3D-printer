import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
   
position:absolute;
right: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 150%;
margin-right: 10px;
/* identical to box height, or 27px */

margin-right: 10px;display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

/* neutral/white */
color: #FFFFFF;
border-radius: 3px;
box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);

${props =>
    props.color === 'default' && css`
        background: #00A1E0;
`}

${props =>
    props.color === 'Cancel' && css`
        right: 80px;
        bottom: 10px;
        background: #FFFFFF;
        border: 1px solid #CCCCCC;  
        color: #333333;       
`}

${props =>
  props.color === 'Save' && css`
      bottom: 10px; 
      background: #00A1E0;
`}

&:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
`;
