import React, { Component } from 'react';

class TeamMember extends Component {
    render() {
        return (
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={this.props.image} alt="" />
                    <h4>{this.props.name}</h4>
                    <p class="text-muted">{this.props.role}</p>
                    <a class="btn btn-dark btn-social mx-2" href="https://twitter.com/KoDikako"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="https://web.facebook.com/profile.php?id=100010085881759"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/fransiskus-andika-setiawan/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        )
    }
}

export default TeamMember;