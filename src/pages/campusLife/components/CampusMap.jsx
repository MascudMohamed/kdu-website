import React, { useState } from 'react';
import styles from './CampusMap.module.css';

const CampusMap = ({ buildings, activeBuilding, onBuildingSelect }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapWrapper}>
        {/* Campus Map Image */}
        <img 
          src="/assets/images/campus/campus-map.jpg" 
          alt="Global Campus Map - Click on buildings for details"
          className={styles.mapImage}
          onLoad={() => setIsImageLoaded(true)}
          useMap="#campusMap"
        />

        {/* Image Map for clickable areas */}
        <map name="campusMap">
          {buildings.map((building, index) => (
            <area
              key={building.id}
              shape="rect"
              coords={getBuildingCoordinates(index)}
              href={`#${building.id}`}
              alt={building.name}
              title={building.name}
              onClick={(e) => {
                e.preventDefault();
                onBuildingSelect(building);
              }}
              className={styles.mapArea}
            />
          ))}
        </map>

        {/* Floating Markers (CSS positioned) */}
        <div className={styles.markersContainer}>
          {buildings.map((building, index) => (
            <button
              key={building.id}
              className={`${styles.marker} ${building.id === activeBuilding.id ? styles.active : ''}`}
              style={{ 
                position: 'absolute',
                ...getMarkerPosition(index)
              }}
              onClick={() => onBuildingSelect(building)}
              aria-label={`View ${building.name} details`}
            >
              <span className={styles.markerLabel}>{building.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          {buildings.map((building) => (
            <button
              key={building.id}
              className={`${styles.tabItem} ${building.id === activeBuilding.id ? styles.active : ''}`}
              onClick={() => onBuildingSelect(building)}
            >
              {building.name}
            </button>
          ))}
        </div>
      </div>

      {/* Download Buttons */}
      <div className={styles.downloadButtons}>
        <a 
          href="/assets/images/campus/Gosung_Campusmap.jpg" 
          download
          className={styles.downloadBtn}
        >
          Download Map
        </a>
        <a 
          href="http://me2.do/x0rszNu7" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          Naver Street View
        </a>
      </div>
    </div>
  );
};

// Helper functions for positioning
const getBuildingCoordinates = (index) => {
  // These are approximate - adjust based on your actual map image
  const positions = [
    '50,50,250,150',    // Yanghyenwon
    '300,100,450,200',  // Seondeok Gym
    '100,200,300,300',  // School Yard
    '500,50,650,150',   // Sungreywon
    '200,300,400,400',  // Chunghyokwan
    '450,200,600,300',  // Sinwekwan
    '100,350,250,450',  // Munwhakwan
    '600,100,750,200',  // Woodang Library
    '350,350,500,450'   // Seondeokkwan
  ];
  return positions[index] || '0,0,100,100';
};

const getMarkerPosition = (index) => {
  // CSS positions for markers
  const positions = [
    { left: '15%', top: '20%' },
    { left: '45%', top: '15%' },
    { left: '25%', top: '40%' },
    { left: '70%', top: '20%' },
    { left: '35%', top: '55%' },
    { left: '60%', top: '35%' },
    { left: '20%', top: '70%' },
    { left: '80%', top: '20%' },
    { left: '55%', top: '65%' }
  ];
  return positions[index] || { left: '50%', top: '50%' };
};

export default CampusMap;