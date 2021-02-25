import React from 'react';
import {SkillContainer, Title, IconStyleWrapper} from './skill-item-styling.js';

function SkillItem({Icon, name}){

    return(
        <SkillContainer>
            <IconStyleWrapper>
                <Icon size="40"/>
            </IconStyleWrapper>
            <Title>
                {name}
            </Title>

        </SkillContainer>
    )
}

export default SkillItem;