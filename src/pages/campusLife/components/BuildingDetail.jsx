import React from 'react';
import styles from './BuildingDetail.module.css';

const BuildingDetail = ({ building }) => {
  if (!building) return null;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailContent}>
        <div className={styles.detailHeader}>
          <h2 className={styles.buildingName}>{building.name}</h2>
          <span className={`${styles.buildingType} ${styles[building.type]}`}>
            {building.type}
          </span>
        </div>

        <div className={styles.detailBody}>
          <div className={styles.detailImage}>
            <img 
              src={building.image} 
              alt={building.name}
              onError={(e) => {
                e.target.src = '/assets/images/campus/placeholder.jpg';
              }}
            />
          </div>

          <div className={styles.detailInfo}>
            <p className={styles.description}>{building.description}</p>

            {/* Additional info badges */}
            <div className={styles.badges}>
              {building.gender && (
                <span className={styles.badge}>
                  👤 {building.gender} Dormitory
                </span>
              )}
              {building.capacity && (
                <span className={styles.badge}>
                  🏠 Capacity: {building.capacity}
                </span>
              )}
              {building.collection && (
                <span className={styles.badge}>
                  📚 {building.collection}
                </span>
              )}
              {building.target && (
                <span className={styles.badge}>
                  🎯 {building.target}
                </span>
              )}
            </div>

            {/* Facilities List */}
            {building.facilities && building.facilities.length > 0 && (
              <div className={styles.facilities}>
                <h4>Facilities:</h4>
                <ul className={styles.facilitiesList}>
                  {building.facilities.map((facility, index) => (
                    <li key={index} className={styles.facilityItem}>
                      ✓ {facility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;