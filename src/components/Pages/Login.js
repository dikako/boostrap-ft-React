import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = [
  { name: 'email', elementName: 'input', type: 'email', placeholder: 'Input Your Email' },
  { name: 'password', elementName: 'input', type: 'password', placeholder: 'Inpit Your Password' }
]

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              {fields.map((f, i) => {
                return <Field
                  key={i}
                  {...f}
                  value={this.props.values[f.name]}
                  name={f.name}
                  onChange={this.props.handleChange}
                  onBlur={this.props.handleBlur}
                  touched={(this.props.touched[f.name])}
                  errors={this.props.errors[f.name]}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Your email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("Login attemp", values);
  }
})(Login);