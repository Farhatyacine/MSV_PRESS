import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class Login extends Component {

    render() {
        return (
            <div className="container align-self-center">
                <div className="shadow-lg p-5 mb-5 bg-white rounded">
                    <div className="row justify-content-center">
                        <div className="jumbotron bg-light col-md-6">
                            <h3 className="text-center">Welcome</h3>
                            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="rounded mx-auto d-block col-sm-3"/>
                            <br/>
                            <form onSubmit={this.props.handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className='form-group col-sm-8'>
                                        <Field component='input' name='email' className='form-control'
                                               placeholder="Enter email"
                                               type='text'/>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className='form-group col-sm-8'>
                                        <Field component='input' name='password' className='form-control'
                                               placeholder="Enter password" type='password'/>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className='form-group col-sm-3'>
                                        <button name='submit' className='btn btn-outline-primary'
                                                type='submit'>Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm',
    onSubmit:() => this.props.onSurveySubmit()
})(Login);