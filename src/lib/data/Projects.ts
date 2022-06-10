import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface projectsI {
    id: string;
    name: string;
    description: string;
    img: string;
    page: string;
    technologies: iconsI[]
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
        ]
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
        ]
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
        ]
    }
]