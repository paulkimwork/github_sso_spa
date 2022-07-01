import { useDispatch, useSelector } from "react-redux";
import { githubLogout } from "../store/actions/auth";
import style from "./DashboardWrapper.module.css";

const DashboardWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const authStates = useSelector(state => state.auth);
    const { user: { name } } = authStates;
    return (
        <div>
            <div className={style.header}>
                <h4 className={style.mainHeading}> {name ? `Hello ${name}, Welcome to Github SSO SPA` : "Github SSO SPA"}</h4>
                <button className={style.logoutBtn} onClick={() => dispatch(githubLogout.success())}>Logout</button>
            </div>
            {children}
        </div>
    )
}

export default DashboardWrapper;