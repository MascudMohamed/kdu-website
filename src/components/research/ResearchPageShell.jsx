import ResearchHero from "./ResearchHero";
import ResearchSubNav from "./ResearchSubNav";

import "../../styles/components/ResearchPageShell.css";

export default function ResearchPageShell({

  hero,

  navigation,

  children,

}) {

  return (

    <>

      <ResearchHero hero={hero} />

      <ResearchSubNav items={navigation} />

      <main className="research-page">

        {children}

      </main>

    </>

  );

}