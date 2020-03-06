import React from 'react';
import {bindActionCreators} from 'redux';
import {actions}  from '../Redux/CommPage';//need to update 
import {connect} from 'react-redux';


class CommPage extends React.Component{//need to update 

    render(){
        return(
           <div>commPage</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.CommPage
    //need to update 
}
const mapDispatchToProps=(dispatch)=>{
    return {
        action:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommPage)//need to update 