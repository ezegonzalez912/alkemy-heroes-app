import { createContext, useReducer } from "react";
import { heroesReducer } from "./heroesReducer";
import { initialHeroes } from "./initHeroes";

export const HeroesContext = createContext();

export const HeroesProvider = ({children}) => {
    
    const [myTeam, dispatch] = useReducer(heroesReducer, initialHeroes)

    const heroInTeam = (hero) => {
        return myTeam.heroes.includes(hero)
    }

    const data = {
        myTeam,
        dispatch,
        heroInTeam
    }

    return (
        <HeroesContext.Provider value={data}>
            {children}
        </HeroesContext.Provider>
    )
}