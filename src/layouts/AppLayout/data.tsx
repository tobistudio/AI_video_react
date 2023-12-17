import { CiInstagram, CiYoutube, CiTwitter } from "react-icons/ci"

interface NavbarProps {
    title: string,
    router: string
}

export const NavbarList: NavbarProps[] = [
    {
        title: 'Home',
        router: ''
    },
    {
        title: 'Customer stories',
        router: ''
    },
    {
        title: 'Pricing',
        router: ''
    },
    {
        title: 'Learning center',
        router: ''
    }
]

export const iconList = [
    {
        icon: <CiInstagram size={24} color="#C4C2CC" />
    },
    {
        icon: <CiYoutube size={24} color="#C4C2CC" />
    },
    {
        icon: <CiTwitter size={24} color="#C4C2CC" />
    },
]

export const companyList = [
    {
        link: '/',
        title: 'Blog'
    },
    {
        link: '/',
        title: 'Our story'
    },
    {
        link: '/',
        title: 'Customer stories'
    },
    {
        link: '/',
        title: 'Product changelog'
    },
    {
        link: '/',
        title: 'Become an affiliate'
    },
    {
        link: '/',
        title: 'Opus clip media assets'
    }
]

export const practiceList = [
    {
        link: '/',
        title: 'How to Turn Long Videos into Viral Shorts: The Ultimate Guide 2023'
    },
    {
        link: '/',
        title: 'Create Videos in Alex Hormozi Style: The Ultimate Guide'
    },
    {
        link: '/',
        title: 'How Does Opus Clip Work'
    }
]