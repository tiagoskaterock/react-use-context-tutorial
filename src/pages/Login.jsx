import { useContext } from "react"
import { LoginContext } from "../helpers/Context"

function Login() {

	const {loggedIn, setLoggedIn} = useContext(LoginContext)

	function handleLogin() {
		{ ! loggedIn ? setLoggedIn(true) : setLoggedIn(false) }
	}

	return (
		<>
			<h2>
				Login
				<button 
					style={{marginLeft: 10}}
					onClick={ handleLogin }
					> 
					Click to { ! loggedIn ? 'Login' : 'Logout' }
				</button>

			</h2>
			{loggedIn ? <p>You are logged In</p> : <p>You are not logged in</p>}
		</>
	)
}

export default Login
