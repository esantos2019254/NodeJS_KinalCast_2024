
export const Register = ({switchAuthHandler}) => {
    return (
        <div className="register-container">
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Este es el componente de register
            </span>
        </div>
    )
}