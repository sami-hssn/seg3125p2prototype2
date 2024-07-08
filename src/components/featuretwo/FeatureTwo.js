import { Link } from "react-router-dom";
import './FeatureTwo.css';

export default function FeatureTwo({ featuresArr }){

    return (

        <div className="feature-two">
            { featuresArr ?
                featuresArr.map( ( iterator ) => {

                    return (

                        <Link to={ iterator.link }>
                            <div className="feature-two-img" />
                        </Link>

                    )

                }) 
            : null }
        </div>

    );

}