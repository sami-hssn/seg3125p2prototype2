import Form from "../components/form/Form";
import NavBar from "../components/navbar/NavBar";
import '../styles/index.css'

function SignupPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <Form 
                        {
                            ...{
                                title: 'Create Account',
                                fieldsArr: [
                                    {
                                        name: 'Name',
                                        value: 'name'
                                    },
                                    {
                                        name: 'Email',
                                        value: 'email'
                                    },
                                    {
                                        name: 'Username',
                                        value: 'username'
                                    },
                                    {
                                        name: 'Password',
                                        value: 'password'
                                    }
                                ],
                                link: 'Sign Up',
                                secondaryLink: {
                                    title: 'Forgot your password?',
                                    link: '/'
                                }
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;