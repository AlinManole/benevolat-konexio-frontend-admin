import React from 'react';
// import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'

// import { UserContext } from "../../contexts/User"

// const Message = styled.div`
// .message {
//     color: red;

// }
// `

const AllInputs = styled.div`
.allinputs input {
   width: 330px;  
}

p {
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 10px;
}

button {
    background-color: #0375BB;
    border-radius: 30px;
    font-size: 17px;
    color: white;
    border: none;
    width: 100px;
    height: 25px;
    margin-left: 450px;
    margin-top: 5px;
}

p input {
    margin-left: 80px;
    border-radius: 60px;
    background-color: #E3E3E3;

    border: none;
    height: 23px;
}

.name input {
    margin-left: 112px;
}

.firstname input {
    margin-left: 90px;
}

.entname input {
    margin-left: 32px;
}

.mail input {
    margin-left: 107px;
}

.password input {
    margin-left: 47px;
}

.confirmpassword input {
    margin-left: 154px;
}
`

const CreateModifyForm = () => {
    // const { signup } = useContext(UserContext)
   

    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
            bio: "",
        },
    })

    return (
        <AllInputs>
        <div className="allinputs">
            <form className='mt-3' onSubmit={formik.handleSubmit}> 
                <div className="name">
                    <p>Nom: {<input 
                    type="text"
                    className="form-control"  
                    name="name" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />} </p>
                    
                </div>

                <div className="firstname">
                <p>Prénom: {<input 
                    type="text"
                    className="form-control"  
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    />} </p>
                </div>

                <div className="entname">
                <p>Nom entreprise: {<input 
                    type="text"
                    className="form-control"  
                    name="entname"
                    value={formik.values.entname}
                    onChange={formik.handleChange}
                    />} </p>
                </div>

                <div className="mail">
                <p>Email: {<input 
                    type="text"
                    className="form-control"
                    name="mail"
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                    />} </p>
                    
                </div>

                <div className="password">
                <p>Mot de passe: { <input 
                    type="text"
                    className="form-control"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />} </p>
                </div>

                <div className="confirmpassword">
                <p>Confirmation de mot de passe: <br/>{<input 
                    type="text"
                    className="form-control"   
                    name="confirmpassword"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    />} </p>
                </div>

                <button className>Confirmer</button>
            </form>
        </div>
        </AllInputs>
    );
};

export default CreateModifyForm;