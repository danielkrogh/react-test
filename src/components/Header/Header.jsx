import styles from './Header.module.scss';

export const Header = () => {
    return (
      <section id={styles.container}>
          <img src="./img/Bg-Hero-Blue.png" alt="Baggrund"/>
          <div>
              <a href="/">
                  <img src="./img/KT-Logo.png" alt="Logo"/>
              </a>
          </div>
          <article>
              <p>"Det er rigtigt, at vi hver især kun bidrage lidt til den samlede løsning"</p>
              <p>"Lige så vigtigt er det, at vi slet ikke kan nå målet, uden at hver især bidrager en smule til det"</p>
          </article>
      </section>
    )
}