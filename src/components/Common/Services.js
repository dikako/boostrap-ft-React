import React, { Component } from 'react';
import SingleService from './SingleService';

let desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.";

const services = [
    {title: 'E-Commerce', description: desc, icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', description: desc, icon: 'fa-laptop'},
    {title: 'Web Security', description: desc, icon: 'fa-lock'}
];

class Services extends Component {
    render() {
        return (
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <div class="row text-center">
                        {services.map((service, index) => {
                            return <SingleService
                                {...service} key={index}
                            />
                        })}
                    </div>

                </div>
            </section>
        )
    }
}

export default Services;