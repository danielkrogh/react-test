import styles from './MainNav.module.scss';


export const MainNav = () => {

    return (
        <header id={styles.container}>
            <nav>
                <ul>
                    <li><a href="/#">Start</a></li>
                    <li><a href="/#">Dit Co2</a></li>
                    <li><a href="/#">Clean Up</a></li>
                    <li><a href="/#">Tilmeld Dig</a></li>
                </ul>
            </nav>
        </header>
    )
}