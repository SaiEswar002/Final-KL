import React, { useState, useEffect } from 'react';

const AllocateResources = () => {
  const [beds, setBeds] = useState([]);
  const [allocations, setAllocations] = useState([]);
  const [newBedName, setNewBedName] = useState('');
  const [selectedBedId, setSelectedBedId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [allocationDate, setAllocationDate] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    try {
      setBeds(JSON.parse(localStorage.getItem('beds') || '[]'));
      setAllocations(JSON.parse(localStorage.getItem('allocations') || '[]'));
    } catch {}
  }, []);

  const saveBeds = (updated) => { setBeds(updated); localStorage.setItem('beds', JSON.stringify(updated)); };
  const saveAllocations = (updated) => { setAllocations(updated); localStorage.setItem('allocations', JSON.stringify(updated)); };

  const notify = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleAddBed = (e) => {
    e.preventDefault();
    if (!newBedName.trim()) { notify('Enter a bed identifier.', 'error'); return; }
    if (beds.some(b => b.name === newBedName.trim())) { notify('Bed name already exists.', 'error'); return; }
    saveBeds([...beds, { id: Date.now(), name: newBedName.trim(), status: 'Available' }]);
    setNewBedName('');
    notify('Bed added successfully.');
  };

  const handleAllocate = (e) => {
    e.preventDefault();
    if (!selectedBedId || !patientName || !allocationDate) { notify('Please fill all fields.', 'error'); return; }
    const bedIdx = beds.findIndex(b => b.id === parseInt(selectedBedId));
    if (bedIdx === -1 || beds[bedIdx].status !== 'Available') { notify('Selected bed is not available.', 'error'); return; }
    const updatedBeds = [...beds];
    updatedBeds[bedIdx] = { ...updatedBeds[bedIdx], status: 'Occupied' };
    saveBeds(updatedBeds);
    saveAllocations([...allocations, { id: Date.now(), bedName: updatedBeds[bedIdx].name, patientName, date: allocationDate }]);
    setSelectedBedId(''); setPatientName(''); setAllocationDate('');
    notify('Bed allocated successfully.');
  };

  const handleRelease = (allocationId) => {
    if (!window.confirm('Release this bed?')) return;
    const alloc = allocations.find(a => a.id === allocationId);
    if (!alloc) return;
    saveBeds(beds.map(b => b.name === alloc.bedName ? { ...b, status: 'Available' } : b));
    saveAllocations(allocations.filter(a => a.id !== allocationId));
    notify('Bed released successfully.');
  };

  const filteredBeds = beds.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()));
  const freeBeds = beds.filter(b => b.status === 'Available');
  const occupiedBeds = beds.filter(b => b.status === 'Occupied');

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>Resource Allocation</h1>
            <p className="text-muted">Manage hospital bed inventory and patient allocations.</p>
          </div>
        </div>

        {message.text && (
          <div className={`alert alert-${message.type === 'error' ? 'error' : 'success'}`}>{message.text}</div>
        )}

        {/* Stats */}
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ borderLeftColor: '#0f4c81' }}>
            <div className="stat-card-icon" style={{ background: '#dbeafe' }}>🏥</div>
            <div className="stat-card-info"><h3>{beds.length}</h3><p>Total Beds</p></div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#10b981' }}>
            <div className="stat-card-icon" style={{ background: '#d1fae5' }}>✅</div>
            <div className="stat-card-info"><h3>{freeBeds.length}</h3><p>Available</p></div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#ef4444' }}>
            <div className="stat-card-icon" style={{ background: '#fee2e2' }}>🔴</div>
            <div className="stat-card-info"><h3>{occupiedBeds.length}</h3><p>Occupied</p></div>
          </div>
        </div>

        <div className="resources-layout">
          {/* Left Column: Forms */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Add Bed */}
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>➕ Add New Bed</h3>
              <form onSubmit={handleAddBed} style={{ display: 'flex', gap: '10px' }}>
                <input className="form-control" placeholder="e.g. Ward A - Bed 1" value={newBedName}
                  onChange={e => setNewBedName(e.target.value)} style={{ flex: 1 }} />
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
            </div>

            {/* Allocate Bed */}
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>🏥 Allocate Bed to Patient</h3>
              <form onSubmit={handleAllocate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Patient Name *</label>
                  <input className="form-control" placeholder="Patient's full name" value={patientName}
                    onChange={e => setPatientName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Select Available Bed *</label>
                  <select className="form-control" value={selectedBedId} onChange={e => setSelectedBedId(e.target.value)} required>
                    <option value="">— Select a Bed —</option>
                    {freeBeds.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Admission Date *</label>
                  <input type="date" className="form-control" value={allocationDate}
                    onChange={e => setAllocationDate(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Allocate Bed</button>
              </form>
            </div>
          </div>

          {/* Right Column: Tables */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Beds Table */}
            <div>
              <div className="section-heading">
                <h2>All Beds</h2>
                <input className="form-control" placeholder="Search..." value={filter}
                  onChange={e => setFilter(e.target.value)} style={{ width: 200 }} />
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead><tr><th>Bed Identifier</th><th>Status</th></tr></thead>
                  <tbody>
                    {filteredBeds.length === 0
                      ? <tr><td colSpan="2" style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-secondary)' }}>No beds added yet.</td></tr>
                      : filteredBeds.map(b => (
                        <tr key={b.id}>
                          <td style={{ fontWeight: 500 }}>{b.name}</td>
                          <td><span className={`badge ${b.status === 'Available' ? 'badge-success' : 'badge-danger'}`}>{b.status}</span></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

            {/* Allocations Table */}
            <div>
              <div className="section-heading"><h2>Current Allocations</h2></div>
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead><tr><th>Patient</th><th>Bed</th><th>Date</th><th>Action</th></tr></thead>
                  <tbody>
                    {allocations.length === 0
                      ? <tr><td colSpan="4" style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-secondary)' }}>No active allocations.</td></tr>
                      : allocations.map(a => (
                        <tr key={a.id}>
                          <td style={{ fontWeight: 500 }}>{a.patientName}</td>
                          <td>{a.bedName}</td>
                          <td className="text-sm text-muted">{a.date}</td>
                          <td>
                            <button className="btn btn-sm" style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #fbbf24' }}
                              onClick={() => handleRelease(a.id)}>
                              Release Bed
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocateResources;