import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import React, { useState, useContext, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import SingIn from '../SingIn/SingIn';
import SingUp from '../SingUp/SingUp';

import { Context } from '../../index';
import { activeArr } from '../../Utils/Arrays';

import './header.scss';

type IConsult = {
    changeConsult: () => void
}

const Header = (props: IConsult) => {

    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])
    
    const [menu, setMenu] = useState<boolean>(false);
    const [menuNavigation, setMenuNavigation] = useState<boolean>(false);

    const [active, setActive] = useState<string | number | null>(localStorage.getItem('active') ? parseInt(localStorage.getItem('active')!) : null);
    localStorage.setItem('active', JSON.stringify(active))
    const navActiveLink = (e: string) => e ? setActive(e) : setActive(null)

    const [modal, setModal] = useState<string | null>();
    const closeModal = (e: React.MouseEvent<HTMLElement>) => {
        const id = (e.target as HTMLElement).id;
        if (id === 'modal') {
            setModal(null)
        }
    };
    const manageModal = (action: 'open' | "close" | "rotate", modal?: string) => {
        switch (action) {
            case 'open':
                if (modal === 'login') {
                    setModal('login')
                } else if (modal === 'register') {
                    setModal('register')
                }
                break;

            case 'close':
                setModal(null)
                break;

            case 'rotate':
                if (modal === 'login') {
                    setModal('register')
                } else if (modal === 'register') {
                    setModal('login')
                }
                break;
        }
    }

    modal ? disableBodyScroll(document.documentElement as HTMLElement) : enableBodyScroll(document.documentElement as HTMLElement);
    
    return (
        <header>
            <div className='headerWrapper'>
                <div className='container'>
                    <Link onClick={() => setActive(null)} to={'/'}>
                        <p className='logo'>CREATE
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.69978 8.7L3.4998 0.6C3.0998 0.2 2.5998 0 2.0998 0C1.5998 0 1.0998 0.2 0.699803 0.6C-0.000194848 1.4 -0.000194848 2.6 0.699803 3.4L5.59979 10L0.699803 16.6C-0.000194848 17.4 -0.000194848 18.6 0.699803 19.4C1.0998 19.8 1.5998 20 2.0998 20C2.5998 20 3.0998 19.8 3.4998 19.4L9.69978 11.3C10.3998 10.7 10.3998 9.5 9.69978 8.7Z" fill="#FF3F3A" />
                                <path d="M12.3426 8.7L18.5426 0.6C18.9426 0.2 19.4426 0 19.9426 0C20.4426 0 20.9426 0.2 21.3426 0.6C22.0426 1.4 22.0426 2.6 21.3426 3.4L16.4426 10L21.3426 16.6C22.0426 17.4 22.0426 18.6 21.3426 19.4C20.9426 19.8 20.4426 20 19.9426 20C19.4426 20 18.9426 19.8 18.5426 19.4L12.3426 11.3C11.6426 10.7 11.6426 9.5 12.3426 8.7Z" fill="#FF3F3A" />
                            </svg>
                        </p>
                    </Link>
                    <MenuIcon style={{ color: menu ? 'red' : 'black' }} onClick={() => setMenu(!menu)} className='menuIcon' />
                    <div onMouseLeave={() => setMenu(false)} className={`menuWrapper ${menu ? 'menuWrapperActive' : ''}`}>
                        <nav>
                            <h3 onClick={() => setMenuNavigation(!menuNavigation)}>
                                {menuNavigation ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />}
                                Navigation
                            </h3>
                            <ul className={`links ${menuNavigation ? 'linksActive' : ''}`}>
                                {
                                    activeArr.map((el: string, i: number) => (
                                        <li key={i}>
                                            <Link id={el} onClick={(e) => navActiveLink(e.currentTarget.id)} className={active === el ? 'active' : ''} to={`/${el.replace(/\s/g, "")}`}>
                                                {el}
                                                {i === active ? (<motion.div className="underline" layoutId="underline" transition={{ duration: 0.1 }} />) : null}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div className='actionPanel'>
                            <button onClick={() => props.changeConsult()} className='getConsult'>Get consultation</button>
                            {
                                store.isAuth ?
                                    <button onClick={() => store.logout()}>Logout</button> :
                                    <div className='profile'>
                                        <PersonOutlineOutlinedIcon />
                                        <p id='login' onClick={() => manageModal('open', 'login')} className='login'>Log in </p>
                                        <i>/</i>
                                        <p id='register' onClick={() => manageModal('open', 'register')} className='register'> Register</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                animate={modal ?
                    { opacity: 1, x: 0 } :
                    { opacity: 0, x: "-100%" }
                }
                id='modal'
                transition={{ duration: 0.3 }}
                style={{ display: modal ? 'flex' : 'none' }}
                onClick={closeModal}
                className='accWrapper'>
                {
                    modal === 'login' ?
                        <SingIn manageModal={manageModal} /> :
                        modal === 'register' ?
                            <SingUp manageModal={manageModal} /> :
                            null
                }
            </motion.div>
        </header>
    );
};

export default observer(Header);