import {Nav, ListContainer, ListItem} from './mobileMenu-styling.js';

function MobileMenu(props){

    const listItems = props.items.map( (item) => {
        const link = (() => {
            const joined = item.split(" ").join("");
            return `#${joined}`
        })();

        return <ListItem key={item}> <a href={link}> {item} </a></ListItem>
    })

    return (
        <Nav>
            <ListContainer>
                    {listItems}
            </ListContainer>
        </Nav>
    );
}

export default MobileMenu;