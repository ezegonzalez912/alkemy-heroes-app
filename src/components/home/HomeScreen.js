import React from 'react'
import { MyTeam } from './myTeam/MyTeam'
import { StatsTeam } from './statsTeam/StatsTeam'

export const HomeScreen = () => {
    
    return (
        <div className="home_screen">
            <MyTeam />
            <StatsTeam />
        </div>
    )
}
