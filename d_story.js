// Mock Data ข้อมูลห้องน้ำ 5 รายการ
const bathrooms = [
  { name: "ห้องน้ำ อาคารเรียนรวม 1", distance: 0.3, open: true, accessible: true, gender: "Unisex" },
  { name: "ห้องน้ำ หอพักนักศึกษา A", distance: 0.8, open: true, accessible: true, gender: "All" },
  { name: "ห้องน้ำ โรงอาหารกลาง", distance: 1.2, open: false, accessible: true, gender: "All" },
  { name: "ห้องน้ำ ห้องสมุดประชาชน", distance: 1.5, open: true, accessible: false, gender: "Separate" },
  { name: "ห้องน้ำ อาคารวิจัยชั้น 1", distance: 2.5, open: true, accessible: true, gender: "Unisex" }
];

/**
 * ฟังก์ชันค้นหาห้องน้ำใกล้ตัวตามเงื่อนไข
 * @param {Array} list - รายการห้องน้ำทั้งหมด
 * @param {number} maxDistance - ระยะทางสูงสุดในหน่วย กม. (ค่าเริ่มต้น 2 กม.)
 * @param {boolean} isOpenOnly - กรองเฉพาะที่เปิดอยู่เท่านั้น (ค่าเริ่มต้น true)
 * @param {boolean} requireAccessible - ต้องรองรับผู้พิการ (ค่าเริ่มต้น true)
 * @returns {Array} รายการห้องน้ำที่ผ่านการกรองและเรียงตามระยะทาง
 */
const findBathrooms = (list, maxDistance = 2.0, isOpenOnly = true, requireAccessible = true) => {
  return list
    // กรองข้อมูลด้วย array method: filter()
    .filter(b => {
      const matchOpen = isOpenOnly ? b.open === true : true;
      const matchDistance = b.distance <= maxDistance;
      const matchAccessible = requireAccessible ? b.accessible === true : true;
      return matchOpen && matchDistance && matchAccessible;
    })
    // เรียงลำดับจากระยะทางใกล้ไปไกลด้วย sort()
    .sort((a, b) => a.distance - b.distance);
};

// ==========================================
// TEST CASES
// ==========================================

console.log("=== TEST CASE 1: มีห้องน้ำที่ตรงตามเงื่อนไขหลายรายการ ===");
// ค้นหาห้องน้ำเปิดอยู่ + รองรับผู้พิการ + ระยะทาง <= 2.0 กม.
const test1 = findBathrooms(bathrooms, 2.0, true, true);
console.log(test1);

console.log("\n=== TEST CASE 2: มีห้องน้ำที่ตรงตามเงื่อนไขเพียงบางรายการ ===");
// ค้นหาแบบจำกัดระยะทางให้แคบลงเหลือไม่เกิน 0.5 กม.
const test2 = findBathrooms(bathrooms, 0.5, true, true);
console.log(test2);

console.log("\n=== EDGE CASE: ไม่มีห้องน้ำตรงตามเงื่อนไข (ต้องได้ผลลัพธ์เป็น []) ===");
// ค้นหาห้องน้ำระยะทางไม่เกิน 0.1 กม. (ซึ่งไม่มีใน Mock Data)
const edgeCase = findBathrooms(bathrooms, 0.1, true, true);
console.log(edgeCase);