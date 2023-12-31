import React from 'react' 
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import backgroundImageImported from './navbar.jpg'

const Header = () => {

  const {userInfo} = useSelector((state)=>state.auth)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async()=>{
    try {
      let res = await logoutApiCall().unwrap();
      dispatch(logout());
      console.log(res);
      toast.success(res.message)
      navigate('/')
    } catch (error) {
      toast.error(error?.data.message);
    }
  }

  const backgroundStyle = {
    background: "transparent",
    border:'1px solid silver',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='flex justify-between p-3' style={backgroundStyle}>
        <h1 className='w-1/3 text-white font-bold md:text-xl'>Generate Your Password</h1>
        {
          (userInfo) ? (
            <>
              <div className='w-1/3 flex justify-end'>
              <h1 className='w-1/3 text-white font-medium text-lg text-center'>Hi, {userInfo.name}</h1>
                <button className='btn text-white cursor-pointer' onClick={logoutHandler}>logout</button>
              </div>
            </>
          ):null
        }
    </div>
  )
} 

export default Header