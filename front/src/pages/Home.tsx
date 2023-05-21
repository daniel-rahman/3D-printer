import React, { useState, Fragment, useEffect } from 'react'
import { Bar, Item, NewJob } from '../components'
import styled from 'styled-components';
import { useFetch } from "../hooks"

const StyledItems = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`

const ITEMS = [{ name: "d1", duration:"123"},{ name: "d2", duration:"123"}]

interface ItemProps {
    name: string;
    duration: string;
}
export const Home = () => {
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [items, setItems] = useState<ItemProps[]>()
    const { sendRequest } = useFetch()

    const handleShowPopupClick = (val: boolean) => {
        setIsShowPopup(val)
    };

    useEffect(() => {

        const getJobs = async () => {
            const data = await sendRequest({
                params: {},
                method: 'GET',
                type: "BASE",
            });
            setItems(ITEMS)
            //setItems(data)
        }
        getJobs();
    }, [])

    const updateJobsList = (name:string) => {
        const updatedItems= items?.filter(item => item.name !== name)
        setItems(updatedItems)
    }

    return (
        <Fragment>
            <Bar caption={"Queue"} showBtn={true} handleShowPopupClick={handleShowPopupClick} />
            <StyledItems>
                {items && items.map((data) => (<Item key={data.name} name={data.name} duration={data.duration} update={updateJobsList} />))}
            </StyledItems>
            {isShowPopup && < NewJob handleShowPopupClick={handleShowPopupClick} />}
        </Fragment>
    )
}
