import { useState } from "react";
import SitemapSection from "../../pages/sitemap/components/SitemapSection";
import "./SiteMapTree.css";

export default function SiteMapTree({ 
  data, 
  expandedSections = new Set(), 
  onToggleSection 
}) {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (itemId) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const renderTree = (items, level = 0) => {
    return items.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedSections.has(item.path) || expandedItems.has(item.path);
      const itemId = item.path || `item-${index}`;

      return (
        <div key={itemId} className={`tree-level level-${level}`}>
          <SitemapSection
            item={item}
            level={level}
            isExpanded={isExpanded}
            onToggle={() => {
              if (level === 0) {
                onToggleSection(item.path);
              } else {
                toggleItem(item.path);
              }
            }}
          />
          {hasChildren && isExpanded && (
            <div className="children-container">
              {renderTree(item.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="sitemap-tree">
      {data.length > 0 ? (
        renderTree(data)
      ) : (
        <div className="no-results">
          <p>No pages found matching your search.</p>
          <button onClick={() => window.location.reload()}>Clear Search</button>
        </div>
      )}
    </div>
  );
}