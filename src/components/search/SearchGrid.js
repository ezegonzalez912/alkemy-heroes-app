import React from 'react'
import { HeroCard } from './HeroCard'

export const SearchGrid = ({heroes, load}) => {

    if(load){
        return <div className='spinner' />
    }

    return (
        <div className="search_grid">
            {
                heroes ? heroes.map( hero => (
                    (hero.powerstats.intelligence !== "null") && 
                    <HeroCard key={hero.id} hero={hero} />
                ))
                : <p>No results found.</p>
            }
        </div>
    )
}
