import {Nav, ListContainer, ListItem} from './desktopMenu-styling';
import Button from '../../button/button.js';


function DesktopMenu(props){

    const listItems = props.items.map( (item) => {
        const link = (() => {
            const joined = item.split(" ").join("");
            return `#${joined}`
        })();

        return <ListItem key={item}><a href={link}> {item} </a></ListItem>
    })
    
    return (
        <Nav>
            <ListContainer>
                {listItems}
            </ListContainer>
            <Button text='Get in touch' />
        </Nav>
    )

}

export default DesktopMenu;