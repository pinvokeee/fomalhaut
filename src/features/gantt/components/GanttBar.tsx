import { Box, styled } from "@mui/material"
import { useEffect } from "react";

const YearMonth = styled("div")(({theme}) => ({
    position: "sticky",
    backgroundColor: "white",
    // display: "inline-block",
    left: "0px"
}));

export const GanttBar = () => {
    
}

const getDatesBlockArray = (startDate: Date, dayAmount: number) => {

    const dates: Date[][] = [];
    const datePos = new Date(startDate);
    let lastMonth = -1;

    for (let i = 0; i < dayAmount; i++) {
        datePos.setDate(datePos.getDate() + 1);
        
        if (datePos.getMonth() != lastMonth) dates.push([]);
        dates[dates.length - 1].push(new Date(datePos));

        lastMonth = datePos.getMonth();
    }

    return dates;
}

export const GanttDateRow = (props: { startDate: Date, }) => {
    
    const elWidth = 64;
    const { startDate } = props;
    const dates = getDatesBlockArray(startDate, 100);

    return <>
        <Box sx={{ display: "flex", flexDirection: "column", width: "fit-content"}}>
            <Box sx={{ display: "flex", flexShrink: "0", width: "100%" }}>
                {
                    dates.map(block => {
                        return <YearMonth sx={{ flexShrink: "0", width: `${block.length * elWidth}px` }}>{`${block[0].getFullYear()}/${block[0].getMonth()+1}`}</YearMonth>
                    })
                }  
            </Box>
            <Box sx={{ display: "flex", flexShrink: "0", width: "100%" }}>
                {
                    dates.map(block => {
                        return <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {
                                block.map(dt => {
                                    return <Box sx={{ minWidth: `${elWidth}px`, textAlign: "left", }}>{`${dt.getDate()}`}</Box>;
                                })
                            }
                        </Box>
                    })
                }
            </Box>
        </Box>
    </>

}

export const GanttRow = () => {

}

export const GanttContainer = () => {

    const startDate = new Date();


    return <>
        <Box sx={{ width: "100%", height: "100%" }}>
            <GanttDateRow startDate={startDate} />
        </Box>

    </>

}