import React, { useState } from 'react';
import { campusBuildings } from './components/campusData';
import CampusMap from './components/CampusMap';
import BuildingDetail from './components/BuildingDetail';
import styles from './CampusFacilities.module.css';

const CampusFacilities = () => {
  const [activeBuilding, setActiveBuilding] = useState(campusBuildings[0]);

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span>/</span>
          <span>Campus Life</span>
          <span>/</span>
          <span>Campus Facilities</span>
          <span>/</span>
          <span className={styles.active}>Global Campus</span>
        </div>
        <h1 className={styles.pageTitle}>Global Campus</h1>
        <div className={styles.pageActions}>
          <button onClick={() => window.print()} className={styles.printBtn}>
            🖨️ PRINT
          </button>
          <button className={styles.zoomBtn}>+</button>
          <button className={styles.zoomBtn}>-</button>
        </div>
      </div>

      {/* Campus Map */}
      <CampusMap 
        buildings={campusBuildings}
        activeBuilding={activeBuilding}
        onBuildingSelect={setActiveBuilding}
      />

      {/* Building Details */}
      <BuildingDetail building={activeBuilding} />
    </div>
  );
};

export default CampusFacilities;