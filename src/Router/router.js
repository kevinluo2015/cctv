import React from 'react';
import {Route} from 'react-router-dom';

import CommPage from '../Pages/CommPage'
import RequestPage from '../Pages/RequestPage';


export default class Router extends React.Component{

    render(){
        return (
            <div>
                <Route  exact path='/CommPage' component={CommPage}/>
                <Route  exact path='/Requests' component={RequestPage}/>
            </div>
        )
    }
}