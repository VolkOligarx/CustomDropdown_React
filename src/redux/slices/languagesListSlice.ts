import { createSlice } from '@reduxjs/toolkit'

export const languagesList = createSlice({
  name: 'languagesList',
  initialState:[],
  reducers: {
    setLanguagesList: (state:Array<{}>, action:{payload:{id:number, flag:string, language:string}}) => {
        state.push(action.payload)
      },

    setRemoveLanguage: (state:Array<{id:number, flag:string, language:string}>, action:{payload:{id:number, flag?:string, language?:string}}) => {
      return state.filter((lng) => lng.id !== action.payload.id)
    },

  },
})
 
export const { setLanguagesList, setRemoveLanguage } = languagesList.actions

export default languagesList.reducer