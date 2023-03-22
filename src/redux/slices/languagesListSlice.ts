import { createSlice } from '@reduxjs/toolkit'
import { language } from '../../types'

export const languagesList = createSlice({
  name: 'languagesList',
  initialState:[],
  reducers: {
    setLanguagesList: (state:Array<{}>, action:{payload:language}) => {
        state.push(action.payload)
      },

    setRemoveLanguage: (state:Array<language>, action:{payload:language}) => {
      return state.filter((lng) => lng.id !== action.payload.id)
    },

  },
})
 
export const { setLanguagesList, setRemoveLanguage } = languagesList.actions

export default languagesList.reducer