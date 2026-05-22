export function renderTopStats(data) {
    document.getElementById('carInCount').textContent = data.carIn;
    // ... โค้ดอัปเดต Dot สถานะต่างๆ
}

export function renderHistoryTable(dataArray) {
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = '';
    // ... ลูปวาดตารางเหมือนที่เมษาเคยเขียนไว้
}