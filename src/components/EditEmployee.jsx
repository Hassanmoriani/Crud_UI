import { FormControl,FormGroup, InputLabel,Input,Button,makeStyles,Typography } from "@material-ui/core"
import {useState,useEffect} from "react"
import {EditEmply, getemployee} from "./Service/Api";

import { useHistory,useParams,Link} from "react-router-dom";
const useStyle = makeStyles({
    conatiner:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& >*':{
            marginTop:15
        }
    },
})

//Take in empty object as initail
const initialValues={
    name:'',
    employeeid:'',
    email:'',
    phone:'',
}

const EditEmployee=()=>{
const classes = useStyle();
//history help to view the record once the record insert it router toward that component
const history =useHistory();
//Define the onvalueChange function
const onValueChange=(e)=>{
    //set the name value at target postion through setUsers
    setUsers({...user,[e.target.name]:e.target.value})
}
// Difine a state to the the values 
const [user,setUsers]=useState(initialValues);
//Here we de-structue our obj 
const {name,employeeid,email,phone} =user;

//useParams help us to check the params in url 
const  {id}=useParams();

//use useEffect
useEffect(()=>{
    loadUserData();
},[])
const loadUserData =async()=>{
    //We call here getemployee api buz we need the data which is insert into table and get back these inputfield for update
   const response = await getemployee(id);
   setUsers(response.data)
}

//Define funtion to insert employee into user obj suing AddEmployee
const EditEmployeeDetails =async()=>{
    await EditEmply(id,user)
    history.push('./view')
}


    return(
<FormGroup className={classes.conatiner}>
    <Typography variant="h3" >Edit Employees</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        {/* onChange use to get the values on change event   */}
        <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
    </FormControl> 
    <FormControl>
        <InputLabel>EmployeeID</InputLabel>
        <Input onChange={(e)=> onValueChange(e)}  name='employeeid'value={employeeid} />
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)}  name='email' value={email}/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)}  name='phone' value={phone}/>
    </FormControl>
    <Button variant="contained" onClick={()=> EditEmployeeDetails()} component={Link} to={'/view'} color="primary">Edit Employee</Button>
</FormGroup>
    )
}

export default EditEmployee;