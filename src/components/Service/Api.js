import axois from 'axios';

const Url ="http://localhost:8000/users";

//Define api to get empolyees
export  const getemployee =async(id)=>{
    id=id || '';
    return await axois.get(`${Url}/${id}`)
}

//Define api to insert  empolyees
export const AddEmployee =async(user)=>{
    return await axois.post(`${Url}/add`, user);
}

//Define api to update  empolyees
export const EditEmply =async(id,user)=>{
    return await axois.put(`${Url}/${id}`,user)
}

//Define api to delete  empolyees
export const delEmploy = async(id)=>{
    return await axois.delete(`${Url}/${id}`);
}