import React, { useEffect } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { useDispatch, useSelector } from "react-redux";
import { githubLogin } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './Login.module.css';
import { CircularProgress } from "@mui/material";

export default function Login() {
  const authStates = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      const requestData = {
        code: newUrl[1]
      };
      dispatch(githubLogin.request(requestData))
    }
  }, []);

  const { isLoggedIn, isLoading } = authStates;

  if (isLoggedIn) {
    return <Redirect to="/Coffees" />;
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.logincard}>
          <Box sx={{ minWidth: 475, minHeight: 200 }}>
            <Card variant="outlined">
              <CardContent>
                <div className={style.centre}>
                  <Typography className={style.heading} variant="h4" component="div">
                    Github SSO SPA
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <div className={style.loaderContainer}>
                  {isLoading ?
                    <CircularProgress color="inherit" /> :
                    <a
                      className={style.loginlink}
                      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}              >
                      <GithubIcon />
                      <span>Login with GitHub</span>
                    </a>}
                </div>
              </CardActions>
            </Card>
          </Box>
        </div>
      </div>
    </>
  );
}