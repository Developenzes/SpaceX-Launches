import {useLaunchDetailsQuery} from "../generated/types"
import { useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import {Box, Typography, Link, IconButton} from "@mui/material"
import { List, ListItem } from "@material-ui/core";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function LaunchDetailPage() {
    const params = useParams()
    const app = useContext(AppContext)

    const[result] = useLaunchDetailsQuery({
        variables: {
            id: params.id
        }
    });

    const {data, fetching, error} = result;
   
    if(fetching) return <div>Loading...</div>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>No data</div>

    const sourceForVideo = data.launch.links.video_link
    const lastBit = sourceForVideo.substring(sourceForVideo.lastIndexOf('/'));
    
    const launchFromFavorite = app.getLaunchFromFavorite(data.launch.id)

    return (<>
        <Box display="flex" alignItems="center">
            <Typography variant="h4">{data.launch.id}</Typography>
            <IconButton onClick={() => {app.onStarButton(data.launch)}}>
                {launchFromFavorite ? <StarIcon sx={{fontSize: 30}} color="warning" /> : <StarBorderIcon sx={{fontSize: 30}}/>}              
            </IconButton> 
        </Box>        
        <Box className="details-container">              
            <Box className="details-content">
                <Box className="details-data">
                    <Typography marginBottom="15px" variant="h4">{data.launch.mission_name}</Typography>
                    {data.launch.details ? <Typography variant="p" className="details-description">{data.launch.details} </Typography> : "Description is missing"}
                    
                    {data.launch.links.article_link && <Link href={data.launch.links.article_link} underline="hover" target="_blank" rel="noopener">See the article about this launch</Link>}
                    
                </Box>
                <Box className="rocket-box">
                    <Typography variant="h6">Data about the rocket</Typography>
                    <List>
                        <ListItem>Rocket name: {data.launch.rocket.rocket_name}</ListItem>
                        <ListItem>Rocket type: {data.launch.rocket.rocket_type}</ListItem>
                        <ListItem>Description: {data.launch.rocket.rocket.description}</ListItem>
                        <ListItem>Diameter: {data.launch.rocket.rocket.diameter.meters} m</ListItem>
                        <ListItem>Height: {data.launch.rocket.rocket.height.meters} m</ListItem>
                    </List>
                </Box>               
            </Box>                    
            <Box className="video" >                                     
                <iframe src={`https://www.youtube.com/embed/${lastBit}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                           
            </Box>
        </Box>       
        </>
    );
}