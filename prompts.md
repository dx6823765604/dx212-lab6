def calculate_travel_cost(distance_km: float, rate_per_km: float = 5.0) -> float:
    """
    คำนวณค่าเดินทางตามระยะทาง
    - distance_km: ระยะทาง (กิโลเมตร)
    - rate_per_km: อัตราค่าบริการต่อกิโลเมตร (บาท) [ค่าเริ่มต้น: 5 บาท/กม.]
    """
    if distance_km < 0 or rate_per_km < 0:
        raise ValueError("ระยะทางและอัตราค่าบริการต้องไม่ติดลบ")
        
    total_cost = distance_km * rate_per_km
    return round(total_cost, 2)


def calculate_fuel_cost(distance_km: float, fuel_consumption_kml: float, fuel_price_per_liter: float) -> float:
    """
    คำนวณค่าน้ำมันจริงตามอัตราสิ้นเปลือง
    - distance_km: ระยะทาง (กิโลเมตร)
    - fuel_consumption_kml: อัตราสิ้นเปลือง (กิโลเมตร/ลิตร) เช่น 15 กม./ลิตร
    - fuel_price_per_liter: ราคาน้ำมันต่อลิตร (บาท)
    """
    if distance_km < 0 or fuel_consumption_kml <= 0 or fuel_price_per_liter < 0:
        raise ValueError("ข้อมูลที่กรอกต้องมีความถูกต้องและมากกว่า 0")
        
    fuel_used = distance_km / fuel_consumption_kml
    total_cost = fuel_used * fuel_price_per_liter
    return round(total_cost, 2)


# ตัวอย่างการใช้งาน
distance = 150.0  # ระยะทาง 150 กม.

# 1. คิดแบบเหมาจ่ายต่อกิโลเมตร (เช่น 5 บาท/กม.)
cost_by_rate = calculate_travel_cost(distance, rate_per_km=5.0)
print(f"ค่าเดินทาง (คิดตามกิโลเมตร): {cost_by_rate} บาท")

# 2. คิดตามค่าน้ำมันจริง (กินน้ำมัน 15 กม./ลิตร, น้ำมันลิตรละ 38 บาท)
cost_by_fuel = calculate_fuel_cost(distance, fuel_consumption_kml=15.0, fuel_price_per_liter=38.0)
print(f"ค่าน้ำมันจริง: {cost_by_fuel} บาท")

part B : "ตรวจแล้วถูก"