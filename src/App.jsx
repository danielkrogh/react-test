import './App.scss';
import { MainNav } from './components/MainNav/MainNav';
import { MainFooter } from './components/MainFooter/MainFooter';
import { InfoSection } from './components/InfoSection/InfoSection';

function Section(props) {
  let bgColor = props.backgroundColor;
  let fontColor = "#000"

  if (props.darkMode) {
      bgColor = "#000";
      fontColor = "#fff"
  }

  const style = {
      backgroundColor: bgColor,
      color: fontColor
  }


  return (
    <section id="content" style={style}>Content</section>
  )
}

const infoArr = [
  {h2: "Hvad er CO2?", h3: "CO2 er en gasart der findes naturligt i Jordens atmosfære.", text: "CO2, findes naturligt i atmosfæren. Livet, er afhængigt af CO2 da det regulerer temperaturen på Jorden. CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved opnåes en balance i CO2 'regnskabet'. Afbrænding f.eks. af fossile brændstoffer, udleder CO2. Jordens skove og verdenshavene er den største 'producent' af den ilt, der er nødvendig, for liv på Jorden, som vi kender det. Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag!", img: "/icons/Icon-CO2.png", url: "/co2", color: "#896a5f"},
  {h2: "Klima og miljø?", h3: "Kort om klimaet og miljøet?", text: "Klima og miljø hænger sammen. Klimaforandringer påvirker miljøet og omvendt. Miljøet kan betragtes som en organisme, og er det vi baserer vores liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en dominoeffekt, der påvirker alle dele i miljøet. Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele kloden, med ændringer i temperatur og nedbør som følge. Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og infrastruktur, men også biodiversiteten som planter insekter mm. Din adfærd påvirker klimaet i størrer eller mindre grad.", img: "/icons/Icon-Climate.png", url: "/climate", color: "#6b879b"},
  {h2: "Hvordan kan jeg bidrage?", h3: "Hvordan belaster du miljøet mindst muligt i dagligdagen?", text: "Dit forbrug overordnet herunder din produktion af affald, bidrager til udledning af CO2. Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over dit valg i dagligdagen. Din bolig og den måde du har indrettet dig påvirker miljøet. Jordens skove og verdenshavene er den største 'producent' af den ilt, der er nødvendig, for liv på Jorden, som vi kender det. Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag! Du kan påvirke CO2 balancen, både ved at ændre små ting i din hverdag, eller ved aktivt deltage i kampen for et bedre miljø.", img: "/icons/Icon-Checklist.png", url: "/checklist", color: "#969a72"},
  {h2: "Deltag i arrangement", h3: "Deltag i eet af vores arrangementer og gør en forskel!", text: "“Combing” (”at fjerne affald”, f.eks. beachcombing: , rense stranden for affald og elementer der ikke hører hjemme her). Invester en dag med familien i naturen og sammen med andre. Tilmeld dig eet arrangement i dit område. Tag ansvar hjælp dit nærområde og os alle sammen generelt. Mød nye mennesker omkring en fælles opgave. Tag famillien med på en dag for naturen og vores fremtid. Tilmeld dig eet af vore arrangementer, eller modtag information om Klimatossen! Hent mere information på siden “Tilmeld Dig”.", img: "/icons/Icon-Arrangement.png", url: "/arrangement", color: "#caa79e"}
]

function App() {
  const darkMode = false;

  return (
    <div>
      <MainNav darkMode={darkMode}/>
      <Section darkMode={darkMode}/>
      {infoArr.map((info, index, array) => {
        return <InfoSection key={info.img} info={info} />
      })}
      <MainFooter darkMode={darkMode}/>
    </div>
  );
}

export default App;