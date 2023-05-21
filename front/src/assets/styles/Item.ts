import styled from 'styled-components';
import {Timer, User} from "../images"


export const StyledItem = styled.div`
    width: 728px;
    height: 96px;
    background: #F7F9FC;
    border: 1px solid #003A5D;
    border-radius: 8px;
    display: flex;
    flexDirection: row;
    flexWrap: nowrap;
    margin:6px;
`

export const StyledItemImage = styled.img`
  margin:0px 10px;
`;

export const StyledIcon = styled.img`
  margin: 10px;
`;

export const StyledTimerIcon = styled.div`
  margin: 5px;
  height:20px;
  width:75px;
  text-align: right;
  background-image: url(${Timer});
  background-position:0px center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
`;

export const StyledUserIcon = styled.div`
  margin: 5px;
  height:20px;
  width:170px;
  text-align: right;
  background-image: url(${User});
  background-position:0px center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
`;

export const FlexRowCenter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`;

export const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    justify-content: center;
`;
