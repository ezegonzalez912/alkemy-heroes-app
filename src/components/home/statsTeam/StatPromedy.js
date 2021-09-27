import { useContext } from "react"
import { HeroesContext } from "../../../context/heroes/HeroesContext"

export const StatPromedy = ({value, unit, title}) => {

    const { myTeam } = useContext(HeroesContext)

    const promedy = (value) => parseInt(value / myTeam.heroes.length)

    return (
        <>
            <p>{title}</p>
            <h2 className="c-primary">{promedy(value) ? promedy(value) : 0} {unit}</h2>
        </>
    )
}