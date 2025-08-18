import React from 'react'

function hero({ heroName }) {
    if (heroName === 'joker') {
        throw new Error("not a hero");
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default hero
