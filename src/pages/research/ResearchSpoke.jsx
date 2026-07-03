import { useParams } from "react-router-dom";

import { hub, pages } from "../../data/research";

import ResearchPageShell from "../../components/research/ResearchPageShell";

import ResearchSpokeRenderer from "../../components/research/ResearchSpokeRenderer";

export default function ResearchSpoke() {

  const { page } = useParams();

  const current = pages[page];

  if (!current)
    return <h2 style={{ padding: "6rem" }}>Page Not Found</h2>;

  return (

    <ResearchPageShell

      hero={hub.hero}

      navigation={hub.navigation}

    >

      <ResearchSpokeRenderer page={current} />

    </ResearchPageShell>

  );

}