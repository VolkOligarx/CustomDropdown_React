import { useState } from 'react'
import s from './dropdownMain.module.scss'
import classNames from 'classnames';
import DropdownList from '../DropdownList/DropdownList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRemoveLanguage } from '../../redux/slices/languagesListSlice';
import { language } from '../../types';

export const DropdownMain = () => {
    const [Seagull, setSeagull] = useState(s.main_Dropdown_Seagull_Closed)
    const selectLng = useAppSelector(state => state.languagesList)
    const dispatch = useAppDispatch()

    const seagullChecker = () => {
        Seagull ? setSeagull('') : setSeagull(s.main_Dropdown_Seagull_Closed)
    }

    const visibleCheck = () => {
        if (Seagull) {
            return {display: 'flex'}
        }
        else {
            return {display: 'none'}
        }
    }

    const removeLanguage = (language:language) => {
    dispatch(setRemoveLanguage({id: language.id, flag: language.flag, lng: language.lng}))
    }
    
    return (
        <>
        <div className={s.main}>
            <p className={s.main_Lng}>Язык</p>
            <div className={s.main_Dropdown_Input}>
                <div className={s.main_Dropdown_Selected}>
                    {
                        selectLng.map((language:language) => {
                            return (
                                <div className={s.main_Dropdown_Selected_Block} key={language.id}>
                                    <p className={s.main_Dropdown_Selected_Block_Lng} key={language.id} onClick={()=>(removeLanguage(language))}>{language.lng}</p>
                                    <img className={s.main_Dropdown_Selected_Block_Icon} key={language.id+1} onClick={()=>(removeLanguage(language))} src='./img/closeIcon.svg' alt='seagull'/> 
                                </div>      
                            )
                        })
                    }
                </div>
                <img onClick={()=>seagullChecker()} className={classNames(s.main_Dropdown_Seagull, Seagull)} src='./img/seagull.svg' alt='seagull'/>
            </div>
        </div>
        <DropdownList seagull={visibleCheck()}></DropdownList>
        </>
    )
}

export default DropdownMain