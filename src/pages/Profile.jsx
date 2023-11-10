import { useContext } from "react"
import { LoginContext } from "../helpers/Context"

function Profile() {

	const {loggedIn, setLoggedIn} = useContext(LoginContext)
	
	return (
		<>
			<h2>Profile</h2>
			{loggedIn ? <p>You are logged In</p> : <p>You are not logged in</p>}
		</>
	)
}

export default Profile
