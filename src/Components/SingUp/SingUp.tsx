
import React, { useState , useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from '../../index';

import CloseIcon from '@mui/icons-material/Close';

import './SingUp.scss';

interface IModal {
    manageModal: (action: 'open' | "close" | "rotate", modal?: string) => void;
}

const SingUp: React.FC<IModal> = (props) => {
    
    const {store} = useContext(Context);
    const [email , setEmail] = useState<string>('')
    const [password , setPassword] = useState<string>('')
    const [fullName , setFullName] = useState<string>('')
    const [confirmPassword , setConfirmPassword] = useState<string>('')
    
    // const singUpUser = (event) =>{
    //     event.preventDefault()
    //     const user = {
    //         fullName ,
    //         password ,
    //         email
    //     }
    //     axios
    //         .post(`http://localhost:8092/users`, user)
    //         .then(res => console.log(res.data))
    // }

    return (
        <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180, }} 
            exit={{ rotateY: 0 }}
            transition={{ duration: 0.3 }}
            className='SingUpBox'>
            <div className='SingUpInner'>
                <CloseIcon className='close' onClick={() => props.manageModal('close')} />
                <h2>Sign up</h2>
                <p className='singText'>Registration takes less than a minute but gives you full control over your studying.</p>
                <form action="">
                    <label htmlFor="fullName">
                        Full Name
                        <input value={fullName} onChange={e => setFullName(e.target.value)} type="text" name='fullName' placeholder='Your full name' autoComplete="fullName" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" name='email' placeholder='Your working email' autoComplete="email" required/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name='password' placeholder='Your password' autoComplete="password" required/>
                    </label>
                    <label htmlFor="confirmPassword">
                        Confirm Password
                        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" name='confirmPassword' placeholder='Confirm your password' autoComplete="confirmPassword" />
                    </label>
                    <label className='checkbox' htmlFor="">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <button type='button' onClick={() =>  store.registration(email , password)}>Sign up</button>
                    <p className='haveAcc'>Already have an account? <span onClick={() => props.manageModal('rotate' , 'register')}>Sign in</span> </p>
                </form>

            </div>
        </motion.div>
    );
};

export default SingUp;