import React, { useState } from 'react'
import * as Styled from './layout.style'
import { NavbarList } from './data'
import { Button } from '../../components/Button'

export const Header: React.FC = () => {

    const [scrollBG, setScrollBG] = useState<boolean>(false)

    window.onscroll = ((e) => {
        window.screenY > 76 ? setScrollBG(true) : setScrollBG(false)
    })

    return (
        <Styled.HeaderWrapper>
            <Styled.HeaderContainer>
                <div>
                    <img src={'/assets/img/logo.png'} alt='logo' />
                </div>
                <Styled.Navbar>
                    {
                        NavbarList.map((ele, id) => (
                            <Styled.NavbarItem key={id}>{ele.title}</Styled.NavbarItem>
                        ))
                    }
                </Styled.Navbar>
                <Styled.Right>
                    <Button>Log in</Button>
                    <Button bg='#865DFF'>Get started</Button>
                </Styled.Right>
            </Styled.HeaderContainer>
        </Styled.HeaderWrapper>
    )
}