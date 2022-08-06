import "./App.css"
import mainPic from "./assets/main.jpg"
import githubPic from "./assets/github.svg"

function App() {
	return (
		<div className="App">
			<img src={mainPic} />
			<a
				href="https://t.me/marc1k3y"
				className="telegram-callback">Написать в телеграм</a>
			<a
				href="https://github.com/marc1k3y"
				className="github-link">GitHub</a>
		</div>
	)
}

export default App
