import React from "react";
import structureJson from '../../../assets/images/structureJson.jpeg'
import {ImgWrapper} from "./styles";

const Architecture = () => {
    return (
        <div>
            <h2>Описание наиболее популярных протоколов и базовые понятия</h2>
            <p>Web-протоколы являются основой интернет-технологий и используются для обмена данными между серверами и клиентами. Существует множество протоколов, которые используются в современных web-приложениях. Рассмотрим наиболее популярные из них.</p>
            <p>HTTP (Hypertext Transfer Protocol) - это протокол, который используется для передачи данных между веб-сервером и клиентом. Он предоставляет стандартный способ передачи данных в Интернете и обеспечивает обмен информацией между серверами и браузерами. HTTP является основным протоколом, используемым в сети Интернет, и его версия 1.1 является наиболее распространенной на данный момент.</p>
            <p>HTTPS (HTTP Secure) - это защищенная версия HTTP-протокола, которая использует SSL (Secure Sockets Layer) или его преемник TLS (Transport Layer Security) для защиты данных, передаваемых между веб-сервером и клиентом. HTTPS используется для защиты конфиденциальной информации, такой как пароли, номера кредитных карт и другие личные данные.</p>
            <p>WebSocket - это протокол, который позволяет установить двустороннее соединение между веб-сервером и клиентом, которое остается открытым в течение всей сессии связи. Этот протокол позволяет взаимодействовать между сервером и клиентом в режиме реального времени, что делает его особенно полезным для веб-приложений, где требуется частое обновление данных.</p>
            <p>REST (Representational State Transfer) - это архитектурный стиль, используемый для построения распределенных приложений, работающих в Интернете. REST использует HTTP-протокол для передачи данных между сервером и клиентом. Он основан на принципе представления ресурсов и обеспечивает легковесный и гибкий способ взаимодействия между компонентами веб-приложения.</p>
            <p>JSON (JavaScript Object Notation) - это формат обмена данными, основанный на языке программирования JavaScript. Он используется для передачи струк тур данных между сервером и клиентом в веб-приложениях. JSON предоставляет легковесный и удобный способ сериализации и десериализации данных и является наиболее распространенным форматом для обмена данными между сервером и клиентом.</p>

            <ImgWrapper> <img src={structureJson} alt="Структура JSON файла" width={400}/> </ImgWrapper>

        </div>
    )
};

export default Architecture;