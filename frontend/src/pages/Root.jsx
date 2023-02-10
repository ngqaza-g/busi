import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { tokenInvalid, tokenValid } from '../redux/isTokenValidSlice';
import { setUser, resetUser } from '../redux/userSlice';

export default function Root(){
    const dispatch = useDispatch();
    const res = useLoaderData();

    console.log(res);
    
    if(res){
        if(res.status === 200){
            const { user }= res.data;
            console.log(user);
            dispatch(setUser(user));
            dispatch(tokenValid());
        }else{
            dispatch(resetUser());
            dispatch(tokenInvalid());
        }
    }
    
    return ( <>
        <Outlet />
    </>
    )
}



export async function loader(){
    
    try{
        const res = await axios.get('/api/auth/');
        return res;        
    }catch(error){
        const { response } = error;
        return response;
    }
}