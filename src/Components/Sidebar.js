import React from 'react';
import './Sidebar.css'
import Link from 'react-router-dom/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
export default class Sidebar extends React.Component{
    render(){
        return(
            <div style={{minHeight:600}}>
            <List>
              <Divider/>
              <Link color="inherit" to="/Requests" className="Linksider">
                <ListItem button>
                  <ListItemIcon><ListAltIcon/></ListItemIcon>
                  <ListItemText primary={"Requests"} />
                </ListItem>
              </Link>
              <Divider/>
              <Link color="inherit" to="/Employee/Shift&Trans" className="Linksider">
              <ListItem button>
                <ListItemIcon><ShowChartIcon/></ListItemIcon>
                <ListItemText primary={"Reports"} />
              </ListItem>
              </Link>
              <Divider/>
              <Link color="inherit" to="/Employee/SeperateMeal" className="Linksider">
              <ListItem button>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary={"Card Operation"} />
              </ListItem>
              </Link>
              <Divider/>
          </List>

            </div>

        )
    }
}