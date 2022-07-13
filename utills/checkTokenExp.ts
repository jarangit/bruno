import jwtDecode from "jwt-decode"

export const checkTokenExp = async (token: any) => {
 if(token){
  const {exp}:any = jwtDecode(token)
  const now = new Date().getTime()/1000
  const check =  now < exp ? true : false
  if(!check){
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("currentBuildingID")
    window.location.reload()
  }
  return check
 }
}