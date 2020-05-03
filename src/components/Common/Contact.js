import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email' },
            { name: 'Phone', elementName: 'input', type: 'text', placeholder: 'Your Phone Number' }
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message' }
        ]
    ]
}

class Contact extends Component {

    componentDidMount() {
        this.props.handleSubmit();
    }

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">

                        <div className="row align-items-stretch mb-6">

                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Section Render", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, index) => {
                                            return <Field
                                                {...field}
                                                key={index}
                                                values={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div
                                id="success">
                            </div>
                            <button
                                className="btn btn-primary btn-xl text-uppercase"
                                type="submit"
                            >Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),

    validate: values => {
        const errors = {};

        Object.keys(values).map(v => {
            if (!values[v]) {
                errors[v] = "Required";
            }
        });

        return errors;

    },

    handleSubmit: (values, { setSubmitting }) => {
        console.log(" Values : ", values);
        alert("You've sumbitted the form", JSON.stringify(values))
    }

})(Contact);