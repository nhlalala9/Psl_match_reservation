import React from 'react'
import Header from '../components/header/header'
import './matches.css';

function Matches() {
    return (
        <div className="matches">
            <Header />
            <div className="matches_container">
                <div className="matches_container_header">
                    <h1>Matches</h1>
                </div>
            </div>
        </div>
    )
}

export default Matches
