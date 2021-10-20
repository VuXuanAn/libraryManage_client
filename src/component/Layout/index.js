import React from 'react';
import './style.css'
import { Carousel } from 'antd';
import { NavLink } from 'react-router-dom';
const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};


const Index = (props) => {
    const menu = [
        {
            name: 'Home',
            path: '/',
            exact: true
        },
        {
            name: 'About Us',
            path: '/About'
        },
        {
            name: 'Our Books',
            path: '/our-book'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
        {
            name: 'Event',
            path: '/event'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        }

    ]
    return (
        <div className='rootCarosel'>
            {props.image}
            <Carousel autoplay>
                <div className='imageBanner'>

                </div>
                <div className='imageBanner'>

                </div>
                <div className='imageBanner'>

                </div>
            </Carousel>
            <div className="childCarosel" >
                <div className='container2'>
                    <div className="menu">
                        <ul>
                            {menu.map(item => {
                                return <li>
                                    <NavLink to={item.path} exact={item.exact}>{item.name}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <>
                {props.children}
            </>
        </div >
    );
}

export default Index;
