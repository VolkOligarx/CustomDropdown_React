import s from './dropdownLng.module.scss'
import { setLanguagesList } from '../../redux/slices/languagesListSlice'
import { setRemoveLanguage } from '../../redux/slices/languagesListSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { language } from '../../types'

export const DropdownLng = (props:{languagesList:Array<language>}) => {
    const dispatch = useAppDispatch()
    const selectLng = useAppSelector(state => state.languagesList)

    const checked = (language:language) => {
        dispatch(setLanguagesList({id: language.id, flag: language.flag, lng: language.lng}))
    }

    const deleteChecked = (language:language) => {
        dispatch(setRemoveLanguage({id: language.id, flag: language.flag, lng: language.lng}))
    }

    const clickSender = (someLanguage:language)=>{
        const sendOrNot = selectLng.filter((lng) =>
        lng.id === someLanguage.id)

        if (sendOrNot.length) {
            return deleteChecked(someLanguage)
        }
        else {
            return checked(someLanguage)
        }
    }
    
    const checkboxChecker = (someLanguage:{id:number}) => {
        const checkedOrNot = selectLng.filter((lng) =>
        lng.id === someLanguage.id)

        if (checkedOrNot.length) {
            return true
        }
        else {
            return false
        }
    }    

    return (
        <div className={s.lng}>
            {
                props.languagesList.map((language) => {
                    return (
                        <div className={s.lng_Container} key={language.id}>
                            <div className={s.lng_Box}>
                                <img className={s.lng_Flag} src={language.flag} alt='flag'/>
                                <p>{language.lng}</p>
                            </div>
                            <label className={s.fakeCheckbox}>
                                <input className={s.lng_Checkbox} onChange={()=>(clickSender(language))} type='checkbox' name='fake' checked={checkboxChecker(language)}/>
                                <span className={s.fakeSpan}></span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DropdownLng