import { Link } from "react-router-dom";
import "../../styles/components/SiteMapNode.css";

export default function SiteMapNode({ node, level = 0 }) {
  const hasChildren =
    Array.isArray(node.children) &&
    node.children.length > 0;

  return (
    <li className={`tree-node level-${level}`}>
      <div className="tree-card">
        <Link
          to={node.path}
          className="tree-link"
        >
          {node.title}
        </Link>
      </div>

      {hasChildren && (
        <ul className="tree-children">
          {node.children.map((child) => (
            <SiteMapNode
              key={`${child.title}-${child.path}`}
              node={child}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}