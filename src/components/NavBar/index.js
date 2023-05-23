import {List, ListItemButton } from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {NavBarWrapper} from "./styles";

const Navbar = () => {

    const [selectedLink, setSelectedLink] = useState('main');

    return (
        <NavBarWrapper>
            <List style={{position: 'sticky', top: 0}}>
                <Link onClick={() => setSelectedLink('main')} className={'link'} to="/Main"><ListItemButton selected={selectedLink === 'main'}>Главная страница</ListItemButton ></Link>
                <Link onClick={() => setSelectedLink('architecture')} className={'link'} to="/Architecture"><ListItemButton selected={selectedLink === 'architecture'}>Описание наиболее популярных протоколов и базовые понятия</ListItemButton ></Link>
                <Link onClick={() => setSelectedLink('languages')} className={'link'} to="/Languages"><ListItemButton selected={selectedLink === 'languages'}>Анализ современных web технологий </ListItemButton ></Link>
                <Link onClick={() => setSelectedLink('protocols')} className={'link'} to="/Protocols"><ListItemButton selected={selectedLink === 'protocols'}>Архитектура Web сервера</ListItemButton > </Link>
                <Link onClick={() => setSelectedLink('reliability')} className={'link'} to="/Reliability"><ListItemButton selected={selectedLink === 'reliability'}>Языки и инструменты для разработки веб-приложений</ListItemButton ></Link>
                <Link onClick={() => setSelectedLink('rest')} className={'link'} to="/REST"><ListItemButton selected={selectedLink === 'rest'}>Архитектура REST сервисов</ListItemButton > </Link>
                <Link onClick={() => setSelectedLink('webTechnologies')} className={'link'} to="/WebTechnologies"><ListItemButton selected={selectedLink === 'webTechnologies'}>Подходы к обеспечению высокой производительности и надежности Web-приложений</ListItemButton ></Link>
                <Link onClick={() => setSelectedLink('literature')} className={'link'} to="/Literature"><ListItemButton selected={selectedLink === 'literature'}>Список литературы</ListItemButton ></Link>
            </List >

        </NavBarWrapper>
    )
};

export default Navbar;