import { NavLink} from "react-router-dom"
import {AppBar, Toolbar, Box, Button, Typography} from "@mui/material" 

export default function Header() {
    return (
        <AppBar sx={{background: "#e2e2e2"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Button component={NavLink} to="/" sx={{color: "black"}}>
                    <Typography variant="h5">SpaceX Launches</Typography>
                </Button>                
                <Box className="nav-links" sx={{mr: 3}}>                   
                    <Button component={NavLink} to="/">
                        Home
                    </Button>
                    <Button component={NavLink} to="/favorites">
                        Favorites
                    </Button>                    
                </Box>
            </Toolbar>
        </AppBar>
    )
}