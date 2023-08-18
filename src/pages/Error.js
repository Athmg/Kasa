import { Link } from "react-router-dom"
function Error() {
    return (
        <div className="error">
            <div className="main_error">
                <h1> 404</h1>
                <div className="container_error">
                    <p className="p_error">Oups! La page que
                    vous demandez n'existe pas.</p>

                    <Link to={'/'} >
                        <p className="link_error">
                            Retourner sur la page d’accueil
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Error