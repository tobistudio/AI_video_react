import React from 'react'
import { AppLayout } from '../../layouts'
import * as Section from '../../modules/Home'

const Home: React.FC = () => {
    return (
        <AppLayout>
            <Section.Landing></Section.Landing>
            <Section.BetweenBar></Section.BetweenBar>
            <Section.Feature></Section.Feature>
            <Section.Increase></Section.Increase>
            <Section.Powerful></Section.Powerful>
        </AppLayout>
    )
}

export default Home
