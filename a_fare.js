/**
 * คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
 * @param {number} distanceKm - ระยะทาง (กิโลเมตร)
 * @returns {number} ค่าโดยสาร (บาท)
 */
const calcFare = (distanceKm) => {
  // ตรวจสอบค่าที่ไม่ถูกต้อง (ไม่ใช่ตัวเลข หรือ ระยะทางติดลบ)
  if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // ปัดเศษระยะทางขึ้นเป็นกิโลเมตรเต็ม
  const totalKm = Math.ceil(distanceKm);

  // ระยะทาง 0 กม. คิด 0 บาท
  if (totalKm === 0) return 0;

  // 2 กม. แรก คิด 10 บาท
  if (totalKm <= 2) {
    return 10;
  }

  // เกิน 2 กม. คิดเพิ่ม กม. ละ 2 บาท
  return 10 + (totalKm - 2) * 2;
};

// ทดสอบการใช้งาน 3 กรณี
console.log(calcFare(1.5)); // Output: 10 (ปัดเป็น 2 กม. ได้ 10 บาท)
console.log(calcFare(2));   // Output: 10 (2 กม. ได้ 10 บาท)
console.log(calcFare(7.2)); // Output: 22 (ปัดเป็น 8 กม. -> 10 + (6 * 2) = 22 บาท)