
export const doLoginLocalStorage=(data)=>{

    localStorage.setItem('userData',JSON.stringify(data));
}

export const getDataFromLocalStorage=()=>{
    const user=localStorage.getItem('userData')
    if(user!=null)
    return JSON.parse(user)
     else
       return null;
}