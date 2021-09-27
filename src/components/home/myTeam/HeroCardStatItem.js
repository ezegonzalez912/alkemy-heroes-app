import React from 'react'
import { Line } from 'rc-progress';

export const HeroCardStatItem = ({value, title}) => {
    return (
        <div className="hero-stats-list_item" title={value}>
            <p>{title}</p>
            <Line percent={value} strokeWidth="10" trailWidth="10" strokeColor="#4C22B0" />
        </div>
    )
}
