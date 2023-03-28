import React,{ useState, useEffect } from 'react'
import Header from '../components/header/header'
import './teams.css';


const Teams = () => {
 
    return (
        <div className="teams">
            <Header />
            <div className="teams_container_header">
                <h1>Teams</h1>
            </div>
            <div className="teams__content">
                <div className="teams_list">

                        <div className="teams_list__item" >
                            <div className="country">
                               
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Teams
