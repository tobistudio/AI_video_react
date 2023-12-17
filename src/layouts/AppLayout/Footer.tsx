import React from 'react'
import * as Styled from './layout.style'
import { companyList, iconList, practiceList } from './data'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
    return (
        <Styled.FooterWrapper>
            <Styled.FooterContainer>
                <Styled.FooterLeft>
                    <img src={'/assets/img/logo.png'} alt='logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <Styled.IconArea>
                        {
                            iconList.map((ele, id) => (
                                <Styled.IconPart key={id}>
                                    {ele.icon}
                                </Styled.IconPart>
                            ))
                        }
                    </Styled.IconArea>
                </Styled.FooterLeft>
                <Styled.FooterRight>
                    <Styled.CompanyArea>
                        <Styled.FooterTitle>Company</Styled.FooterTitle>
                        <Styled.FooterContent>
                            {
                                companyList.map((ele, id) => (
                                    <Link key={id} to={ele.link}>{ele.title}</Link>
                                ))
                            }
                        </Styled.FooterContent>
                    </Styled.CompanyArea>
                    <Styled.PracticeArea>
                        <Styled.FooterTitle>Best practices</Styled.FooterTitle>
                        <Styled.FooterContent>
                            {
                                practiceList.map((ele, id) => (
                                    <Link key={id} to={ele.link}>
                                        {ele.title}
                                    </Link>
                                ))
                            }
                        </Styled.FooterContent>
                    </Styled.PracticeArea>
                </Styled.FooterRight>
            </Styled.FooterContainer>
        </Styled.FooterWrapper>
    )
}