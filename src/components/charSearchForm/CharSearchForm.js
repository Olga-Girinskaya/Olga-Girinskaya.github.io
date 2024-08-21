import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './charSearchForm.scss';

const CharSearchForm = () => {
    return (
        <Formik
            initialValues={{
                charName: ''
            }}
            validationSchema={Yup.object({
                charName: Yup.string()
                    .required('This field is required')
            })}
            onSubmit={value => console.log(JSON.stringify(value, null, 2))}
        >

            <Form >
                <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <Field
                        id="charName"
                        name="charName"
                        type="text"
                        placeholder="Enter name" />
                    <ErrorMessage className='error' name="name" component="div" />
                    <button type="submit">FIND</button>
                </div>
            </Form>
        </Formik>
    )

}


export default CharSearchForm;