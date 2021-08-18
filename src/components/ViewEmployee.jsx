import { getemployee,delEmploy } from './Service/Api';
import { useEffect ,useState} from 'react';
import {Table,TableCell,TableRow,TableHead,TableBody,makeStyles,Button} from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 70px'
        },
        thead:{
            '& >*':{
                backgroundColor:'#000000 !important',
                color:' #FFFFFF',
                fontsize:30
            }
        },
        row:{
            '& >*':{
                fontsize:20
            }
        }
        
})
const ViewEmployee=()=>{
    //we use our classes as using useStyle as function 
    const classes = useStyle();
    //usestate is used to the change the state 
    const [users,setUsers]=useState([]);
    
    //useEffect is react hook and when component render that would be called that time  
    useEffect(() => {
       getAllEmployees()

    },[])

     //Call the user Api
     const  getAllEmployees=async()=>{
    //we will get users data in response
      const response = await  getemployee();
      console.log(response.data)
      setUsers(response.data);
    }

    const delEmployData=async(id)=>{
        await delEmploy(id);
        getemployee();
    
 
    }
    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>EmployeeID</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              
                {
                    users.map(user =>(
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.employeeid}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() =>delEmployData(user._id)}>Delete</Button>
                        </TableCell> 
                    </TableRow>
                    ))  
                }
            </TableBody>
        </Table>
    );

}

export default ViewEmployee ;