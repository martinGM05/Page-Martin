import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface projectsI {
    id: string;
    name: string;
    description: string;
    img: string;
    page: string;
    technologies: iconsI[];
    repository: string;
}

interface iconsI {
    icon: IconProp,
    name: string
}


export const projects: projectsI[] = [
    {
        id: "1",
        name: "Pokedex",
        description: "Aplicación que muestra los datos de un pokemon",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Pokedex.png?alt=media&token=9a45044e-9424-403a-b64e-e7e71fc31a1a",
        page: "https://martingm05.github.io/Pokedex",
        technologies: [
            {
                icon: ['fab', 'html5'],
                name: 'html'
            },
            {
                icon: ['fab', 'css3-alt'],
                name: 'css'
            },
            {
                icon: ['fab', 'js-square'],
                name: 'javascript'
            }
        ],
        repository: "https://github.com/martinGM05/Pokedex"
    },
    {
        id: "2",
        name: "Henry Cinemas",
        description: "Aplicación que muestra los datos de una pelicula",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/HenryCinemas.png?alt=media&token=9e728527-389d-46d0-97b4-90228d2911f4",
        page: "https://martingm05.gitlab.io/henry-cinemas",
        technologies: [
            {
                icon: ['fab', 'html5'],
                name: 'html'
            },
            {
                icon: ['fab', 'css3-alt'],
                name: 'css'
            },
            {
                icon: ['fab', 'js-square'],
                name: 'javascript'
            }
        ],
        repository: "https://gitlab.com/martinGM05/henry-cinemas"
    },
    {
        id: "3",
        name: "Pastelería Carmen",
        description: "Aplicación para la gestión de pasteles así como los pedidos",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Pasteleria-Vue.png?alt=media&token=5f81c81b-d2fb-4d56-bb9c-c86b2aecc048",
        page: "https://pasteleria-carmen.netlify.app/#/",
        technologies: [
            {
                icon: ['fab', 'vuejs'],
                name: 'vue'
            },
            {
                icon: ['fab', 'js-square'],
                name: 'javascript'
            },
            {
                icon: ['fab', 'bootstrap'],
                name: 'bootstrap'
            }
        ],
        repository: "https://github.com/martinGM05/Pasteleria--Vue"
    },
    {
        id: "4",
        name: "Vacunación",
        description: "Replica de una landing page de una aplicación de vacunación",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Vacinnation.png?alt=media&token=35cff607-f3e2-4d44-bfca-c56fce387a53",
        page: "https://martingm05.github.io/LaunchX-FrontEnd-Css/",
        technologies: [
            {
                icon: ['fab', 'html5'],
                name: 'html'
            },
            {
                icon: ['fab', 'bootstrap'],
                name: 'bootstrap'
            }
        ],
        repository: "https://github.com/martinGM05/LaunchX-FrontEnd-Css"
    },
    {
        id: "5",
        name: "Clima",
        description: "Aplicación que muestra el clima de una ciudad",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Clima.png?alt=media&token=b2d15335-bb2d-4ba6-b6af-8b5c87b6fb12",
        page: "https://clima-martin-react.netlify.app/",
        technologies: [
            {
                icon: ['fab', 'react'],
                name: 'react'
            },
            {
                icon: ['fab', 'js-square'],
                name: 'javascript'
            }
        ],
        repository: "https://github.com/martinGM05/React-clima"
    },
    {
        id: "6",
        name: "Hagamoslo",
        description: "Aplicación que conecta clientes con trabajadores",
        img: "https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Hagamoslo.jpg?alt=media&token=81a58b3b-e7b8-42d8-ae92-9f6fd41742a5",
        page: "https://www.youtube.com/watch?v=i9s706_Hb5I",
        technologies: [
            {
                icon: ['fab', 'react'],
                name: 'react'
            },
        ],
        repository: "https://github.com/martinGM05/Hagamoslo-Cliente"
    }
]