import {Card, CardMedia, CardContent, CardActions,Box, Typography, Button, CardActionArea, IconButton} from "@mui/material"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import dateFormat from 'dateformat';

export default function LaunchCard({launch}) {
    const app = useContext(AppContext)

    const launchFromFavorite = app.getLaunchFromFavorite(launch.id)
   
    return (
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea
            component={NavLink} to={`/launches/${launch.id}`}
            launch={launch}>
            <CardMedia            
                height="150"
                component="img"        
                image={launch.links?.flickr_images.length > 0 ? launch.links?.flickr_images[0] : launch.links.mission_patch}
                alt="SpaceX Launch"
            />     
        </CardActionArea>     
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: "space-between", paddingBottom: "10"}}>
                <Typography variant="p" >{dateFormat(launch.launch_date_local, "dd.mm.yyyy")}</Typography>
                <Typography variant="p">{launch.id}</Typography>
            </Box>
            <Typography variant="h5" padding="10px 0">
                {launch.mission_name}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
                {launch.launch_site.site_name_long}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton onClick={() => {app.onStarButton(launch)}}>
                {launchFromFavorite ? <StarIcon color="warning" /> : <StarBorderIcon />}                
            </IconButton>                          
            <Button launch={launch} component={NavLink} to={`/launches/${launch.id}`} size="medium">Detail</Button>
        </CardActions>
      </Card>
    );
}