import { createContext, useState, useEffect } from "react";
import Constants from "../helpers/Constants";

const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

  const [auth, setAuth] = useState({});
  const [counters, setCounters] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect( () => {
    authUser();
  }, [])

  const authUser = async () => {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if(!token || !user) {
        setLoading(false)
        return false;
    }    

    const userobj = JSON.parse(user);
    const userId = userobj.id;

    try{

        const url = Constants.BASE_URL+"users/profile/"+userId;
        const request = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " +token
            }
        })

        const data = await request.json();
        setAuth(data)

        const urlCounters = Constants.BASE_URL+"users/counter";
        const requestCounters = await fetch(urlCounters, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        const dataCounters = await requestCounters.json();

        setCounters(dataCounters)
        setLoading(false);


    }catch( error ){
        console.log(error.message)
    }


  }

  return (
    <AuthContext.Provider value={ {auth, setAuth, counters, loading} } >
        {children}
    </AuthContext.Provider>
  )

};

export default AuthContext;
