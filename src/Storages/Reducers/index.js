import { combineReducers } from "redux";
import user from "./user";
import menu from "./menu";
import my_menu from "./myMenu";
import delete_menu from "./deleteMenu";
import add_menu from "./addMenu";
import update_menu from "./updateMenu";

const rootReducers = combineReducers({user, menu, my_menu, add_menu, update_menu, delete_menu})

export default rootReducers;