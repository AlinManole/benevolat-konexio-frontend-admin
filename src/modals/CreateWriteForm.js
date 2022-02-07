import React from 'react';
// import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'



// import { UserContext } from "../../contexts/User"

const Message = styled.div`
.message textarea {
    height: 180px;
    width: 398px;
}
`

const FormModal = styled.div`
.who input {
    font-size: 10px;
}

.who form {
    display: flex;
    justify-content: space-between;
}

.who form input {
    font-size: 15px;
}

.who p{
   text-align: end;
   font-size: 13px;
   margin-bottom: 10px;
}

.who button {
    border-radius: 20px;
    width: 70px;
    height: 20px;
    border: none;
    background-color: #0375bb;
    color: white;
    margin-left: 330px;
    margin-top: 10px;
}

`

const CreateWriteForm = () => {
    // const { signup } = useContext(UserContext)
   

    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
            bio: "",
        },
    })

    return (
        <FormModal>
        <div className="who">
            <form className='whoandobjet' onSubmit={formik.handleSubmit}> 
                <div className="mb-3">
                    <input 
                    type="text" disabled="disabled" 
                    className="form-control"  
                    placeholder='Konexio'
                    name="konexio" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Objet:' 
                    name="objet"
                    value={formik.values.objet}
                    onChange={formik.handleChange}
                    />
                </div>
                </form>

                <p>Date: xx/xx/xx</p>

                <form className='messagesubmit' onSubmit={formik.handleSubmit}> 
                <Message>
                <div className="message">
                <textarea name="textarea"
                    rows="5" cols="30"
                    placeholder="Ecrivez votre message..."
                    type="text"
                    className="form-control"  
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    />
                    </div>
                    </Message>
                    </form>
                    <button>Envoyer</button>
        </div>
        </FormModal>
    );
};

export default CreateWriteForm;