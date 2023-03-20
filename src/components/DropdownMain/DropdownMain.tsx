import { useState } from 'react'
import s from './dropdownMain.module.scss'
import classNames from 'classnames';
import DropdownList from '../DropdownList/DropdownList';
import { useAppSelector } from '../../redux/hooks';

export const DropdownMain = () => {
    const [Seagull, setSeagull] = useState(s.main_Dropdown_Seagull_Closed)
    const selectLng = useAppSelector(state => state.languagesList.languages)

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
    
    return (
        <>
        <div className={s.main}>
            <p className={s.main_Lng}>Язык</p>
            <div className={s.main_Dropdown_Input}>
                <div className={s.main_Dropdown_Selected}>
                    {
                        selectLng.map((allLanguages:{id:number, flag:string, language:string}) => {
                            return (
                                <>
                                <p className={s.main_Dropdown_Selected_Lng} key={allLanguages.id}>{allLanguages.language}</p>
                                <img className={s.main_Dropdown_Selected_Icon} key={Math.random()} src='./img/closeIcon.svg' alt='seagull'/> 
                                </>      
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