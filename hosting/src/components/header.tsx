import { Typography } from "@mui/material";

export default function Header(props: any){
    return(
        <div style={{marginTop: '32px', borderTop: '2px solid #24408F', borderBottom: '2px solid #24408F', padding: '1px 0px'}}>
            <Typography fontFamily={'Trajan Pro'} fontSize={24} textAlign={"center"} style={{color: '#24408F', textTransform: 'uppercase', borderTop: '1px solid #24408F', borderBottom: '1px solid #24408F', paddingTop: '4px'}}>{props.text}</Typography>
        </div>
    )
}