const UserDashboard=()=>{
  return(
    <>
    <h1>User Dashboard</h1>
    <h2>{localStorage.getItem("role")}</h2>
    </>
  )
}
export default UserDashboard;