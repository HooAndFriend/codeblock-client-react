import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <Link to={"/user/login"}>
        <button>LOGIN</button>
      </Link>
    </div>
  )
}
