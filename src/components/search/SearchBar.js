import { useState } from 'react';
import { Filter, Search } from '../svg';
import './SearchBar.css';

export default function SearchBar({ title }) {

    const [ isOpen, setIsOpen ] = useState( false )
    
    const familyFilterObj = [
        {
            name: "Bass",
            value: "bass"
        },
        {
            name: "Drums",
            value: "drum"
        },
        {
            name: "Fx",
            value: "fx"
        },
        {
            name: "Key",
            value: "key"
        },
        {
            name: "Synth",
            value: "synth"
        },
        {
            name: "Vocals",
            value: "vocals"
        }
    ]

    const bassFilterObj = [
        {
            name: "LoremTwo",
            value: "loremtwo"
        },
        {
            name: "LoremTwo2",
            value: "loremtwo2"
        },
        {
            name: "LoremTwo3",
            value: "loremtwo3"
        },
        {
            name: "LoremTwo4",
            value: "loremtwo4"
        }
    ]

    const drumsFilterObj = [
        {
            name: "LoremThr",
            value: "loremthr"
        },
        {
            name: "LoremThr2",
            value: "loremthr2"
        },
        {
            name: "LoremThr3",
            value: "loremthr3"
        },
        {
            name: "LoremThr4",
            value: "loremthr4"
        }
    ]

    return (

        <div className='search-bar'>
            <form className='search-container'>
                <label className='main-label'>
                    { title }
                </label>
                <div className='search-input-container'>
                    <Search />
                    <input type="search" placeholder="Search for a post..." />
                    <button 
                        className='filter-btn'
                        onClick={ ( e ) => {

                            e.preventDefault();
                            
                            setIsOpen( !isOpen )

                        }}
                    >
                        <Filter />
                    </button>
                </div>
            </form>
            { isOpen ?
            
            <form className='filter-form'>
                <fieldset>
                    <legend>
                        Family
                    </legend>
                    <div className='family-filter-container'>
                        {
                            familyFilterObj.map( ( iterator ) => {
                                return ( 

                                    <div className='filter-container green-btn'>
                                        <input 
                                            type="radio" 
                                            id={ iterator.value }
                                            name="family" 
                                            value={ iterator.value }
                                        />
                                        <label 
                                            htmlFor={ iterator.value }
                                        >
                                            { iterator.name }
                                        </label>
                                    </div>

                                )
                            })
                        }
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Bass
                    </legend>
                    <div className='default-filter-container'>
                        {
                            bassFilterObj.map( ( iterator ) => {

                                return (

                                    <div className='filter-container transparent-btn'>
                                        <input 
                                            type="radio" 
                                            id={ iterator.value }
                                            name="family" 
                                            value={ iterator.value }
                                        />
                                        <label 
                                            htmlFor={ iterator.value }
                                        >
                                            { iterator.name }
                                        </label>
                                    </div>

                                )

                            })
                        }
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Drums
                    </legend>
                    <div className='default-filter-container'>
                        {
                            drumsFilterObj.map( ( iterator ) => {

                                return (

                                    <div className='filter-container transparent-btn'>
                                        <input 
                                            type="radio" 
                                            id={ iterator.value }
                                            name="family" 
                                            value={ iterator.value }
                                        />
                                        <label 
                                            htmlFor={ iterator.value }
                                        >
                                            { iterator.name }
                                        </label>
                                    </div>
                                    
                                )

                            })
                        }
                    </div>
                </fieldset>
            </form>
                
            : null }
        </div>

    );

};