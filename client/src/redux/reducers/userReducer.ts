const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

export interface IUserAction {
  type: string;
  payload: any;
}

interface IUser {
  email: string;
  avatar: string | null;
}

export interface IUserState {
  user: IUser;
  isAuth: boolean;
}

const initialState: IUserState = {
  isAuth: false,
  user: { email: "", avatar: null },
};

export const userReducer = (
  state: IUserState = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isAuth: true };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export const setUser = (user: IUser) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
