import { useContext } from "react"
import { LoginContext } from "../helpers/Context"

function Home() {

	const {loggedIn, setLoggedIn} = useContext(LoginContext)

	return (
		<>
			<h2>Home</h2>
			{loggedIn ? <p>You are logged In</p> : <p>You are not logged in</p>}
		</>
	)
}

export default Home
