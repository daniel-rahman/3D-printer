import styled, { css } from 'styled-components';

export const StylePositionAbs = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const StyleParentElm = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: #000000;
    opacity: 0.8;
`
export const StylePopupElm = styled.div`
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 10px);
    background: rgb(255, 255, 255);
    border-radius: 4px;
    width: 600px;
    height: 462px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`

export const StylePopupHaderElm = styled.div`
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 10px);
    background: rgb(0, 58, 93);
    height: 50px;
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-align: left;
    line-height: 50px;
    padding: 0px 10px;
`

export const StyleImgCancel = styled.img`
    position: absolute; 
    right: 10px; 
    top: 18px;
`
