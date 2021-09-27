import React from 'react'
import { HeroCardStatItem } from './HeroCardStatItem';

export const HeroStatsList = ({powerstats}) => {

    const {combat, durability, intelligence, power, speed, strength} = powerstats;

    return (
        <div className="hero-stats-list">
            <HeroCardStatItem value={combat} title={"Combat"}/>
            <HeroCardStatItem value={durability} title={"Durability"}/>
            <HeroCardStatItem value={intelligence} title={"Intelligence"}/>
            <HeroCardStatItem value={power} title={"Power"}/>
            <HeroCardStatItem value={speed} title={"Speed"}/>
            <HeroCardStatItem value={strength} title={"Strength"}/>
        </div>
    )
}

