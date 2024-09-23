const Alert = ({ children, onClose }) => {
  return (
    <>
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClose}/>
        </div>  
    </>
    
  )
}

export default Alert;