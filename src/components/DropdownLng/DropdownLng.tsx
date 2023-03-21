import s from './dropdownLng.module.scss'
import { setLanguagesList } from '../../redux/slices/languagesListSlice'
import { setRemoveLanguage } from '../../redux/slices/languagesListSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { lngArray } from '../../exports/exportArrays'

export const DropdownLng = (props:{languagesList:Array<{id:number, flag?:string, language?:string}>}) => {
    const dispatch = useAppDispatch()
    const selectLng = useAppSelector(state => state.languagesList)

    const checked = (languages:{id:number, flag:string, lng:string}) => {
        dispatch(setLanguagesList({id: languages.id, flag: languages.flag, language: languages.lng}))
    }

    const deleteChecked = (languages:{id:number, flag:string, lng:string}) => {
        dispatch(setRemoveLanguage({id: languages.id}))
    }

    const clickSender = (someLanguages:{id:number, flag:string, lng:string})=>{
        const sendOrNot = selectLng.filter((lng) =>
        lng.id === someLanguages.id)

        if (sendOrNot.length) {
            return deleteChecked(someLanguages)
        }
        else {
            return checked(someLanguages)
        }
    }
    
    const checkboxChecker = (someLanguages:{id:number}) => {
        const checkedOrNot = selectLng.filter((lng) =>
        lng.id === someLanguages.id)

        if (checkedOrNot.length) {
            return true
        }
        else {
            return false
        }
    }    

    const displayChanger = (language:any) => {
        const visibleArr = props.languagesList.filter((lng) => 
        lng.id === language.id
    )

        if (visibleArr.length) {
            return {display: 'flex'}
        }
        else {
            return {display: 'none'}
        }
    }

    return (
        <div className={s.lng}>
            {
                lngArray.map((language) => {
                    return (
                        <div className={s.lng_Container} style={displayChanger(language)} key={language.id}>
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