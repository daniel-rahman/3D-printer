import Rect from "react"
import styleCss from "../assets/styles/Item.module.css";
import { FlexRowCenter, FlexColumnCenter, StyledItem, StyledItemImage, StyledIcon, StyledTimerIcon, StyledUserIcon } from "../assets/styles/Item"
import { ItemImgSrc, DeleteImgSrc, CopyImgSrc, LeftArrow } from "../assets/images"
import { useFetch } from "../hooks"

interface NewJobProps {
    name: string;
    duration: string;
    update: (name: string) => void
}

const Item: Rect.FC<NewJobProps> = ({ name, duration, update }) => {
    const { sendRequest } = useFetch()

    const DeleteJob = async () => {
        const data = await sendRequest({
            params: { name: name },
            method: 'DELETE',
            type: "BASE",
        });
        update(name)
    }

    const MoveJob = async (isMove: boolean) => {
        const data = await sendRequest({
            params: { name: name,up:isMove },
            method: 'POST',
            type: "MOVE",
        });

        //need to do update item array
        //update()
    }

    return (
        <StyledItem>
            <FlexColumnCenter style={{ width: "50px", borderRight: " 1px solid rgb(0, 58, 93)" }}>
                <div onClick={() => MoveJob(true)} className={styleCss.flexGrow} style={{ borderBottom: "1px solid #003A5D", flexGrow: 1 }}></div>
                <div onClick={() => MoveJob(false)} style={{ flexGrow: 1 }}></div>
            </FlexColumnCenter>
            <StyledItemImage src={ItemImgSrc} />
            <FlexColumnCenter className={styleCss.flexGrow} >
                <h3 style={{ margin: "5px" }}>{name}</h3>
                <FlexRowCenter>
                    <StyledTimerIcon>{duration}</StyledTimerIcon>
                    <StyledUserIcon>Stanyslav Polotovsky</StyledUserIcon>
                </FlexRowCenter>
            </FlexColumnCenter>
            <StyledIcon src={DeleteImgSrc} onClick={DeleteJob} />
            <StyledIcon src={CopyImgSrc} />
            <StyledIcon src={LeftArrow} />
        </StyledItem >
    )
}

export default Item
