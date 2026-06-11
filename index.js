// Mock Data
const MOCK_DATA = {
    blocks: [
        { id: 'blockA', name: 'Block A', units: 40, status: 'Good' },
        { id: 'blockB', name: 'Block B', units: 50, status: 'Inspection' },
        { id: 'blockC', name: 'Block C', units: 40, status: 'Good' },
        { id: 'blockD', name: 'Block D', units: 60, status: 'Check Required' },
        { id: 'blockE', name: 'Block E', units: 48, status: 'Good' },
        { id: 'blockF', name: 'Block F', units: 52, status: 'Good' },
        { id: 'blockG', name: 'Block G', units: 44, status: 'Maintenance' },
        { id: 'blockH', name: 'Block H', units: 56, status: 'Good' }
    ],
    houses: {},
    staff: [
        { id: 1, name: 'Suresh Raina', role: 'Security Head', inTime: '09:00 AM', outTime: '--', dutyHours: '6.5 hrs', contact: '+91 98765 43210', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh', date: '2026-05-11', category: 'Security' },
        { id: 2, name: 'Deepak Chahar', role: 'Main Gate Guard', inTime: '06:05 AM', outTime: '--', dutyHours: '9.4 hrs', contact: '+91 98765 43211', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak', date: '2026-05-11', category: 'Security' },
        { id: 3, name: 'Mahendra Singh', role: 'Patrol Officer', inTime: '02:00 PM', outTime: '10:00 PM', dutyHours: '8.0 hrs', contact: '+91 98765 43212', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mahendra', date: '2026-05-10', category: 'Security' },
        { id: 4, name: 'Ravindra Jadeja', role: 'CCTV Operator', inTime: '10:00 PM', outTime: '--', dutyHours: '0.5 hrs', contact: '+91 98765 43213', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ravindra', date: '2026-05-11', category: 'Security' },
        { id: 5, name: 'KL Rahul', role: 'Security Guard', inTime: '08:00 AM', outTime: '04:00 PM', dutyHours: '8.0 hrs', contact: '+91 98765 43214', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KL', date: '2026-05-10', category: 'Security' },
        { id: 6, name: 'Virat Kohli', role: 'Security Head', inTime: '08:00 AM', outTime: '05:00 PM', dutyHours: '9.0 hrs', contact: '+91 98765 43215', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Virat', date: '2026-05-09', category: 'Security' },
        { id: 7, name: 'Rohit Sharma', role: 'Patrol Officer', inTime: '10:00 PM', outTime: '06:00 AM', dutyHours: '8.0 hrs', contact: '+91 98765 43216', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit', date: '2026-05-09', category: 'Security' },
        { id: 8, name: 'Shubman Gill', role: 'Main Gate Guard', inTime: '06:00 AM', outTime: '02:00 PM', dutyHours: '8.0 hrs', contact: '+91 98765 43217', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shubman', date: '2026-05-11', category: 'Security' },
        { id: 9, name: 'Hardik Pandya', role: 'CCTV Operator', inTime: '02:00 PM', outTime: '10:00 PM', dutyHours: '8.0 hrs', contact: '+91 98765 43218', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hardik', date: '2026-05-10', category: 'Security' },
        { id: 10, name: 'Jasprit Bumrah', role: 'Patrol Officer', inTime: '10:00 PM', outTime: '06:00 AM', dutyHours: '8.0 hrs', contact: '+91 98765 43219', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasprit', date: '2026-05-10', category: 'Security' },
        { id: 11, name: 'Amita Singh', role: 'Lead Cleaner', inTime: '08:00 AM', outTime: '--', dutyHours: '4.0 hrs', contact: '+91 98765 44001', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amita', date: '2026-05-11', category: 'Housekeeping' },
        { id: 12, name: 'Rajesh Kumar', role: 'Electrician', inTime: '09:30 AM', outTime: '--', dutyHours: '2.5 hrs', contact: '+91 98765 44002', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh', date: '2026-05-11', category: 'Maintenance' },
        { id: 13, name: 'Sunita Devi', role: 'Gardener', inTime: '07:00 AM', outTime: '03:00 PM', dutyHours: '8.0 hrs', contact: '+91 98765 44003', status: 'Off Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita', date: '2026-05-11', category: 'Housekeeping' },
        { id: 14, name: 'Pawan Kalyan', role: 'Plumber', inTime: '10:00 AM', outTime: '--', dutyHours: '2.0 hrs', contact: '+91 98765 44004', status: 'On Duty', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pawan', date: '2026-05-11', category: 'Maintenance' }
    ],
    guestPasses: [
        { id: 'GP001', guest: 'Rahul Dravid', unit: 'A-1002', validDate: '2026-05-11', code: '8829', status: 'Active' },
        { id: 'GP002', guest: 'Anil Kumble', unit: 'B-4005', validDate: '2026-05-11', code: '1092', status: 'Used' },
        { id: 'GP003', guest: 'Javagal Srinath', unit: 'C-8012', validDate: '2026-05-10', code: '4452', status: 'Expired' }
    ],
    complaints: [
        { id: 'CP101', title: 'Water leakage in Block A toilet', unit: 'A-1002', resident: 'Rahul Dravid', category: 'Plumbing', severity: 'High', date: '2026-06-01', status: 'Pending', desc: 'Water is constantly dripping from the ceiling toilet valve.', assignedStaff: 'Pawan Kalyan' },
        { id: 'CP102', title: 'Corridor lights not working', unit: 'B-4005', resident: 'Anil Kumble', category: 'Electrical', severity: 'Medium', date: '2026-05-30', status: 'In Progress', desc: 'The middle section lights in Floor 4 corridor are flickering and now completely out.', assignedStaff: 'Rajesh Kumar' },
        { id: 'CP103', title: 'Elevator door stuck issue', unit: 'C-8012', resident: 'Javagal Srinath', category: 'General Maintenance', severity: 'Critical', date: '2026-06-02', status: 'Resolved', desc: 'Elevator B door gets jammed when stopping on Floor 8.', assignedStaff: 'Rajesh Kumar' }
    ]
};

// Initialize unique IDs and passcodes for staff
MOCK_DATA.staff.forEach(s => {
    if (!s.empId) {
        const prefix = s.category === 'Security' ? 'SEC' : (s.category === 'Housekeeping' ? 'HSK' : 'MNT');
        s.empId = `${prefix}-${String(s.id).padStart(3, '0')}`;
    }
    if (!s.passcode) {
        s.passcode = String(1000 + (s.id * 17) % 9000);
    }
});

let currentRole = 'admin';
let currentBlock = null;
let currentStaffCategory = 'Security';
let selectedDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Procedurally generate 13 floors with 12 apartments each based on 1000s numbering
MOCK_DATA.houses = (function () {
    const data = {};
    const houseConfigs = [
        { type: 'Family', count: 4, rent: '$1,200', agreement: 'Active' },
        { type: 'Bachelor', count: 2, rent: '$1,000', agreement: 'Active' },
        { type: 'Family', count: 3, rent: '$1,300', agreement: 'Expired' },
        { type: 'Bachelor', count: 1, rent: '$900', agreement: 'Active' }
    ];

    ['blockA', 'blockB', 'blockC', 'blockD', 'blockE', 'blockF', 'blockG', 'blockH'].forEach(blockId => {
        data[blockId] = {};
        for (let f = 1; f <= 13; f++) {
            const floorName = `Floor ${f}`;
            data[blockId][floorName] = [];
            for (let h = 1; h <= 12; h++) {
                // Formatting: First floor is 1001-1012, 13th is 13001-13012
                const roomNum = (f * 1000) + h;
                const houseId = roomNum.toString();

                const c = houseConfigs[Math.floor(Math.random() * houseConfigs.length)];
                // 15% chance of pending dues
                const dues = Math.random() > 0.85 ? (Math.floor(Math.random() * 5) + 1) * 100 : 0;

                data[blockId][floorName].push({
                    id: houseId,
                    owner: 'Resident ' + houseId,
                    type: c.type,
                    count: c.count,
                    agreement: c.agreement,
                    rent: c.rent,
                    dues: dues
                });
            }
        }
    });
    return data;
})();

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Remove Splash Screen after animation
    setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) splash.remove();
    }, 3200);

    // Apply default role
    document.body.setAttribute('data-role', currentRole);
    document.getElementById('userName').innerText = currentRole === 'admin' ? 'Admin User' : 'Security Guard';
    document.getElementById('userRoleTxt').innerText = currentRole === 'admin' ? 'Full Access' : 'Limited Access';
    document.getElementById('userAvatar').innerText = currentRole === 'admin' ? 'A' : 'S';

    renderBuildings();
    renderStaffLog();
    renderCalendar();
    navigate('buildings', document.querySelector('.nav-item'));

    // Context-aware search
    const searchInput = document.getElementById('mainSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const activeView = document.querySelector('.view-section.active').id;

            if (activeView === 'view-buildings') {
                renderBuildings(query);
            } else if (activeView === 'view-attendance') {
                renderStaffLog(query);
            } else if (activeView === 'view-staff') {
                renderStaffDirectory(query);
            }
        });
    }

    const dirSearch = document.getElementById('staffDirSearch');
    if (dirSearch) {
        dirSearch.addEventListener('input', (e) => {
            renderStaffDirectory(e.target.value);
        });
    }
});

// Routing Simulation
function navigate(viewId, element) {
    // Nav highlight
    if (element) {
        document.querySelectorAll('.nav-menu .nav-item').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    // Views
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
    }

    if (viewId === 'staff') {
        renderStaffDirectory();
    } else if (viewId === 'attendance') {
        renderStaffLog();
        renderCalendar('secCalendarGrid', 'secCalFullDate');
    } else if (viewId === 'guests') {
        renderGuestPasses();
    } else if (viewId === 'complaints') {
        renderComplaints();
    }
}


// Render Buildings Grid
function renderBuildings(query = '') {
    const container = document.getElementById('blocksContainer');
    if (!container) return;
    container.innerHTML = '';

    const filteredBlocks = MOCK_DATA.blocks.filter(block =>
        block.name.toLowerCase().includes(query) ||
        block.id.toLowerCase().includes(query)
    );

    if (filteredBlocks.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
            <i class="ph ph-mask-sad" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
            <p>No blocks found matching "${query}"</p>
        </div>`;
        return;
    }

    filteredBlocks.forEach(block => {
        const card = document.createElement('div');
        card.className = 'b-card';
        card.onclick = () => openBlock(block.id, block.name);

        let iconColor = block.status === 'Good' ? 'var(--success)' : (block.status === 'Inspection' ? 'var(--warning)' : 'var(--danger)');

        card.innerHTML = `
            <div class="b-card-header">
                <div class="b-card-icon" style="color:${iconColor}; background:${iconColor}22;">
                    <i class="ph-fill ph-buildings"></i>
                </div>
                <span class="status-badge" style="color:${iconColor}">${block.status}</span>
            </div>
            <h3 style="margin-bottom:0.5rem; font-size:1.3rem;">${block.name}</h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">${block.units} Total Units</p>
        `;
        container.appendChild(card);
    });
}

// Visitor Log rendering removed

// Render Staff Log
// Set Staff Category
function setStaffCategory(cat, el) {
    currentStaffCategory = cat;

    // Sync all category tabs across different views
    document.querySelectorAll('.cat-tab').forEach(tab => {
        const tabText = tab.innerText.trim();
        const icon = tab.querySelector('i');

        if (tabText === cat || (tab.querySelector('h3') && tab.querySelector('h3').innerText === cat) || (tab.querySelector('h4') && tab.querySelector('h4').innerText === cat)) {
            tab.classList.add('active');
            tab.style.background = 'rgba(99, 102, 241, 0.1)';
            tab.style.borderColor = 'var(--primary)';
            if (icon) icon.style.color = 'var(--primary)';
        } else {
            tab.classList.remove('active');
            tab.style.background = 'transparent';
            tab.style.borderColor = 'var(--border)';
            if (icon) icon.style.color = 'var(--text-muted)';
        }
    });

    renderStaffLog();
    renderStaffDirectory();
}

function renderStaffDirectory(query = '') {
    const container = document.getElementById('staffDirectoryGrid');
    if (!container) return;
    container.innerHTML = '';

    // Get unique list of staff by name
    const uniqueStaff = [];
    const seenNames = new Set();

    MOCK_DATA.staff.forEach(s => {
        if (!seenNames.has(s.name)) {
            seenNames.add(s.name);
            uniqueStaff.push(s);
        }
    });

    const filtered = uniqueStaff.filter(s => {
        const matchesCategory = s.category === currentStaffCategory;
        const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase()) ||
            s.role.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    filtered.forEach(s => {
        const card = document.createElement('div');
        card.className = 'b-card';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.textAlign = 'center';
        card.style.padding = '2rem 1.5rem';

        card.innerHTML = `
            <img src="${s.avatar}" style="width: 80px; height: 80px; border-radius: 50%; background: var(--border); margin-bottom: 1.5rem; border: 3px solid var(--primary);">
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem; font-family: monospace;">${s.empId}</p>
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">${s.name}</h3>
            <p style="color: var(--primary); font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">${s.role}</p>
            <div style="display: flex; gap: 0.5rem; margin-top: auto; width: 100%;">
                <button class="btn-primary" style="padding: 0.5rem; font-size: 0.8rem; width: 100%; justify-content: center;" onclick="showStaffDetails(${s.id})">
                    <i class="ph-fill ph-identification-card"></i> Profile & Contact
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}


function renderStaffLog(query = '') {
    const container = document.getElementById('staffLogBody');
    if (!container) return;
    container.innerHTML = '';

    // Update Titles
    const titleDate = new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const attendanceTitle = document.getElementById('attendanceTitle');
    if (attendanceTitle) attendanceTitle.innerText = `Staff Attendance - ${titleDate}`;

    const staffLogTitle = document.getElementById('staffLogTitle');
    if (staffLogTitle) {
        const isToday = selectedDate === new Date().toISOString().split('T')[0];
        staffLogTitle.innerText = isToday ? `${currentStaffCategory} on Duty` : `${currentStaffCategory} Log - ${titleDate}`;
    }

    // Get unique list of staff for this category
    const categoryStaffMap = new Map();
    MOCK_DATA.staff.forEach(s => {
        if (s.category === currentStaffCategory) {
            if (!categoryStaffMap.has(s.name)) {
                categoryStaffMap.set(s.name, { ...s, date: selectedDate, status: 'Absent', inTime: '--', outTime: '--', dutyHours: '0.0 hrs' });
            }
            // If they have a record for the selected date, overwrite the default 'Absent' record
            if (s.date === selectedDate) {
                categoryStaffMap.set(s.name, s);
            }
        }
    });

    let displayStaff = Array.from(categoryStaffMap.values());

    // Filter by query
    if (query) {
        query = query.toLowerCase();
        displayStaff = displayStaff.filter(s => 
            s.name.toLowerCase().includes(query) ||
            s.role.toLowerCase().includes(query) ||
            s.status.toLowerCase().includes(query)
        );
    }

    // Update Stats
    const totalStaff = displayStaff.length;
    const onDutyCount = displayStaff.filter(s => s.status === 'On Duty').length;
    const totalHours = displayStaff.reduce((sum, s) => sum + parseFloat(s.dutyHours || 0), 0).toFixed(1);

    const totalStaffEl = document.getElementById('statTotalStaff');
    const onDutyEl = document.getElementById('statOnDuty');
    const totalHoursEl = document.getElementById('statTotalHours');

    if (totalStaffEl) totalStaffEl.innerText = totalStaff;
    if (onDutyEl) onDutyEl.innerText = onDutyCount;
    if (totalHoursEl) totalHoursEl.innerText = totalHours + 'h';

    if (displayStaff.length === 0) {
        container.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 3rem; color: var(--text-muted);">No staff found in this category.</td></tr>`;
        return;
    }

    displayStaff.forEach(s => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        tr.style.fontSize = '0.9rem';

        let statusColor = 'var(--text-muted)';
        if (s.status === 'On Duty') statusColor = 'var(--success)';
        else if (s.status === 'On Break') statusColor = 'var(--warning)';
        else if (s.status === 'Off Duty') statusColor = 'var(--primary)';
        else if (s.status === 'Absent') statusColor = 'var(--danger)';

        let actionHtml = '';
        if (s.status === 'On Duty') {
            actionHtml = `<button class="btn-secondary" onclick="checkOutStaff(${s.id})" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; border-color: var(--danger); color: var(--danger);">Check Out</button>`;
        } else if (s.status === 'Absent') {
            actionHtml = `<button class="btn-primary" onclick="openAttendanceModal(${s.id})" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">Mark Present</button>`;
        } else {
            actionHtml = `<span style="color: var(--text-muted); font-size: 0.75rem;">Completed</span>`;
        }

        tr.innerHTML = `
            <td style="padding: 1rem; display: flex; align-items: center; gap: 12px;">
                <img src="${s.avatar}" style="width: 32px; height: 32px; border-radius: 50%; background: var(--border); object-fit: cover;">
                <span style="font-weight: 500; color: var(--text-main);">${s.name}</span>
            </td>
            <td style="padding: 1rem; color: var(--text-muted);">${s.role}</td>
            <td style="padding: 1rem;"><i class="ph ph-clock-in" style="color:var(--success); margin-right:4px;"></i> ${s.inTime}</td>
            <td style="padding: 1rem;"><i class="ph ph-clock-out" style="color:var(--danger); margin-right:4px;"></i> ${s.outTime}</td>
            <td style="padding: 1rem; font-family: monospace; font-weight: 600; color: var(--primary);">${s.dutyHours}</td>
            <td style="padding: 1rem;">${s.contact}</td>
            <td style="padding: 1rem;">
                <span style="color: ${statusColor}; background: ${statusColor}11; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">
                    ${s.status}
                </span>
            </td>
            <td style="padding: 1rem;">${actionHtml}</td>
        `;
        container.appendChild(tr);
    });
}

function downloadStaffLog() {
    const titleDate = new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const filteredStaff = MOCK_DATA.staff.filter(s => {
        const matchesDate = s.date === selectedDate;
        const matchesCategory = s.category === currentStaffCategory;
        return matchesDate && matchesCategory;
    });

    if (filteredStaff.length === 0) {
        alert("No records to download for the selected date and category.");
        return;
    }

    // CSV Headers
    let csvContent = "Date,Category,Role,In Time,Out Time,Duty Hours,Contact,Status\n";

    // Add rows
    filteredStaff.forEach(s => {
        const row = [
            s.date,
            s.category,
            s.role,
            s.inTime,
            s.outTime,
            s.dutyHours,
            s.contact,
            s.status
        ].map(val => `"${val}"`).join(",");
        csvContent += row + "\n";
    });

    // Create Download Link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Urbanrise_StaffLog_${currentStaffCategory}_${selectedDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Render Guest Passes
function renderGuestPasses() {
    const container = document.getElementById('guestPassBody');
    if (!container) return;
    container.innerHTML = '';

    MOCK_DATA.guestPasses.forEach(pass => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        tr.style.cursor = 'pointer';
        tr.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') {
                showDigitalPass(pass);
            }
        };

        const statusColor = pass.status === 'Active' ? 'var(--success)' : (pass.status === 'Used' ? 'var(--warning)' : 'var(--text-muted)');
        const avatar = pass.photo || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(pass.guest)}`;

        tr.innerHTML = `
            <td style="padding: 1rem; display: flex; align-items: center; gap: 12px;">
                <img src="${avatar}" style="width: 32px; height: 32px; border-radius: 6px; background: var(--border); object-fit: cover;">
                <div>
                    <div style="font-weight: 500; color: var(--text-main);">${pass.guest}</div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">From: ${pass.from || 'N/A'} • Gate: ${pass.gate || 'Main'} • Time: ${pass.entryTime || '--'}</div>
                </div>
            </td>
            <td style="padding: 1rem; color: var(--text-muted);">${pass.unit}</td>
            <td style="padding: 1rem;">${pass.validDate}</td>
            <td style="padding: 1rem;"><code style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; color: var(--primary); font-family: monospace; font-weight: bold;">#${pass.code}</code></td>
            <td style="padding: 1rem;">
                <span style="color: ${statusColor}; background: ${statusColor}11; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">
                    ${pass.status}
                </span>
            </td>
            <td style="padding: 1rem;">
                <button class="btn-secondary" onclick="alert('Downloading ticket for ${pass.guest}...');" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">Download</button>
            </td>
        `;
        container.appendChild(tr);
    });
}

// Guest Pass Modal Logic
let guestStream = null;
let capturedGuestImageData = null;

function openGuestPassModal() {
    document.getElementById('newGuestName').value = '';
    document.getElementById('newGuestUnit').value = '';
    document.getElementById('newGuestOwner').value = '';
    document.getElementById('newGuestCodeInput').value = '';
    document.getElementById('newGuestDate').value = new Date().toISOString().split('T')[0];
    capturedGuestImageData = null;

    // Reset preview
    const video = document.getElementById('guestVideo');
    const photo = document.getElementById('guestCapturedPhoto');
    const placeholder = document.getElementById('guestCameraPlaceholder');
    const captureBtn = document.getElementById('guestCaptureBtn');

    if (video) video.style.display = 'none';
    if (photo) photo.style.display = 'none';
    if (placeholder) placeholder.style.display = 'block';
    if (captureBtn) captureBtn.style.display = 'none';

    document.getElementById('guestPassModal').classList.add('active');
}

function closeGuestPassModal() {
    stopGuestCamera();
    document.getElementById('guestPassModal').classList.remove('active');
}

async function startGuestCamera() {
    try {
        guestStream = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 400 } });
        const video = document.getElementById('guestVideo');
        video.srcObject = guestStream;
        video.style.display = 'block';
        document.getElementById('guestCameraPlaceholder').style.display = 'none';
        document.getElementById('guestCapturedPhoto').style.display = 'none';
        document.getElementById('guestCaptureBtn').style.display = 'block';
    } catch (err) {
        console.error("Camera access denied", err);
        alert("Could not access camera. Please check permissions.");
    }
}

function stopGuestCamera() {
    if (guestStream) {
        guestStream.getTracks().forEach(track => track.stop());
        guestStream = null;
    }
}

function captureGuestPhoto() {
    const video = document.getElementById('guestVideo');
    const canvas = document.getElementById('guestCanvas');
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedGuestImageData = canvas.toDataURL('image/jpeg');

    const photo = document.getElementById('guestCapturedPhoto');
    photo.src = capturedGuestImageData;
    photo.style.display = 'block';
    video.style.display = 'none';
    document.getElementById('guestCaptureBtn').style.display = 'none';

    stopGuestCamera();
}

function saveGuestPass() {
    const name = document.getElementById('newGuestName').value.trim();
    const unit = document.getElementById('newGuestUnit').value.trim();
    const from = document.getElementById('newGuestFrom').value.trim();
    const gate = document.getElementById('newGuestGate').value;
    const date = document.getElementById('newGuestDate').value;

    if (!name || !unit || !from) {
        alert('Please fill in all fields (Name, Unit, and Origin)');
        return;
    }

    if (!capturedGuestImageData) {
        alert('Guest Photo is mandatory! Please take a Live Photo before saving.');
        return;
    }

    // Capture current entry time
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes().toString().padStart(2, '0');
    const ampm = hh >= 12 ? 'PM' : 'AM';
    const entryTime = `${(hh % 12) || 12}:${mm} ${ampm}`;

    let code = document.getElementById('newGuestCodeInput').value.trim();
    if (!code) {
        code = Math.floor(1000 + Math.random() * 9000).toString();
    } else {
        if (code.length !== 4 || isNaN(code)) {
            alert('Pass Code must be a 4-digit number.');
            return;
        }
    }

    const newPass = {
        id: 'GP' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
        guest: name,
        unit: unit,
        owner: document.getElementById('newGuestOwner').value || 'N/A',
        from: from,
        gate: gate,
        entryTime: entryTime,
        validDate: date,
        code: code,
        status: 'Active',
        photo: capturedGuestImageData
    };

    MOCK_DATA.guestPasses.unshift(newPass);
    renderGuestPasses();
    closeGuestPassModal();

    // Show Digital ID Preview
    showDigitalPass(newPass);
}

function showDigitalPass(pass) {
    document.getElementById('idGuestName').innerText = pass.guest;
    document.getElementById('idGuestUnit').innerText = pass.unit;
    document.getElementById('idGuestOwner').innerText = pass.owner || 'N/A';
    document.getElementById('idGuestFrom').innerText = pass.from || 'N/A';
    document.getElementById('idGuestGate').innerText = pass.gate || 'Main Gate';
    document.getElementById('idEntryTime').innerText = `Entry: ${pass.entryTime}`;
    document.getElementById('idGuestCode').innerText = pass.code;
    document.getElementById('idGuestDate').innerText = `Valid Until: ${pass.validDate}`;

    const photoEl = document.getElementById('idGuestPhoto');
    photoEl.src = pass.photo || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(pass.guest)}`;

    const qrEl = document.getElementById('idGuestQRCode');
    if (qrEl) {
        qrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pass.code)}`;
    }

    document.getElementById('passPreviewModal').classList.add('active');
}

function closePassPreview() {
    document.getElementById('passPreviewModal').classList.remove('active');
}

// Block Details View
function openBlock(blockId, blockName) {
    currentBlock = blockId;
    document.getElementById('crumbBlockName').innerText = blockName;
    document.getElementById('blockTitle').innerText = blockName;

    const container = document.getElementById('floorsContainer');
    container.innerHTML = '';

    const floors = MOCK_DATA.houses[blockId];
    if (!floors) {
        container.innerHTML = '<p style="color:var(--text-muted)">No data populated for this block yet.</p>';
    } else {
        Object.keys(floors).forEach(floorName => {
            const floorDiv = document.createElement('div');
            floorDiv.className = 'floor-section';

            let housesHtml = '';
            floors[floorName].forEach(h => {
                const hasDues = h.dues > 0;
                housesHtml += `
                    <div class="house-card ${hasDues ? 'has-dues' : ''}" onclick="openHouseModal('${h.id}', '${blockId}', '${floorName}')">
                        <div class="house-head">
                            <span>${h.id}</span>
                            ${hasDues ? '<i class="ph-fill ph-warning-circle" style="color:var(--danger)"></i>' : '<i class="ph-fill ph-check-circle" style="color:var(--success)"></i>'}
                        </div>
                        <div class="house-body">
                            <p><strong>Owner:</strong> ${h.owner}</p>
                            <p><strong>Type:</strong> ${h.type}</p>
                        </div>
                    </div>
                `;
            });

            floorDiv.innerHTML = `
                <div class="floor-header" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('ph-caret-down'); this.querySelector('i').classList.toggle('ph-caret-up');">
                    <h3>${floorName}</h3>
                    <i class="ph ph-caret-down"></i>
                </div>
                <div class="houses-grid hidden">${housesHtml}</div>
            `;
            container.appendChild(floorDiv);
        });
    }

    // Switch view
    navigate('block', null);
}

// Open House Modal
function openHouseModal(houseId, blockId, floorName) {
    const house = MOCK_DATA.houses[blockId][floorName].find(h => h.id === houseId);
    if (!house) return;

    document.getElementById('mdlHouseNo').innerText = house.id;
    document.getElementById('mdlOwner').innerText = house.owner;
    document.getElementById('mdlType').innerText = house.type;
    const emailEl = document.getElementById('mdlEmail');
    if (emailEl) {
        emailEl.innerText = house.id === '1001' ? 'owner1001@example.com' : `owner${house.id}@example.com`;
    }

    const phoneEl = document.getElementById('mdlPhone');
    if (phoneEl) {
        phoneEl.innerText = house.id === '1001' ? '+91 9000000000' : '+91 9876543210';
    }

    document.getElementById('houseModal').classList.add('active');
}

function closeHouseModal() {
    document.getElementById('houseModal').classList.remove('active');
}

// Staff Modal Logic
let stream = null;
let capturedImageData = null;

function openAddStaffModal() {
    document.getElementById('newStaffName').value = '';
    document.getElementById('newStaffRole').value = '';
    document.getElementById('newStaffContact').value = '';
    document.getElementById('newStaffCategory').selectedIndex = 0;
    document.getElementById('staffModal').classList.add('active');

    // Reset preview
    document.getElementById('staffVideo').style.display = 'none';
    document.getElementById('capturedPhoto').style.display = 'none';
    document.getElementById('cameraPlaceholder').style.display = 'block';
    document.getElementById('captureBtn').style.display = 'none';
}

function closeStaffModal() {
    stopCamera();
    document.getElementById('staffModal').classList.remove('active');
}

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 300 } });
        const video = document.getElementById('staffVideo');
        video.srcObject = stream;
        video.style.display = 'block';
        document.getElementById('cameraPlaceholder').style.display = 'none';
        document.getElementById('capturedPhoto').style.display = 'none';
        document.getElementById('captureBtn').style.display = 'flex';
    } catch (err) {
        console.error("Camera error:", err);
        alert("Could not access camera. Please check permissions.");
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

function capturePhoto() {
    const video = document.getElementById('staffVideo');
    const canvas = document.getElementById('staffCanvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedImageData = canvas.toDataURL('image/jpeg');

    const photo = document.getElementById('capturedPhoto');
    photo.src = capturedImageData;
    photo.style.display = 'block';
    video.style.display = 'none';
    document.getElementById('captureBtn').style.display = 'none';

    stopCamera();
}

function saveNewStaff() {
    const name = document.getElementById('newStaffName').value.trim();
    const role = document.getElementById('newStaffRole').value.trim();
    const cat = document.getElementById('newStaffCategory').value;
    const contact = document.getElementById('newStaffContact').value.trim();

    if (!name || !role || !contact) {
        alert('Please fill in all fields (Name, Role, and Contact)');
        return;
    }

    const finalAvatar = capturedImageData ? capturedImageData : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
    processStaffSave(name, role, cat, contact, finalAvatar);
}

function processStaffSave(name, role, cat, contact, avatar) {
    const newId = Date.now();
    const prefix = cat === 'Security' ? 'SEC' : (cat === 'Housekeeping' ? 'HSK' : 'MNT');
    const empId = `${prefix}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    const passcode = String(Math.floor(1000 + Math.random() * 9000));

    const newStaff = {
        id: newId,
        empId: empId,
        passcode: passcode,
        name: name,
        role: role,
        category: cat,
        inTime: '--',
        outTime: '--',
        dutyHours: '0.0 hrs',
        contact: contact,
        status: 'Off Duty',
        avatar: avatar,
        date: selectedDate
    };

    MOCK_DATA.staff.unshift(newStaff);
    renderStaffDirectory();
    renderStaffLog();
    closeStaffModal();
    alert(`${name} registered successfully as ${role} in ${cat} department! Passcode is ${passcode}`);
}

function checkOutStaff(id) {
    const staff = MOCK_DATA.staff.find(s => s.id === id);
    if (!staff) return;

    const now = new Date();
    const outTimeRaw = prompt("Enter Out-Time (HH:MM) 24hr format",
        now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'));

    if (!outTimeRaw) return;

    // Helper to format time
    const formatTime = (raw) => {
        const [h, m] = raw.split(':');
        const hh = parseInt(h);
        const ampm = hh >= 12 ? 'PM' : 'AM';
        const h12 = (hh % 12) || 12;
        return `${h12}:${m} ${ampm}`;
    };

    staff.outTime = formatTime(outTimeRaw);
    staff.status = 'Off Duty';

    // Calculate Hours
    if (staff.inTimeRaw) {
        const [inH, inM] = staff.inTimeRaw.split(':').map(Number);
        const [outH, outM] = outTimeRaw.split(':').map(Number);

        let diff = (outH * 60 + outM) - (inH * 60 + inM);
        if (diff < 0) diff += 24 * 60;

        staff.dutyHours = (diff / 60).toFixed(1) + ' hrs';
    }

    renderStaffLog();
}

function renderCalendar(gridId = 'fullCalendarGrid', dateHeaderId = 'calFullDate') {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    // Clear existing days (keep headers)
    const headers = Array.from(grid.querySelectorAll('.cal-day-header'));
    grid.innerHTML = '';
    headers.forEach(h => grid.appendChild(h));

    const now = new Date();
    // Use selectedDate to determine which month to show if we wanted, 
    // but for now let's stick to current month.
    const viewDate = new Date(selectedDate);
    const month = viewDate.getMonth();
    const year = viewDate.getFullYear();

    // Set Header Date (MM/DD/YYYY)
    const fullDateEl = document.getElementById(dateHeaderId);
    if (fullDateEl) {
        const mm = (month + 1).toString().padStart(2, '0');
        const dd = viewDate.getDate().toString().padStart(2, '0');
        fullDateEl.innerText = `${mm}/${dd}/${year}`;
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDaysInMonth = new Date(year, month, 0).getDate();

    // Previous Month Days
    for (let i = firstDay - 1; i >= 0; i--) {
        const cell = document.createElement('div');
        cell.className = 'cal-day-cell other-month';
        cell.innerText = prevDaysInMonth - i;
        grid.appendChild(cell);
    }
    // Current Month Days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'cal-day-cell';

        const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        if (dateStr === selectedDate) dayEl.classList.add('today');

        dayEl.innerText = day;
        dayEl.style.cursor = 'pointer';
        dayEl.onclick = () => {
            selectedDate = dateStr;
            renderCalendar('fullCalendarGrid', 'calFullDate');
            renderCalendar('secCalendarGrid', 'secCalFullDate');
            renderStaffLog();
        };

        grid.appendChild(dayEl);
    }

    // Next Month Days (fill up to 42 cells for 6 rows)
    const currentCells = grid.children.length - 7; // subtract headers
    const remaining = 42 - currentCells;
    for (let i = 1; i <= remaining; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'cal-day-cell other-month';
        dayEl.innerText = i;
        grid.appendChild(dayEl);
    }
}

// Staff Details Modal Logic
let activeProfileStaffId = null;
let profileStream = null;

function showStaffDetails(id) {
    activeProfileStaffId = id;
    cancelProfileCamera(); // Reset state

    const staff = MOCK_DATA.staff.find(s => s.id === id);
    if (!staff) return;

    // Generate random age/gender/address if missing to ensure data is present
    if (!staff.age) {
        staff.age = Math.floor(Math.random() * 30) + 22; // 22 to 51
        staff.gender = (staff.name.includes('Amita') || staff.name.includes('Sunita') || staff.name.includes('Devi')) ? 'Female' : 'Male';
        staff.address = `No ${Math.floor(Math.random() * 100) + 1}, Urbanrise Staff Quarters, Block ${String.fromCharCode(65 + Math.floor(Math.random() * 4))}`;
    }

    document.getElementById('sdEmpId').innerText = staff.empId;
    document.getElementById('sdPasscode').innerText = staff.passcode;
    document.getElementById('sdPhoto').src = staff.avatar;
    document.getElementById('sdName').innerText = staff.name;
    document.getElementById('sdRole').innerText = staff.role;
    document.getElementById('sdAge').innerText = staff.age;
    document.getElementById('sdGender').innerText = staff.gender;
    document.getElementById('sdContact').innerText = staff.contact;
    document.getElementById('sdAddress').innerText = staff.address;

    document.getElementById('staffDetailsModal').classList.add('active');
}

function closeStaffDetailsModal() {
    cancelProfileCamera();
    document.getElementById('staffDetailsModal').classList.remove('active');
}

async function toggleProfileCamera() {
    const video = document.getElementById('profileVideo');
    const photo = document.getElementById('sdPhoto');
    const controls = document.getElementById('profileCaptureControls');
    const icon = document.getElementById('profileCameraIcon');

    if (profileStream) {
        cancelProfileCamera();
    } else {
        try {
            profileStream = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 400 } });
            video.srcObject = profileStream;
            video.style.display = 'block';
            photo.style.display = 'none';
            controls.style.display = 'flex';
            icon.className = 'ph ph-camera-slash';
        } catch (err) {
            console.error("Camera error:", err);
            alert("Could not access camera for profile photo update.");
        }
    }
}

function cancelProfileCamera() {
    if (profileStream) {
        profileStream.getTracks().forEach(track => track.stop());
        profileStream = null;
    }
    const video = document.getElementById('profileVideo');
    const photo = document.getElementById('sdPhoto');
    const controls = document.getElementById('profileCaptureControls');
    const icon = document.getElementById('profileCameraIcon');

    if (video) video.style.display = 'none';
    if (photo) photo.style.display = 'block';
    if (controls) controls.style.display = 'none';
    if (icon) icon.className = 'ph ph-camera';
}

function captureProfilePhoto() {
    const video = document.getElementById('profileVideo');
    const canvas = document.getElementById('profileCanvas');
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/jpeg');

    // Update data in mock
    MOCK_DATA.staff.forEach(s => {
        if (s.id === activeProfileStaffId) {
            s.avatar = dataUrl;
        }
    });

    // Update DOM
    document.getElementById('sdPhoto').src = dataUrl;

    // Refresh directory and logs
    renderStaffDirectory();
    renderStaffLog();

    // Close camera
    cancelProfileCamera();
}

// Mark Attendance Logic
let attStream = null;
let attCapturedPhotoData = null;

function openAttendanceModal(staffId = null) {
    const select = document.getElementById('attStaffSelect');
    select.innerHTML = '';

    // Reset Verification State
    attCapturedPhotoData = null;
    document.getElementById('attVerifyCode').value = '';
    
    const video = document.getElementById('attVideo');
    const photo = document.getElementById('attCapturedPhoto');
    const placeholder = document.getElementById('attCameraPlaceholder');
    const captureBtn = document.getElementById('attCaptureBtn');
    
    if (video) video.style.display = 'none';
    if (photo) photo.style.display = 'none';
    if (placeholder) placeholder.style.display = 'block';
    if (captureBtn) captureBtn.style.display = 'none';

    // Find unique staff names for the current category
    const categoryStaff = [];
    const seenNames = new Set();
    MOCK_DATA.staff.forEach(s => {
        if (s.category === currentStaffCategory && !seenNames.has(s.name)) {
            seenNames.add(s.name);
            categoryStaff.push(s);
        }
    });

    // Check if they are already on duty today
    const availableStaff = categoryStaff.filter(s => {
        const todayRecord = MOCK_DATA.staff.find(record => record.name === s.name && record.date === selectedDate);
        return !todayRecord || (todayRecord.status !== 'On Duty' && todayRecord.status !== 'Off Duty');
    });

    if (availableStaff.length === 0) {
        alert('All staff in this category have attendance records for ' + selectedDate);
        return;
    }

    availableStaff.forEach(s => {
        const option = document.createElement('option');
        option.value = s.id;
        option.innerText = s.name + ' - ' + s.role;
        select.appendChild(option);
    });

    if (staffId) {
        select.value = staffId;
    }

    // Set default time to now
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('attInTime').value = `${hh}:${mm}`;

    document.getElementById('attendanceModal').classList.add('active');
}

function closeAttendanceModal() {
    stopAttCamera();
    document.getElementById('attendanceModal').classList.remove('active');
}

async function startAttCamera() {
    try {
        attStream = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 400 } });
        const video = document.getElementById('attVideo');
        video.srcObject = attStream;
        video.style.display = 'block';
        document.getElementById('attCameraPlaceholder').style.display = 'none';
        document.getElementById('attCapturedPhoto').style.display = 'none';
        document.getElementById('attCaptureBtn').style.display = 'block';
    } catch (err) {
        console.error("Camera error:", err);
        alert("Could not access camera. Please check permissions or use the Verification Code fallback.");
    }
}

function stopAttCamera() {
    if (attStream) {
        attStream.getTracks().forEach(track => track.stop());
        attStream = null;
    }
}

function captureAttPhoto() {
    const video = document.getElementById('attVideo');
    const canvas = document.getElementById('attCanvas');
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    attCapturedPhotoData = canvas.toDataURL('image/jpeg');

    const photo = document.getElementById('attCapturedPhoto');
    photo.src = attCapturedPhotoData;
    photo.style.display = 'block';
    video.style.display = 'none';
    document.getElementById('attCaptureBtn').style.display = 'none';

    stopAttCamera();
}

function verifyFaceSimilarity(imgData1, imgData2) {
    return new Promise((resolve) => {
        const img1 = new Image();
        const img2 = new Image();
        img1.crossOrigin = "anonymous";
        img2.crossOrigin = "anonymous";
        let loaded = 0;
        
        const compare = () => {
            loaded++;
            if (loaded === 2) {
                try {
                    const canvas1 = document.createElement('canvas');
                    const canvas2 = document.createElement('canvas');
                    canvas1.width = 16;
                    canvas1.height = 16;
                    canvas2.width = 16;
                    canvas2.height = 16;
                    
                    const ctx1 = canvas1.getContext('2d');
                    const ctx2 = canvas2.getContext('2d');
                    
                    ctx1.drawImage(img1, 0, 0, 16, 16);
                    ctx2.drawImage(img2, 0, 0, 16, 16);
                    
                    const data1 = ctx1.getImageData(0, 0, 16, 16).data;
                    const data2 = ctx2.getImageData(0, 0, 16, 16).data;
                    
                    let diff = 0;
                    for (let i = 0; i < data1.length; i += 4) {
                        diff += Math.abs(data1[i] - data2[i]);
                        diff += Math.abs(data1[i+1] - data2[i+1]);
                        diff += Math.abs(data1[i+2] - data2[i+2]);
                    }
                    
                    const maxDiff = 16 * 16 * 3 * 255;
                    const similarity = 1 - (diff / maxDiff);
                    resolve(similarity);
                } catch (e) {
                    console.error("Comparison error:", e);
                    resolve(0);
                }
            }
        };
        
        img1.onerror = () => resolve(0);
        img2.onerror = () => resolve(0);
        img1.onload = compare;
        img2.onload = compare;
        
        img1.src = imgData1;
        img2.src = imgData2;
    });
}

async function saveAttendance() {
    const staffId = document.getElementById('attStaffSelect').value;
    const inTimeRaw = document.getElementById('attInTime').value;
    const verifyCode = document.getElementById('attVerifyCode').value.trim();

    if (!staffId || !inTimeRaw) {
        alert("Please select staff and in-time.");
        return;
    }

    if (!attCapturedPhotoData && !verifyCode) {
        alert("Verification required: Please either capture a live photo or enter a verification code.");
        return;
    }
    
    // Find original staff details
    const originalStaff = MOCK_DATA.staff.find(s => s.id == staffId);

    if (!attCapturedPhotoData && verifyCode) {
        if (verifyCode.length !== 4) {
            alert("Please enter a valid 4-digit verification code.");
            return;
        }
        if (verifyCode !== originalStaff.passcode) {
            alert(`Incorrect verification code for ${originalStaff.name}. Please enter their correct passcode.`);
            return;
        }
    }

    // If live photo captured
    if (attCapturedPhotoData) {
        const saveBtn = document.querySelector('#attendanceModal .modal-footer .btn-primary');
        const originalText = saveBtn.innerText;
        saveBtn.innerText = "Verifying Face...";
        saveBtn.disabled = true;
        
        // Artificial processing delay
        await new Promise(r => setTimeout(r, 1200));
        
        const similarity = await verifyFaceSimilarity(originalStaff.avatar, attCapturedPhotoData);
        
        saveBtn.innerText = originalText;
        saveBtn.disabled = false;
        
        if (similarity < 0.78) {
            alert(`Face Verification Failed! The captured photo does not match the registered profile photo for ${originalStaff.name} (Match Score: ${(similarity * 100).toFixed(1)}%).`);
            return;
        }
    }

    // Format time
    const [h, m] = inTimeRaw.split(':');
    const hh = parseInt(h);
    const ampm = hh >= 12 ? 'PM' : 'AM';
    const h12 = (hh % 12) || 12;
    const formattedInTime = `${h12}:${m} ${ampm}`;

    const newAttendanceRecord = {
        id: Date.now(),
        empId: originalStaff.empId,
        name: originalStaff.name,
        role: originalStaff.role,
        category: originalStaff.category,
        contact: originalStaff.contact,
        avatar: attCapturedPhotoData ? attCapturedPhotoData : originalStaff.avatar,
        date: selectedDate,
        inTime: formattedInTime,
        inTimeRaw: inTimeRaw,
        outTime: '--',
        dutyHours: '0.0 hrs',
        status: 'On Duty'
    };

    MOCK_DATA.staff.unshift(newAttendanceRecord);
    renderStaffLog();
    closeAttendanceModal();
}

function findOwnerByUnit(unitString) {
    if (!unitString) return '';
    const cleanUnit = unitString.toUpperCase().trim();
    
    // Check if it starts with Block letter, like "A-1001", "A 1001", "A1001"
    let targetBlock = null;
    let targetHouseId = cleanUnit;
    
    const match = cleanUnit.match(/^([A-H])[- ]?(\d+)$/);
    if (match) {
        targetBlock = 'block' + match[1];
        targetHouseId = match[2];
    } else {
        // Fallback: If they only entered a number like "1001", we check if it is exactly a number
        const numberMatch = cleanUnit.match(/^(\d+)$/);
        if (numberMatch) {
            targetHouseId = numberMatch[1];
        }
    }
    
    // Search in MOCK_DATA.houses
    for (const blockId in MOCK_DATA.houses) {
        if (targetBlock && blockId !== targetBlock) continue;
        const floors = MOCK_DATA.houses[blockId];
        for (const floorName in floors) {
            const house = floors[floorName].find(h => h.id === targetHouseId);
            if (house) {
                return house.owner;
            }
        }
    }
    return '';
}

// Event listener for auto-populating owner
document.getElementById('newGuestUnit').addEventListener('input', function(e) {
    const ownerName = findOwnerByUnit(e.target.value);
    document.getElementById('newGuestOwner').value = ownerName ? ownerName : 'No resident found';
});

function verifyGuestOTP() {
    const inputCode = document.getElementById('verifyGuestOTPInput').value.trim();
    const resultBox = document.getElementById('otpVerifyResult');
    
    if (!inputCode) {
        alert("Please enter a 4-digit OTP to verify.");
        return;
    }
    
    // Find the guest pass with matching code
    const pass = MOCK_DATA.guestPasses.find(p => p.code === inputCode);
    
    resultBox.style.display = 'block';
    
    if (pass) {
        // Match found! Check if it's active
        if (pass.status === 'Active') {
            pass.status = 'Used'; // Mark it as used
            renderGuestPasses(); // Re-render table
            
            resultBox.style.background = 'rgba(16, 185, 129, 0.1)';
            resultBox.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            resultBox.innerHTML = `
                <div style="display: flex; align-items: flex-start; gap: 10px; text-align: left;">
                    <i class="ph-fill ph-check-circle" style="color: var(--success); font-size: 1.5rem; margin-top: 2px;"></i>
                    <div>
                        <h4 style="color: var(--success); font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">Access Granted</h4>
                        <p style="color: white; font-size: 0.85rem; font-weight: 500; margin-bottom: 2px;">Guest: <strong>${pass.guest}</strong></p>
                        <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 2px;">Unit: ${pass.unit} (${pass.owner || 'N/A'})</p>
                        <p style="color: var(--text-muted); font-size: 0.8rem;">Gate: ${pass.gate || 'Main Gate'} • Checked In Successfully</p>
                    </div>
                </div>
            `;
        } else {
            resultBox.style.background = 'rgba(245, 158, 11, 0.1)';
            resultBox.style.borderColor = 'rgba(245, 158, 11, 0.3)';
            resultBox.innerHTML = `
                <div style="display: flex; align-items: flex-start; gap: 10px; text-align: left;">
                    <i class="ph-fill ph-warning-circle" style="color: var(--warning); font-size: 1.5rem; margin-top: 2px;"></i>
                    <div>
                        <h4 style="color: var(--warning); font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">Pass Already Used</h4>
                        <p style="color: white; font-size: 0.85rem; font-weight: 500; margin-bottom: 2px;">Guest: <strong>${pass.guest}</strong></p>
                        <p style="color: var(--text-muted); font-size: 0.8rem;">This pass code was verified earlier and cannot be reused.</p>
                    </div>
                </div>
            `;
        }
    } else {
        // No match found
        resultBox.style.background = 'rgba(239, 68, 68, 0.1)';
        resultBox.style.borderColor = 'rgba(239, 68, 68, 0.3)';
        resultBox.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 10px; text-align: left;">
                <i class="ph-fill ph-x-circle" style="color: var(--danger); font-size: 1.5rem; margin-top: 2px;"></i>
                <div>
                    <h4 style="color: var(--danger); font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">Invalid OTP / Access Denied</h4>
                    <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 2px;">No active visitor pass matches this code. Access is denied.</p>
                </div>
            </div>
        `;
    }
}

// Complaints Management Logic
function renderComplaints() {
    const tbody = document.getElementById('complaintsTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const list = MOCK_DATA.complaints || [];

    // Calculate Stats
    const total = list.length;
    const pending = list.filter(c => c.status === 'Pending').length;
    const progress = list.filter(c => c.status === 'In Progress').length;
    const resolved = list.filter(c => c.status === 'Resolved').length;

    // Update UI Stats
    document.getElementById('statTotalComplaints').innerText = total;
    document.getElementById('statPendingComplaints').innerText = pending;
    document.getElementById('statInProgressComplaints').innerText = progress;
    document.getElementById('statResolvedComplaints').innerText = resolved;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">No complaints filed yet.</td></tr>`;
        return;
    }

    list.forEach(c => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        tr.style.cursor = 'pointer';
        tr.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') {
                openComplaintDetailModal(c.id);
            }
        };

        // Severity Color
        let sevColor = 'var(--text-muted)';
        if (c.severity === 'Critical') sevColor = 'var(--danger)';
        else if (c.severity === 'High') sevColor = 'var(--warning)';
        else if (c.severity === 'Medium') sevColor = '#ffc107';
        else if (c.severity === 'Low') sevColor = 'var(--success)';

        // Status Color
        let statColor = 'var(--text-muted)';
        if (c.status === 'Pending') statColor = 'var(--danger)';
        else if (c.status === 'In Progress') statColor = 'var(--warning)';
        else if (c.status === 'Resolved') statColor = 'var(--success)';

        tr.innerHTML = `
            <td style="padding: 1rem; font-weight: bold; color: var(--primary); font-family: monospace;">${c.id}</td>
            <td style="padding: 1rem;">
                <div style="font-weight: 600; color: var(--text-main);">${c.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${c.desc.substring(0, 50)}${c.desc.length > 50 ? '...' : ''}</div>
                <div style="font-size: 0.7rem; display: inline-block; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; color: var(--text-muted); margin-top: 4px;">${c.category}</div>
            </td>
            <td style="padding: 1rem;">
                <div style="color: var(--text-main); font-weight: 500;">${c.unit}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${c.resident}</div>
            </td>
            <td style="padding: 1rem;">
                <span style="color: ${sevColor}; background: ${sevColor}11; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600; border: 1px solid ${sevColor}22;">
                    ${c.severity}
                </span>
            </td>
            <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">${c.date}</td>
            <td style="padding: 1rem;">
                <span style="color: ${statColor}; background: ${statColor}11; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">
                    ${c.status}
                </span>
            </td>
            <td style="padding: 1rem;">
                <button class="btn-secondary" onclick="openComplaintDetailModal('${c.id}')" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">Resolve</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openComplaintModal() {
    document.getElementById('newComplaintUnit').value = '';
    document.getElementById('newComplaintResident').value = '';
    document.getElementById('newComplaintTitle').value = '';
    document.getElementById('newComplaintDesc').value = '';
    document.getElementById('newComplaintCategory').selectedIndex = 0;
    document.getElementById('newComplaintSeverity').selectedIndex = 0;
    document.getElementById('newComplaintDate').value = new Date().toISOString().split('T')[0];

    document.getElementById('complaintModal').classList.add('active');
}

function closeComplaintModal() {
    document.getElementById('complaintModal').classList.remove('active');
}

// Auto populate resident name in file complaint modal
document.getElementById('newComplaintUnit').addEventListener('input', function(e) {
    const ownerName = findOwnerByUnit(e.target.value);
    document.getElementById('newComplaintResident').value = ownerName ? ownerName : 'No resident found';
});

function saveComplaint() {
    const unit = document.getElementById('newComplaintUnit').value.trim();
    const resident = document.getElementById('newComplaintResident').value.trim();
    const title = document.getElementById('newComplaintTitle').value.trim();
    const desc = document.getElementById('newComplaintDesc').value.trim();
    const category = document.getElementById('newComplaintCategory').value;
    const severity = document.getElementById('newComplaintSeverity').value;
    const date = document.getElementById('newComplaintDate').value;

    if (!unit || !title || !desc) {
        alert('Please fill in Unit, Title, and Description fields.');
        return;
    }

    const newId = 'CP' + Math.floor(100 + Math.random() * 900);
    const newComplaint = {
        id: newId,
        title: title,
        unit: unit,
        resident: resident !== 'No resident found' ? resident : 'Unknown Resident',
        category: category,
        severity: severity,
        date: date,
        status: 'Pending',
        desc: desc,
        assignedStaff: 'Unassigned'
    };

    MOCK_DATA.complaints.unshift(newComplaint);
    renderComplaints();
    closeComplaintModal();
}

let activeDetailComplaintId = null;

function openComplaintDetailModal(id) {
    const c = MOCK_DATA.complaints.find(comp => comp.id === id);
    if (!c) return;

    activeDetailComplaintId = id;

    document.getElementById('detailComplaintId').innerText = c.id;
    document.getElementById('detailComplaintTitle').innerText = c.title;
    document.getElementById('detailComplaintDesc').innerText = c.desc;
    document.getElementById('detailComplaintUnit').innerText = c.unit;
    document.getElementById('detailComplaintResident').innerText = c.resident;
    document.getElementById('detailComplaintCategory').innerText = c.category;
    document.getElementById('detailComplaintDate').innerText = c.date;

    const sevBadge = document.getElementById('detailComplaintSeverityBadge');
    sevBadge.innerText = c.severity;
    let sevColor = 'var(--text-muted)';
    if (c.severity === 'Critical') sevColor = 'var(--danger)';
    else if (c.severity === 'High') sevColor = 'var(--warning)';
    else if (c.severity === 'Medium') sevColor = '#ffc107';
    else if (c.severity === 'Low') sevColor = 'var(--success)';
    sevBadge.style.color = sevColor;
    sevBadge.style.background = sevColor + '11';
    sevBadge.style.border = `1px solid ${sevColor}22`;

    // Populate maintenance staff dropdown
    const staffSelect = document.getElementById('detailComplaintAssignStaff');
    staffSelect.innerHTML = '<option value="Unassigned">-- Leave Unassigned --</option>';

    const maintenanceStaff = MOCK_DATA.staff.filter(s => s.category === 'Maintenance' || s.category === 'Housekeeping');
    maintenanceStaff.forEach(s => {
        const option = document.createElement('option');
        option.value = s.name;
        option.innerText = `${s.name} (${s.role})`;
        staffSelect.appendChild(option);
    });

    document.getElementById('detailComplaintStatusSelect').value = c.status;
    staffSelect.value = c.assignedStaff || 'Unassigned';

    document.getElementById('complaintDetailModal').classList.add('active');
}

function closeComplaintDetailModal() {
    document.getElementById('complaintDetailModal').classList.remove('active');
    activeDetailComplaintId = null;
}

function saveComplaintDetails() {
    if (!activeDetailComplaintId) return;

    const c = MOCK_DATA.complaints.find(comp => comp.id === activeDetailComplaintId);
    if (c) {
        c.status = document.getElementById('detailComplaintStatusSelect').value;
        c.assignedStaff = document.getElementById('detailComplaintAssignStaff').value;
        renderComplaints();
    }

    closeComplaintDetailModal();
}
