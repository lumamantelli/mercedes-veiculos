import { Link } from 'react-router-dom'
import styles from './MenuSuspensoLink.module.css'

function MenuSuspensoLink({ url, imagem, children }) {
    return(
        <Link to={url} className={styles.link_menu_suspenso}>
            <span>
                {children}
            </span>
        </Link>
    )
}

export default MenuSuspensoLink