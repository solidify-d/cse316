const NavBar = () => {
  return(
    <div style = {{
      display : "flex",
      flexDirection : "row",
    }}
    >
      <a href=""><img src="" alt="Home Icon"/></a>
      <div style = {{
        alignItems : "center",
      }}>
        <a href="">Facility List</a>
        <a href="">Reservation</a>
        <a href="">User</a>
      </div>
      <a href=""><img src="" alt="User Icon"/></a>
    </div>
  )
}

export default NavBar;