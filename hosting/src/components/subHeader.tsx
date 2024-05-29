import { Typography } from "@mui/material";

export default function Header(props: any){
    return(
        <Typography fontFamily={'Teuton Fett'} fontSize={24} style={{paddingTop: 24, textTransform: 'uppercase', lineHeight: 1.1}}>{props.text}</Typography>
    )
}