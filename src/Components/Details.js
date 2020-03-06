import React from 'react';
import './Footer.css'
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  });
  
export default function Detail(props){
    const classes = useStyles();
    const { onClose, open ,itemdata } = props;
    const handleClose = () => {
        onClose();
      };
    function getdetail(){
        var detail=[]
        if (itemdata ==null ) return null
        for (var field in itemdata){
            detail.push(
                itemdata[field]
            )
        }
        return detail
    }
    var itemDetail =getdetail()
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Detail for Request {itemdata==null?"":itemdata.ID}</DialogTitle>
        <div>
            {itemDetail}
        </div>
        </Dialog>
    )
}
Detail.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    itemdata: PropTypes.string.isRequired,
  };
