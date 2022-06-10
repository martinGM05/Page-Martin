import { Link, NavLink, useNavigate } from "react-router-dom"
import * as Scroll from 'react-scroll';
import { Link as LinkScroll, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {

    const navigate = useNavigate();

    let LinkScroll = Scroll.Link;
    let Button = Scroll.Button;
    let Element = Scroll.Element;
    let Events = Scroll.Events;
    let scroll = Scroll.animateScroll;
    let scrollSpy = Scroll.scrollSpy;

    const scrollTo = () => {
        scroll.scrollTo(100);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    return (
        <header className="py-6 fixed top-0 left-0 right-0 z-10 shadow-lg bg-body">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="text-lg font-bold">Martín González</div>
                <div className="hidden md:flex space-x-12 items-center">
                    <NavLink to="/" className={'font-bold'} style={({ isActive}) => ({ color: isActive ? '#d35fc8' : '#FFF' })}>Home</NavLink>
                    <NavLink className={'font-bold'} to="projects" style={({ isActive}) => ({ color: isActive ? '#d35fc8' : '#FFF' })}>Projects</NavLink>
                    <NavLink className={'font-bold'} to="blog" style={({ isActive}) => ({ color: isActive ? '#d35fc8' : '#FFF' })}>Blog</NavLink>
                    <NavLink to="hire" className="px-6 py-2 bg-tertiary font-bold">Hire me</NavLink>
                </div>
                <div className="md:hidden">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white" /></svg>
                </div>
            </div>
        </header>
    )
}

export default Header