import { Link } from "react-router-dom"
function Error() {
    return (
        <div className="">
            <div className="main_error">
                <h1> 404</h1>
                <div className="container_error">
                    <p>Oups! La page que</p>
                    <p>vous demandez n'existe pas.</p>
                    <Link to={'/'} >
                        <p className="main_link">
                            Retourner sur la page d’accueil
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Error