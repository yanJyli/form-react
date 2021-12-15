import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import './Form.css';

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
        >
            <Form >
                <div>
                    <label>Name</label>
                    <Field name="name"/>
                </div>
                <div>
                    <label>Persons</label>
                    <Field type="number" name="persons"/>
                </div>
                <div>
                    <label>Children</label>
                    <Field type="number" name="children"/>
                </div>
                <div>
                    <label>Check-in date</label>
                    <Field type="date" name="checkIn"/>
                </div>
                <div>
                    <label>Check-out date</label>
                    <Field type="date" name="checkOut"/>
                </div>

                <fieldset>
                    <legend id=''>Smoking\non-smoking room</legend>
                    <Field type="radio" name="smoke" value="smoking" id="smoking" />
                    <label for="smoking">Smoking</label>

                    <Field type="radio" name="nonsmoking" value="nonsmoking" id="nonsmoking" />
                    <label for="nonsmoking">Non-smoking</label>
                </fieldset>

                <div>
                    <Field type="checkbox" name="business" id="business" />
                    <label for="business ">I'm traveling for work</label>
                </div>

                <button type="submit">Search</button>
            </Form>
        </Formik>
    }
}