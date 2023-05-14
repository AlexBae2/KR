import {List, ListItemButton } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {NavBarWrapper} from "./styles";

const Navbar = () => {

    return (
        <NavBarWrapper>
            <List style={{position: 'sticky', top: 0}}>
                <Link className={'link'} to="/Main"><ListItemButton >Главная страница</ListItemButton ></Link>
                <Link className={'link'} to="/Architecture"><ListItemButton >Описание наиболее популярных протоколов и базовые понятия</ListItemButton ></Link>
                <Link className={'link'} to="/Languages"><ListItemButton >Анализ современных web технологий </ListItemButton ></Link>
                <Link className={'link'} to="/Protocols"><ListItemButton >Архитектура Web сервера</ListItemButton > </Link>
                <Link className={'link'} to="/Reliability"><ListItemButton >Языки и инструменты для разработки веб-приложений</ListItemButton ></Link>
                <Link className={'link'} to="/REST"><ListItemButton >Архитектура REST сервисов</ListItemButton > </Link>
                <Link className={'link'} to="/WebTechnologies"><ListItemButton >Подходы к обеспечению высокой производительности и надежности Web-приложений</ListItemButton ></Link>
                <Link className={'link'} to="/Literature"><ListItemButton >Литература</ListItemButton ></Link>
            </List >

        </NavBarWrapper>
    )
};

export default Navbar;