import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
    const [star, setStar] = useState(false)
    const [favoriteLaunch, setFavoriteLaunch] = useState([])

    const handleStarButton = (newLaunch) => {
        const existingLaunch = favoriteLaunch.find(fav => fav.id === newLaunch.id);
        
        if(existingLaunch) {
            const updatedLaunch = favoriteLaunch.filter(fav=> fav.id !== newLaunch.id)
            setStar(star)
            setFavoriteLaunch(updatedLaunch)
        } else {
            setFavoriteLaunch([...favoriteLaunch, {...newLaunch, favorite: true}])
            setStar(!star)
        }                                    
    }

    const getLaunchFromFavorite = (launchId) => {
        return favoriteLaunch.find(fav => fav.id === launchId);
    }
   
    const value = {
        star,
        favoriteLaunch,
        onStarButton: handleStarButton,
        getLaunchFromFavorite
    }
     
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}