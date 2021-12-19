import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import './Form.css';
import * as Yup from 'yup';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormRadio from './FormRadio';

export default class FormLab extends Component {
    render() {
        return <Formik 
        initialValues={{
            name:"",
            persons:0,
            children:0,
            checkIn:0,
            checkOut:0,
            smoke: "nonsmoking",
            business : false
        }} 
            onSubmit={(formValues) => alert (JSON.stringify(formValues))}

            validationSchema = {Yup.object().shape({
                name: Yup.string().required('name is required'),
                persons: Yup.number().min(1).required('select number of persons'),
                children: Yup.number(),
                checkIn: Yup.date().required('select the arrival date'),
                checkOut: Yup.date().required('select the departure date'),
                business: Yup.boolean()
            })}
        >
            <Form >
                <Field name="name" component={FormInput} label="Name"/>
                <Field name="persons" component={FormInput} label="Persons" type="number"/>
                <Field name="children" component={FormInput} label="Children" type="number"/>
                <Field name="checkIn" component={FormInput} label="Check-in date" type="date"/>
                <Field name="checkOut" component={FormInput} label="Check-out date" type="date"/>
                <fieldset>
                    <legend id=''>Smoking\non-smoking room</legend>
                    <Field name="smoke" component={FormRadio} value="smoking" id="smoking" label="Smoking"/>
                    <Field name="smoke" component={FormRadio} value="nonsmoking" id="nonsmoking" label="Non-smoking"/>
                </fieldset>
                <Field component={FormCheckbox} name="business" label="I'm traveling for work"/>
                <button type="submit">Search</button>
            </Form>
        </Formik>
    }
}