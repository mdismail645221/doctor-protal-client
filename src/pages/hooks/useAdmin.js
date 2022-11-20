import {useState, useEffect} from 'react'


export const  useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdmainLoading] = useState(true);

    useEffect(()=> {
       if(email){
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=> res.json())
        .then(data=> {
            setIsAdmin(data.isAdmin)
            setIsAdmainLoading(false)
        })
       }
    },[email])

    return [isAdmin, isAdminLoading]
}