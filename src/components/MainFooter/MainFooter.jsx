import styles from './MainFooter.module.scss';
import logo from '../../assets/img/LOGO-FOOTER.png';

export const MainFooter = () => {
    return (
      <footer id={styles.container}>
          <section>
              <div>
                  <article>
                      <h3>KlimaTossen NPO</h3>
                      <p>Vesterbrogade 92</p>
                      <p>9000 Aalborg</p>
                      <a href="mailto:info@klima-tossen.dk">info@klima-tossen.dk</a>
                      <p><a href="tel:99223344">9922 3344</a> (Åben man - fre: 08.00 - 16.00)</p>
                      <h3>SAMARBEJDSPARTNERE:</h3>
                      <p><a className={styles.url} href="https://www.dn.dk/" target="_blank" rel="noreferrer">https://www.dn.dk/</a></p>
                      <p><a className={styles.url} href="http://www.miljoeportal.dk/" target="_blank" rel="noreferrer">http://www.miljoeportal.dk/</a></p>
                      <img src={logo} alt="Logo Footer"/>
                  </article>
                  <article>
                      <h3>Ja tak! Jeg vil gerne høre mere.</h3>
                      <form>
                          <div className={styles.textInput}>
                              <input type="text" id={styles.fullName} name="full-name" placeholder="Fulde navn"/>
                              <input type="text" id={styles.homeTown} name="home-town" placeholder="Hjem by"/>
                              <input type="email" id={styles.emailAddress} name="email-address" placeholder="Email adresse"/>
                              <input type="text" id={styles.phoneNumber} name="phone-number" placeholder="Telefon nummer"/>
                          </div>
                          <div className={styles.checkboxInput}>
                              <div id={styles.containerCall}>
                                  <label className={styles.checkbox} id={styles.callLabel} htmlFor="call">Få en samtale med Klimatossen</label>
                                  <input type="checkbox" name="call" id={styles.call}/>
                              </div>
                              <div id={styles.containerMail}>
                                  <label className={styles.checkbox} id={styles.mailLabel} htmlFor="mail">Modtag Nyhedsbrev</label>
                                  <input type="checkbox" name="mail" id={styles.mail}/>
                              </div>
                          </div>
                          <input className={styles.button} type="submit" value="Send"/>
                      </form>
                  </article>
              </div>
          </section>
      </footer>
    )
}