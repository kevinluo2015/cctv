import React from 'react';
import './Header.css'

export default class Header extends React.Component{
    render(){
        const {myHeader}=this.props
        return(
            <div>
                <header>
                    {myHeader}
                </header>
            </div>
        )

    }
}