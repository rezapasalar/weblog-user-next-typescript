import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import User from '../../models/user'

interface GlobalState {
    userInfo: User,
    is_auth: boolean,
    is_loading: boolean
}

const initialState: GlobalState = {
    userInfo: {
        id: 164,
        is_admin: 0,
        name: "میترا",
        family: "ملکیان",
        day: 3,
        month: 'دی',
        year: 1365,
        code: '6598347665',
        mobile: '09332095657',
        email: "mitra@yahoo.com",
    },
    is_auth: true,
    is_loading: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUserInfo: (state: GlobalState, action: PayloadAction<User>) => {state.userInfo = action.payload},
        setIsAuth: (state: GlobalState, action: PayloadAction<boolean>) => {state.is_auth = action.payload},
        setIsLoading: (state: GlobalState, action: PayloadAction<boolean>) => {state.is_loading = action.payload},
    }
})

export const {setUserInfo, setIsAuth, setIsLoading} = globalSlice.actions

export default globalSlice.reducer