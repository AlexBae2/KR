import React from "react";
import {
    HeaderDefaultElement,
    HeaderBottomWrapper,
    HeaderTop,
    HeaderTopWrapper,
    HeaderBottomElement,
    HeaderMiddleWrapper
} from "./styles";

const Main = () => {
    return (
        <div>
            <HeaderTopWrapper>
                <HeaderTop>Министерство науки и высшего образования Российской Федерации</HeaderTop>
                <HeaderTop>Федеральное государственное бюджетное образовательное</HeaderTop>
                <HeaderTop>Учреждение высшего образования
                </HeaderTop>
                <HeaderTop>Уфимский университет науки и технологии</HeaderTop>
            </HeaderTopWrapper>
            <HeaderMiddleWrapper>
                <HeaderDefaultElement>Курсовая работа</HeaderDefaultElement>
                <HeaderDefaultElement>по дисциплине</HeaderDefaultElement>
                <HeaderDefaultElement>"Сети и системы передачи информации"</HeaderDefaultElement>
                <HeaderDefaultElement>на тему</HeaderDefaultElement>
                <HeaderDefaultElement>"Анализ современных web-технологий и соответствующих протоколов"</HeaderDefaultElement>
            </HeaderMiddleWrapper>

            <HeaderBottomWrapper>
                <HeaderBottomElement>Выполнил: ст. гр.</HeaderBottomElement>
                <HeaderBottomElement>ИБ-328</HeaderBottomElement>
                <HeaderBottomElement>Бабичев А.Д.</HeaderBottomElement>
                <HeaderBottomElement>Проверил:</HeaderBottomElement>
                <HeaderBottomElement>Гараев Р.А.</HeaderBottomElement>
            </HeaderBottomWrapper>
            
            <div>
                <HeaderDefaultElement>Уфа-2023</HeaderDefaultElement>
            </div>
        </div>
    )
};

export default Main;