import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Robert. I'm a full stack engineer with experience in APIs, JavaScript, Express JS, Node JS, MySQL, MongoDB, and React.</p>

            <p> I am currently enrolled in Penn LPS Coding Bootcamp, where I look foward to utilizing my skills to enter the world of designing and building web applications.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>One of my latest group project, Wine 'A' Lot Management, is a system application that helps to keep track of inventory and sales information. You can check it out <a href="https://project-2-group1.herokuapp.com/7" target="_blank" rel="noopener noreferrer">here</a>, or on our GitHub page <a href="https://github.com/ram-sah/Project-2" target="_blank" rel="noopener noreferrer">here</a>. It is built with Express, MySQL, Sequelize, and Travis just to name a few.</p>

            <p> During My free time I enjoy fishing, camping, playing videogames and spending quality time with my family.</p>
            </Content>
        </div>
    );
}

export default AboutPage;