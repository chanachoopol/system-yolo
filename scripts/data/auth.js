// ไฟล์: scripts/data/auth.js
export function verifyLogin(username, password) {
    // ในอนาคต ตรงนี้เราจะเปลี่ยนไปดึงข้อมูลจาก Database/API ของ YOLO
    // ตอนนี้เช็กง่ายๆ ไปก่อน
    if (username === 'admin' && password === '1234') {
        return true;
    }
    return false;
}