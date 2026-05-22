// ไฟล์: scripts/login.js
import { verifyLogin } from './data/auth.js';

const loginForm = document.querySelector('.js-login-form');
const usernameInput = document.querySelector('.js-username');
const passwordInput = document.querySelector('.js-password');
const errorElement = document.querySelector('.js-error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isSuccess = verifyLogin(usernameInput.value, passwordInput.value);

    if (isSuccess) {
        // ใช้ Swal แทนข้อความ Alert แบบเก่า (ถ้าสำเร็จให้โชว์ Pop-up ก่อนไปหน้า Dashboard)
        Swal.fire({
            title: 'สำเร็จ!',
            text: 'เข้าสู่ระบบเรียบร้อยแล้ว',
            icon: 'success',
            confirmButtonText: 'ตกลง'
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        // ใช้ Swal โชว์ Error แบบสวยๆ
        Swal.fire({
            title: 'ผิดพลาด!',
            text: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
            icon: 'error',
            confirmButtonText: 'ลองใหม่อีกครั้ง'
        });
    }
});