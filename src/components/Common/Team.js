import React, { Component } from 'react';
import TeamMember from './TeamMember';

// Gambar Team
import team1 from '../assets/img/team/1.jpg';
import team2 from '../assets/img/team/2.jpg';
import team3 from '../assets/img/team/3.jpg';

const members = [
    { name: 'Dika Koko', role: 'Fullstack develpoper', image: team1 },
    { name: 'Dika Koko', role: 'Quality Assurance', image: team2 },
    { name: 'Dika Koko', role: 'Project Manager', image: team1 }
]

class Team extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <div class="row">
                        {members.map((member, index) => {
                            return <TeamMember
                                {...member} key={index}
                            />
                        })}
                    </div>

                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;