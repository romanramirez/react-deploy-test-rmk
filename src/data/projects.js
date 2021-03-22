// Defining our projects

import project1 from '../assets/airbnbgame.png';
import project2 from '../assets/herenciafarms.png';
import project3 from '../assets/guessnumber.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Dice Game',
    description:
      'A simple game that I built involving JS and core web dev concepts!',
    link: 'https://github.com/romanramirez/jssandbox/tree/main/dicegame',
    image: project1,
    linkname: 'Dice Game Github',
  },
  {
    id: 2,
    title: 'Herencia Farms',
    description: 'A personal web design project in progress.',
    link: 'https://herenciafarms.com',
    image: project2,
    linkname: 'Herencia Farms site',
  },
  {
    id: 3,
    title: 'Guess My Number',
    description: 'A number guessing game built with Javascript.',
    link: 'https://github.com/romanramirez/jssandbox/tree/main/guessnumber',
    image: project3,
    linkname: 'Number Game Github',
  },
];

export default PROJECTS;
