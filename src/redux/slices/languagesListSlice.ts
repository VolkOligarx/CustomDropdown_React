import { createSlice } from '@reduxjs/toolkit'

const initialState:{languages:Array<{id:number, language?:string, flag?:string}>} = {
  languages: []
}

export const languagesList = createSlice({
  name: 'languagesList',
  initialState,
  reducers: {
    setLanguagesList: (state, action) => {
        state.languages.push(action.payload);
      },

    setRemoveLanguage: (state, action) => {
      state.languages.forEach((element:{id:number}) => {
        if (element.id === action.payload.id) {
          return state.languages.splice(state.languages.indexOf(element), 1);
        }
      });
    },

  },
})
 
export const { setLanguagesList, setRemoveLanguage } = languagesList.actions

export default languagesList.reducer