import { Link } from 'react-router-dom';
import './Form.css';

export default function Form ({    
    title,
    fieldsArr,
    link,
    secondaryLink
}){

    return (

        <form className='form-container'>
            { title ? 
                <legend>
                    { title }
                </legend>         
            : null }
            { fieldsArr ?
                fieldsArr.map( ( iterator) => {
                    return (
                        <> 
                            <label htmlFor={ iterator.value }>
                                { iterator.name }
                            </label>
                            <input type="search" id={ iterator.value } />
                        </>
                    )
                })
            : null }
            { secondaryLink ? 
                <Link to={ secondaryLink.link } relative='path' className='secondary-link'>
                    { secondaryLink.title }
                </Link>
            : null }
            { link ?
                <button>
                    { link }
                </button>
            : null }
        </form>

    );

}