
 
 import {createContext, useState} from 'react';

 const AuthUserContxt = createContext({
    authUser: null,
    isLoadingData: true
 })

 export default useFirebaseAuth(){
    const [authUser, setAuthUser] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);
 }

export function AuthUserProvider({children}){
    const auth = useFirebaseAuth();
    return <AuthUserContxt.Provider value={auth}>{children}</AuthUserContxt.Provider>
}