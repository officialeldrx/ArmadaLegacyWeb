import {ListItem, Avatar, ListItemText, ListItemButton, ListItemIcon} from '@mui/material'
import * as Icons from '@mui/icons-material'

export default function LoggedIn(){
    return(
        <>
            <ListItem>
                <Avatar style={{width: 34, height: 34, margin: '0px 11px'}}></Avatar>
                <ListItemText disableTypography={true} sx={{fontFamily: 'Teuton Fett', fontSize: 24, marginTop: 1}}>Sign In</ListItemText>
            </ListItem>

            <ListItemButton>
                <ListItemIcon sx={{color: '#1A7298', justifyContent: 'center'}}><Icons.Diamond/></ListItemIcon>
                <ListItemText disableTypography={true} sx={{fontFamily: 'Teuton Fett', fontSize: 24, marginTop: 1, color: '#1A7298'}}>Get Premium</ListItemText>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{justifyContent: 'center'}}><Icons.Person/></ListItemIcon>
                <ListItemText disableTypography={true} sx={{fontFamily: 'Teuton Fett', fontSize: 24, marginTop: 1}}>Manage Account</ListItemText>
            </ListItemButton>

            <ListItemButton sx={{left: 0, right: 0, bottom: 8, position: 'absolute'}}>
                <ListItemIcon sx={{color: '#E23333', justifyContent: 'center'}}><Icons.Logout/></ListItemIcon>
                <ListItemText disableTypography={true} sx={{fontFamily: 'Teuton Fett', fontSize: 24, marginTop: 1, color: '#E23333'}}>Logout</ListItemText>
            </ListItemButton>
        </>
    )
}