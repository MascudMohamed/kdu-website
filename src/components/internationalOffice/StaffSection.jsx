// src/components/internationalOffice/StaffSection.jsx
import React, { useState, useEffect } from 'react';
import { STAFF_INFORMATION } from '../../data/internationalOffice';
import '../../styles/pages/InternationalOffice.css';

export default function StaffSection() {
  const [staffData, setStaffData] = useState(STAFF_INFORMATION);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);

  // ============================================
  // BACKEND INTEGRATION POINTS
  // These functions should be replaced with API calls
  // ============================================

  // GET: Fetch staff data from backend
  const fetchStaffData = async () => {
    try {
      // const response = await fetch('/api/staff');
      // const data = await response.json();
      // setStaffData(data);
      console.log('Fetch staff data from backend');
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  // PUT: Update staff member
  const updateStaff = async (id, updatedData) => {
    try {
      // const response = await fetch(`/api/staff/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedData)
      // });
      // const data = await response.json();
      // setStaffData(staffData.map(staff => 
      //   staff.id === id ? data : staff
      // ));
      console.log('Update staff in backend:', id, updatedData);
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  // DELETE: Delete staff member
  const deleteStaff = async (id) => {
    try {
      // await fetch(`/api/staff/${id}`, {
      //   method: 'DELETE'
      // });
      // setStaffData(staffData.filter(staff => staff.id !== id));
      console.log('Delete staff from backend:', id);
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  // PATCH: Toggle staff active status
  const toggleStaffStatus = async (id, currentStatus) => {
    try {
      // const response = await fetch(`/api/staff/${id}/status`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ isActive: !currentStatus })
      // });
      // const data = await response.json();
      // setStaffData(staffData.map(staff =>
      //   staff.id === id ? data : staff
      // ));
      console.log('Toggle staff status in backend:', id, !currentStatus);
    } catch (error) {
      console.error('Error toggling staff status:', error);
    }
  };

  // ============================================
  // UI HANDLERS
  // These call the backend functions above
  // ============================================

  const handleEdit = (staff) => {
    setIsEditing(true);
    setEditingStaff({ ...staff });
  };

  const handleSaveEdit = () => {
    if (editingStaff) {
      updateStaff(editingStaff.id, editingStaff);
      setIsEditing(false);
      setEditingStaff(null);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingStaff(null);
  };

  const handleDeleteStaff = (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      deleteStaff(id);
    }
  };

  const handleToggleStatus = (id, currentStatus) => {
    toggleStaffStatus(id, currentStatus);
  };

  // ============================================
  // LIFECYCLE
  // ============================================

  useEffect(() => {
    fetchStaffData();
  }, []);

  // ============================================
  // RENDER
  // ============================================

  return (
    <section id="staff" className="office-section staff-section">
      <div className="staff-header">
        <h2>International Office Staff</h2>
      </div>

      {/* Edit Modal */}
      {isEditing && editingStaff && (
        <div className="staff-edit-modal">
          <div className="staff-edit-modal-content">
            <h3>Edit Staff Member</h3>
            <div className="staff-edit-form">
              <div className="staff-form-group">
                <label>Name:</label>
                <input 
                  type="text" 
                  value={editingStaff.name}
                  onChange={(e) => setEditingStaff({...editingStaff, name: e.target.value})}
                />
              </div>
              <div className="staff-form-group">
                <label>Position:</label>
                <input 
                  type="text" 
                  value={editingStaff.position}
                  onChange={(e) => setEditingStaff({...editingStaff, position: e.target.value})}
                />
              </div>
              <div className="staff-form-group">
                <label>Phone:</label>
                <input 
                  type="text" 
                  value={editingStaff.phone}
                  onChange={(e) => setEditingStaff({...editingStaff, phone: e.target.value})}
                />
              </div>
              <div className="staff-form-group">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={editingStaff.email}
                  onChange={(e) => setEditingStaff({...editingStaff, email: e.target.value})}
                />
              </div>
              <div className="staff-form-group">
                <label>Role:</label>
                <select 
                  value={editingStaff.role || 'staff'}
                  onChange={(e) => setEditingStaff({...editingStaff, role: e.target.value})}
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div className="staff-form-actions">
                <button onClick={handleSaveEdit} className="staff-save-btn">Save</button>
                <button onClick={handleCancelEdit} className="staff-cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Staff Grid */}
      <div className="staff-grid">
        {staffData.map((staff) => (
          <div 
            key={staff.id} 
            className={`staff-card ${!staff.isActive ? 'staff-inactive' : ''}`}
          >
            {/* Profile Image */}
            <div className="staff-image-container">
              <img 
                src={staff.image || `https://i.pravatar.cc/150?img=${staff.id + 10}`} 
                alt={staff.name}
                className="staff-image"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=3498db&color=fff&size=150`;
                }}
              />
            </div>

            <div className="staff-info">
              <h3 className="staff-name">{staff.name}</h3>
              <p className="staff-position">{staff.position}</p>
              <div className="staff-contact">
                <p className="staff-phone">
                  <span className="staff-icon">Tel</span> {staff.phone}
                </p>
                <p className="staff-email">
                  <span className="staff-icon">Email</span> {staff.email}
                </p>
              </div>
            </div>
            
            {/* Action Buttons - RBAC will control visibility */}
            <div className="staff-actions">
              
             
              
            </div>
            
            <div className={`staff-status-indicator ${staff.isActive ? 'staff-active' : 'staff-inactive'}`}>
              {staff.isActive ? '● Active' : '○ Inactive'}
            </div> 
          </div>
        ))}
      </div>
    </section>
  );
}