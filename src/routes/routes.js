import React from 'react';
import Architecture from "../components/Points/Architecture";
import Languages from "../components/Points/Languages";
import Literature from "../components/Points/Literature";
import Main from "../components/Points/Main";
import Protocols from "../components/Points/Protocols";
import Reliability from "../components/Points/Reliability";
import Rest from "../components/Points/REST";
import WebTechnologies from "../components/Points/WebTechnologies";

export const routes = () => {
    return [
        {
            path: '/*',
            element: <Main />,
        },
        {
            path: '/Architecture',
            element: <Architecture />,
        },
        {
            path: '/Languages',
            element: <Languages />,
        },
        {
            path: '/Protocols',
            element: <Protocols />,
        },
        {
            path: '/Reliability',
            element: <Reliability />,
        },
        {
            path: '/Rest',
            element: <Rest />,
        },
        {
            path: '/WebTechnologies',
            element: <WebTechnologies />,
        },
        {
            path: '/Literature',
            element: <Literature />,
        }
    ];
};