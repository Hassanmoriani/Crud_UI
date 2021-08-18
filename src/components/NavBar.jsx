import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import {NavLink } from 'react-router-dom';

const useStyle =makeStyles({
    
    links:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20         

    }
})


const NavBar =()=>{
    const classes =useStyle();
return(
        <AppBar  style={{position:'initial'}}> 
            <Toolbar>
                <NavLink style={{textDecoration:'none',margin:'20px',color:'white'}}  to='./' exact>Home</NavLink>
                <NavLink className={classes.links} to='./view' exact>View Employees</NavLink>
                <NavLink className={classes.links}  to='./add' exact  >Add Employee</NavLink>
            </Toolbar>
        </AppBar>
)
}

export default NavBar;