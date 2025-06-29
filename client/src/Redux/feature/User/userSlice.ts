import type { IUser } from "@/Model/SignUp_model";
import type { RootState } from "@/Redux/store";
import { createSlice } from "@reduxjs/toolkit";


const initialState: { user: IUser  } = {
  user: {
    name: "",
    email: "",
    role: null,
    password: "",
    image: ""
  }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }

})

export const {setUser}=userSlice.actions

export const selectUser=(state:RootState)=>state.user.user

export default userSlice.reducer