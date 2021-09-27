import React, { useContext, useEffect, useState } from 'react'
import { HeroesContext } from '../../context/heroes/HeroesContext'
import { ModalContext } from '../../context/modal/ModalContext';
import { types } from '../../types/types';

export const HeroCard = ({hero}) => {

    const { myTeam, dispatch } = useContext(HeroesContext);
    const {setHero, isChangeModal} = useContext(ModalContext)

    const moreStats = () => {
        isChangeModal()
        setHero(hero)
    }

    const [message, setMessage] = useState("");

    const { heroes, alignment } = myTeam;

    const { biography } = hero;

    const addHero = () => {
        dispatch({type: types.add_team, payload: hero})
    }

    const removeHero = () => {
        dispatch({type: types.remove_team, payload: hero})
    }

    useEffect(() => {
        if(heroes.length === 6){
            return setMessage("Full team")
        }
        if(biography.alignment === "bad" && alignment.bad === 3){
            return setMessage("Complete bad heroes")
        }
        if(biography.alignment === "good" && alignment.good === 3){
            return setMessage("Complete good heroes")
        }
        setMessage("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myTeam])

    return (
        <div className="hero-card-search">
            <h1>{hero.name}</h1>
            <img src={hero.image.url} alt={hero.name}/>
            {
                heroes.some( heroP => heroP.id === hero.id) ?
                <button className="btn-primary btn-warning"  onClick={removeHero}>
                    Remove hero
                </button>
                :
                <button className="btn-primary" onClick={addHero} disabled={message === "" ? false : true}>
                    {message === "" ? "Add my team" : message}
                </button>
            }
            <button className="btn-secondary" onClick={moreStats}>View more</button>
        </div>
    )
}
