import styles from './RodapeLink.module.css'
const { Link } = require("react-router-dom");

function RodapeLink( { url, children }) {
    return(
        <Link to={url} className={styles.link_rodape}>
            <span>
                {children}
            </span>
        </Link>
    )
}

export default RodapeLink