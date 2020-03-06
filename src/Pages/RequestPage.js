import React from 'react';
import {bindActionCreators} from 'redux';
import {actions}  from '../Redux/RequestPage';//need to update 
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Detail from '../Components/Details'

class RequestPage extends React.Component{//need to update 
    constructor(props){
        super(props)
        this.state={
            open:false,
            itemdata:null,
        }
    }
    onRowDoubleClick(row) {
       this.setState({
           open:true,
           itemdata:row,
        })
      }
    handleClose(){
        this.setState({
            open:false,
            itemdata:null,
        })
    }
    render(){

        var data = [{
            ID: 1,
            Requestor: "Kevin",
            "request-type":"New Card",
            "card-type":"Employee",
            "business-unit": "Tech",
            "request-status":"Pending for Action",
            "test":"test",
            "RegisterTime":"2020-03-06 10:01:00"
        }]
        const options = {
            onRowDoubleClick: this.onRowDoubleClick.bind(this)
          };
        function cellformat(cell,row){
            return (
                <div style={{fontSize:10}}>
                    {cell}
                </div>
            )
        }
        return(
           <Grid container>
               <Grid item xs={12}>
                    <div style={{textAlign:"left",marginTop:15,marginLeft:20}}>
                        <ListAltIcon style={{marginBottom:10,marginRight:20}}/><label><h4>Access Card Requests</h4></label>
                    </div>
                    <hr></hr>
               </Grid>
               <Grid item xs={1}></Grid>
               <Grid item xs={10}>
                    <Detail itemdata={this.state.itemdata} open={this.state.open} onClose={this.handleClose.bind(this)}/>
                    <BootstrapTable data={data} options ={options} search hover pagination >
                        <TableHeaderColumn isKey dataField='ID' width='50px' dataSort={ true } dataFormat={cellformat}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='RegisterTime' width="140px" dataFormat={cellformat}>Register Time</TableHeaderColumn>
                        <TableHeaderColumn dataField='CardNO_CardDB' width="100px" dataFormat={cellformat}>Card NO.</TableHeaderColumn>
                        <TableHeaderColumn dataField='requestor-name' width="150px" dataFormat={cellformat}>Requestor Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='business-unit' width="120px" dataFormat={cellformat}>Busines Unit</TableHeaderColumn>
                        <TableHeaderColumn dataField='request-type'width="120px" dataFormat={cellformat}>Request Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='card-type'width="100px" dataFormat={cellformat}>Card Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='request-status' width="110px" dataFormat={cellformat}>Status</TableHeaderColumn>
                    </BootstrapTable>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.RequestPage
    //need to update 
}
const mapDispatchToProps=(dispatch)=>{
    return {
        action:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RequestPage)//need to update 