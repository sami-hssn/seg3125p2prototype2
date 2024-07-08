import Form from "../components/form/Form";
import NavBar from "../components/navbar/NavBar";
import '../styles/index.css'

function LoginPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <Form 
                        {
                            ...{
                                title: 'Login',
                                fieldsArr: [
                                    {
                                        name: 'Email',
                                        value: 'email'
                                    },
                                    {
                                        name: 'Password',
                                        value: 'password'
                                    }
                                ],
                                link: 'Sign In',
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

export default LoginPage;