import { useState } from 'react';
import { lngArray } from '../../exports/exportArrays';
import DropdownLng from '../DropdownLng/DropdownLng'
import s from './dropdownList.module.scss'

export const DropdownList = (props:{seagull:{display:string}}) => {
    const [languages, setLanguages] = useState('');

    const filteredLanguages = lngArray.filter(lng => {
        return lng.lng.toLowerCase().includes(languages.toLowerCase())
    })

    return (
        <div className={s.container} style={props.seagull}>
            <div className={s.search}>
                <img className={s.search_Icon} src='./img/searchIcon.svg' alt='search'/>
                <input className={s.search_Input} onChange={(e)=>setLanguages(e.target.value)} type='search' placeholder='Поиск'/>
            </div>
            <DropdownLng languagesList={filteredLanguages} ></DropdownLng>
        </div>
        )
}

export default DropdownList