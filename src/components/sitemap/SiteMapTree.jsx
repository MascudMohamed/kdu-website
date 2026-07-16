import SiteMapNode from "./SiteMapNode";
import "../../styles/components/SiteMapTree.css";

export default function SiteMapTree({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="sitemap-empty">
        No sitemap data available.
      </div>
    );
  }

  return (
    <div className="sitemap-tree-wrapper">

      <ul className="sitemap-tree">

        {data.map((node) => (
          <SiteMapNode
            key={`${node.title}-${node.path}`}
            node={node}
          />
        ))}

      </ul>

    </div>
  );
}