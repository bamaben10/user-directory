import React from 'react';

const Card = () => {
    return (
        <div className="item-card">
            <div className="item-card-left">
                <h1>Marion Santori</h1>
                <p>From: Liverpool, United Kingdom</p>
                <p>Job Title: Research Associate</p>
                <p>Employer: Skinix</p>
                <div>
                    <p>Favorite Movies</p>
                    <ul>
                        <li>1. Fathom</li>
                        <li>2. Strange Magic</li>
                        <li>3. Martian Child</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;