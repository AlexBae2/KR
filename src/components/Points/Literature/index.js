import React from "react";
import {CustomP} from "./styles";

const Literature = () => {
    return (
        <div>
            <h2>Список литературы</h2>
            <ol>
                <li>Статья: Клиент-серверное и межсервисное взаимодействие
                    <CustomP>[Электронный ресурс] URL: <a
                    href={'https://habr.com/ru/articles/729528/'}>https://habr.com/ru/articles/729528/</a></CustomP>
                    <CustomP>(Дата
                    обращения 29.04.2023)</CustomP></li>
                <li>Статья: Архитектура REST
                    <CustomP>[Электронный ресурс] URL:
                        <a
                    href={'https://habr.com/ru/articles/38730/'}>https://habr.com/ru/articles/38730/
                        </a>
                    </CustomP>
                    <CustomP>(Дата
                    обращения 29.04.2023)</CustomP></li>
                <li>Статья: REST API: что это такое и как работает 
                    <CustomP>[Электронный ресурс] URL: <a
                    href={'https://skillbox.ru/media/code/rest-api-chto-eto-takoe-i-kak-rabotaet/'}>https://skillbox.ru/media/code/rest-api-chto-eto-takoe-i-kak-rabotaet/</a>
                    </CustomP>
                    <CustomP>(Дата обращения 29.04.2023)</CustomP></li>
                <li>Статья: Современные технологии разработки Web-сайтов
                    <CustomP>[Электронный ресурс] URL: <a
                    href={'https://studbooks.net/2227158/informatika/sovremennye_tehnologii_razrabotki_saytov'}>https://studbooks.net/2227158/informatika/sovremennye_tehnologii_razrabotki_saytov</a>
                    </CustomP>
                    <CustomP>(Дата обращения 29.04.2023)</CustomP></li>
                <li>Статья: Выбор технологий для большого и не очень большого веб-проекта
                    <CustomP>[Электронный ресурс]
                    URL: <a
                        href={'https://habr.com/ru/companies/SECL_GROUP/articles/315734/'}>https://habr.com/ru/companies/SECL_GROUP/articles/315734/</a>
                    </CustomP> 
                    <CustomP>(Дата обращения 29.04.2023)</CustomP></li>
                <li>Статья: Алгоритмы балансировки нагрузок 
                    <CustomP>[Электронный ресурс] URL: <a
                    href={'https://habr.com/ru/companies/ruvds/articles/732648/'}>https://habr.com/ru/companies/ruvds/articles/732648/</a>
                    </CustomP>
                    <CustomP>(Дата обращения 29.04.2023)</CustomP></li>
            </ol>
        </div>
    )
};

export default Literature;