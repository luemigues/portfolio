import { useState, useEffect } from 'react';
import {getWindowDimensions} from '../../../utils/helperfunctions.js';
import {Header, Title, BlueMenu, BlueClose} from './topbar-styling';
import MobileMenu from '../mobileMenu/mobileMenu.js';
import DesktopMenu from '../desktopMenu/desktopMenu.js';
import Backdrop from '../backdrop/backdrop.js';

const desktopNav = ['About Me', 'Development', 'Graphic Design', 'Photography'];
const mobileNav = ['About Me', 'Development', 'Graphic Design', 'Photography', 'Get in touch'];

function Topbar(props){

    // MOBILE RESPONSIBLE
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const isMobile = windowDimensions.width < 990;

    // MOBILE MENU DISPLAY
    const [ openMenu, setOpenMenu] = useState(false);

    const menuToggleHandler = () => {
        setOpenMenu((prevState) => !prevState);
    }

    const closeMenuHandler = () => {
        setOpenMenu(false)
    }

    let openMenuIcon;
    let showOpenMenu;
    let backdrop;

    if(isMobile && openMenu){
        openMenuIcon = <BlueClose onClick={closeMenuHandler} />;
        showOpenMenu = <MobileMenu items={mobileNav} handleClick={closeMenuHandler} />;
        backdrop = <Backdrop handleClick={closeMenuHandler} />;

    }else if(isMobile && !openMenu){
        openMenuIcon = <BlueMenu onClick={menuToggleHandler} />;
    }

    return(
        <Header>
            <Title>
                Lucia E. Migues
            </Title>
            {!isMobile && <DesktopMenu items={desktopNav} handleClick={closeMenuHandler}/>}
            {openMenuIcon}
            {showOpenMenu}
            {backdrop}
        </Header>
    );
}

export default Topbar;