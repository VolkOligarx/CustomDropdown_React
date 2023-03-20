import s from './dropdownLng.module.scss'
import { setLanguagesList } from '../../redux/slices/languagesListSlice'
import { setRemoveLanguage } from '../../redux/slices/languagesListSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { lngArray } from '../../exports/exportArrays'

export const DropdownLng = (props:{languagesList:Array<{id:number, flag?:string, language?:string}>}) => {
    const dispatch = useAppDispatch()
    const selectLng = useAppSelector(state => state.languagesList.languages)

    const checked = (languages:{id:number, flag:string, lng:string}) => {
        dispatch(setLanguagesList({id: languages.id, flag: languages.flag, language: languages.lng}))
    }

    const deleteChecked = (languages:{id:number}) => {
        dispatch(setRemoveLanguage({id: languages.id}))
    }

    const clickSender = (someLanguages:{id:number, flag:string, lng:string})=>{
        let id:number
        selectLng.forEach(element => {
        if (someLanguages.id === element.id) {
            return id = element.id
        }
        });
        if (selectLng.length === 0) {
            return checked(someLanguages)
        }
        else if (id === someLanguages.id) {
            return deleteChecked(someLanguages)
        }
        else {
            return checked(someLanguages)
        };
    }

    const visibleArr = []

    const visible = () => {
        props.languagesList.forEach(element => {
            visibleArr.push(element.id)
        })
    }
    visible()
    console.log(visibleArr)

    const displayChanger = (wholeLanguages:{id:number, flag:string, lng:string}) => {
        if (visibleArr.includes(wholeLanguages.id)) {
            return {display: 'flex'}
        }
        else {
            return {display: 'none'}
        }
    }

    return (
        <div className={s.lng}>
            {
                lngArray.map((allLanguages) => {
                    return (
                        <div className={s.lng_Container} style={displayChanger(allLanguages)} key={allLanguages.id}>
                            <div className={s.lng_Box}>
                                <img className={s.lng_Flag} src={allLanguages.flag} alt='flag'/>
                                <p>{allLanguages.lng}</p>
                            </div>
                            <label className={s.fakeCheckbox}>
                                <input className={s.lng_Checkbox} onChange={()=>(clickSender(allLanguages))} type='checkbox' name='fake' value='yes'/>
                                <span className={s.fakeSpan}></span>
                            </label>
                        </div>
                    )})}
        </div>
        )
}

export default DropdownLng