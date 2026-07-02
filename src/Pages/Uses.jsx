import UsesComponent from "../components/UsesComponent";
import { usesContent } from "../data/siteContent";

const Uses = () => {
  return <UsesComponent title={usesContent.title} description={usesContent.description} items={usesContent.items} />;
};

export default Uses;
