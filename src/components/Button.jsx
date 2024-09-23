const Button = ({ children, onClick, color = 'dark' }) => {
    return (
      <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
      </>
    )
  }
  
  export default Button;