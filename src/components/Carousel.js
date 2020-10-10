import React from 'react';

import Card from '../components/Card';

import burger from '../assets/images/burger.png';
import passwordGenerator from '../assets/images/password_generator.png';
import covid19TravelAssistant from '../assets/images/covid_19_us_travel_assistant.jpg';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Eat Da Burger',
                    subTitle: 'Create Your Own Burger.',
                    imgSrc: burger,
                    link: 'https://eat-da-burger-42830.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Password Generator',
                    subTitle: 'Generates a random password.',
                    imgSrc: passwordGenerator,
                    link: 'https://jones9682.github.io/Password-Generator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Covid 19 US Travel Assistant',
                    subTitle: 'Infection data travel destination App.',
                    imgSrc: covid19TravelAssistant,
                    link: 'https://millhouse36.github.io/Covid-19-contact-tracing-and-data-app/',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        // console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;