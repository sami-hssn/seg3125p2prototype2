import { Link } from 'react-router-dom';
import './PostCard.css';
import { RightArrow, Save } from '../svg';
import { useState } from 'react';

export default function PostCard({
    title,
    description,
    linkObj,
    padding
}) {

    const [ isSaved, setIsSaved ] = useState( false )

    return (

        <div className={ padding ? 'post-card-container first-post-card' : 'post-card-container' }>
            <div className='post-card-img'/>
            <div className='post-card-inside-container'>
                { title ?
                <p>
                    { title }
                </p>
                : null }
                { description ?
                <p>
                    { description }
                </p>
                : null }
                { linkObj ?
                <div className='post-card-link-container'>
                    <Link to={ linkObj.link }>
                        <span>
                            { linkObj.title }
                        </span>
                        <div className='post-card-svg-container'>
                            <RightArrow />
                        </div>
                    </Link>
                </div>
                : null }
            </div>
            <button
                {
                    ...{
                        className : isSaved ? 'save-btn saved-btn' : 'save-btn',
                        onClick : () => {
                            setIsSaved( !isSaved )
                        }
                    }
                }
            >
                <Save />
            </button>
        </div>
        
    );

}