import React from 'react'
import { useContext } from 'react';
import { HeroesContext } from '../../../context/heroes/HeroesContext';
import { StatCircle } from './StatCircle';
import { StatPromedy } from './StatPromedy';

export const StatsTeam = () => {

    const { myTeam } = useContext(HeroesContext)
    const { height, weight } = myTeam.appearance;

    const powerStatsSort = myTeam.powerstats.sort((a, b) => b.value - a.value)

    return (
        <div className="stats-team_screen">
            <h1>Stats <span className="fw-400">team</span></h1>
            <div className="stats-team_grid">
                {powerStatsSort.map( (powerstat, index) => (
                    <StatCircle key={index} property={{value: powerstat.value, name: powerstat.power}} />
                ))}
                <div className="progress-circle_container">
                    <StatPromedy value={height} unit={"cm"} title={"Height promedy"}/>
                    <StatPromedy value={weight} unit={"kg"} title={"Weight promedy"}/>
                </div>
            </div>
        </div>
    )
}