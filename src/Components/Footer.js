import React from 'react';
import './Footer.css'

export default class Footer extends React.Component{
    render(){
        const {myFooter}=this.props
        return(
            <footer>
                {myFooter}
            </footer>
        )

    }
}