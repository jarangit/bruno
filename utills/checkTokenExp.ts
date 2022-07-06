import jwtDecode from "jwt-decode"

export const checkTokenExp = async (token: any) => {
 if(token){
  const {exp}:any = jwtDecode(token)
  console.log('%cMyProject%cline:4%cexp', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px', exp)
  const now = new Date().getTime()/1000
  console.log('%cMyProject%cline:6%cnow', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px', now)
  const check =  now < exp ? true : false
  if(!check){
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("currentBuildingID")
    window.location.reload()
  }
  return check
 }
}