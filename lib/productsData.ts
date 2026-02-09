export interface I18nText {
  zh: string;
  en: string;
}

export interface ProductCategory {
  id: string;
  name: I18nText;
}

export interface MaterialProcess {
  material: I18nText | string;
  process: I18nText | string;
  parameters: I18nText | Record<string, string>;
}

export interface ProductItem {
  id: string;
  title: I18nText;
  categoryId: string;
  categoryName: I18nText;
  image: string;
  date: string;
  description: I18nText;
  specification: Record<string, I18nText | string>;
  materials_and_processes: MaterialProcess[
    ];
}


type ProductItemRaw = ProductItem;








const rawProducts: ProductItemRaw[
    ] = [

    {
        "id": "165",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20140523091522172.jpg",
        "date": "2014-05-23 09:30:59",
        "description": {
            "zh": "规格： Φ45/2mm- Φ220/2mm 材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ220/2mm Materials and Processes:  1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness：HV≥920 2. 42CrMoPlating：High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness: ≥HV800,Thickness0.03-0.05mm,RoughnessRa0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index：HRC＞55-58,Straightness0.015mm/m,RoughnessRa0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index：HRC＞50-55,Straightness0.015mm/m,RoughnessRa0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ220/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
           
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "166",
        "title": {
            "zh": "平行双螺杆与机筒",
            "en": "Parallel Twin Screw and Barrel"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20140523095412175.jpg",
        "date": "2014-05-23 09:56:40",
        "description": {
            "zh": "规格：Φ45/2mm- Φ220/2mm 材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um",
            "en": "Specification: Φ45/2mm- Φ220/2mm Materials and Processes:  1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness：HV≥920 2. 42CrMoPlating：High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness: ≥HV800,Thickness0.03-0.05mm,RoughnessRa0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index：HRC＞55-58,Straightness0.015mm/m,RoughnessRa0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index：HRC＞50-55,Straightness0.015mm/m,RoughnessRa0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ220/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "167",
        "title": {
            "zh": "注塑机螺杆与机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20140523100209509.jpg",
        "date": "2014-05-23 10:06:27",
        "description": {
            "zh": "规格：Φ20mm- Φ220mm 锁模力：100KN-35000KN 射胶量：30g-30000g 材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um 5.电镀硬铬技术指标： 镀铬层厚度：0.05-0.10mm，镀铬层硬度：HV≥960",
            "en": "Specification: Φ20mm- Φ220mm Clamping Force: 100KN-35000KN Shot Volume: 30g-30000g Materials and Processes: 1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness:HV≥920 2. 42CrMoPlating:High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness: ≥HV800,Thickness0.03-0.05mm,RoughnessRa0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:HRC＞55-58,Straightness0.015mm/m,RoughnessRa0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:HRC＞50-55,Straightness0.015mm/m,RoughnessRa0.4um 5.Hard Chrome Plating Technical Index: Chrome Layer Thickness: 0.05-0.10mm,Chrome Layer Hardness:HV≥960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力：100KN-35000KN 射胶量：30g-30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "168",
        "title": {
            "zh": "螺杆附件",
            "en": "Screw Accessories"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20140525075341851.jpg",
        "date": "2014-05-25 07:54:27",
        "description": {
            "zh": "材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um 5.电镀硬铬技术指标： 镀铬层厚度：0.05-0.10mm，镀铬层硬度：HV≥960",
            "en": "Materials and Processes:  1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness: HV≥920 2. 42CrMoPlating：High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness:  ≥HV800,Thickness 0.03-0.05mm,Roughness Ra0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:  HRC＞55-58,Straightness 0.015mm/m,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:  HRC＞50-55,Straightness 0.015mm/m,Roughness Ra0.4um 5.Hard Chrome Plating Technical Index： Chrome Layer Thickness: 0.05-0.10mm,Chrome Layer Hardness: HV≥960"
        },
        "specification": {},
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "171",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20140525083058294.jpg",
        "date": "2014-05-25 08:32:17",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness：HV≥920 2. 42CrMoPlating：High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness: ≥HV800,Thickness0.03-0.05mm,RoughnessRa0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index：HRC＞55-58,Straightness0.015mm/m,RoughnessRa0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index：HRC＞50-55,Straightness0.015mm/m,RoughnessRa0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "172",
        "title": {
            "zh": "橡塑螺杆、机筒",
            "en": "Rubber/Plastic Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20140525083337955.jpg",
        "date": "2014-05-25 08:34:37",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920 2. 42CrMo电镀：高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um 3. SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um 4. 9Cr18Mov 真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALANitriding Treatment Nitriding Depth: 0.5-0.8mm,Nitriding Hardness: HV≥920 2. 42CrMoPlating：High Frequency Quenching+Plating/Bimetallic PTA+Plating Chromium Hardness:  ≥HV800,Thickness 0.03-0.05mm,Roughness Ra0.2um 3. SKD61Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:  HRC＞55-58,Straightness 0.015mm/m,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:  HRC＞50-55,Straightness 0.015mm/m,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    },
                    "en": {
                        "高频淬火+电镀/双金属PTA+电镀 镀铬硬度": "≥HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火+整体硬化处理 硬度指标",
                    "en": "调质、真空淬火+整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、CNC圆磨 硬度指标",
                    "en": "真空淬火、CNC圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                   "zh": "粗糙度Ra",
                    "en": "粗糙度Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "90",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205255941.jpg",
        "date": "2013-04-08 20:53:04",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "Specification": {
                "zh": "Φ45/2mm- Φ200/2mm",
                "en": "Φ45/2mm- Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "92",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205429184.jpg",
        "date": "2013-04-08 20:54:38",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "93",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205448844.gif",
        "date": "2013-04-08 20:54:57",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "94",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205506971.jpg",
        "date": "2013-04-08 20:55:14",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "95",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205522155.jpg",
        "date": "2013-04-08 20:55:31",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "96",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205539610.jpg",
        "date": "2013-04-08 20:55:47",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "97",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205556870.jpg",
        "date": "2013-04-08 20:56:04",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "98",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205612868.jpg",
        "date": "2013-04-08 20:56:20",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "99",
        "title": {
            "zh": "平行双螺杆",
            "en": "Parallel Twin Screw"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "Parallel Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205629899.jpg",
        "date": "2013-04-08 20:56:38",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "100",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130408205755790.jpg",
        "date": "2013-04-08 20:58:23",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "101",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130408205832479.jpg",
        "date": "2013-04-08 20:58:44",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "102",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130408205854879.jpg",
        "date": "2013-04-08 20:59:07",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130408205922830.jpg",
        "date": "2013-04-08 20:59:36",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "Barrel Specification": {
                "zh": "Φ75mm- Φ200mm 冷、",
                "en": "Φ75mm- Φ200mm Cold, "
            },
            "Hot Feed Screw Specification": {
                "zh": "Φ65mm- Φ650mm",
                "en": "Φ65mm- Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "104",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130408210028389.jpg",
        "date": "2013-04-08 21:00:43",
        "description": {
            "zh": " 规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "st1\\\\:*{behavior:url(#ieooui) } Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "105",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130408210058464.jpg",
        "date": "2013-04-08 21:01:08",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "106",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130408210124349.jpg",
        "date": "2013-04-08 21:01:36",
        "description": {
            "zh": " 规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "st1\\\\:*{behavior:url(#ieooui) } Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "107",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130408210148954.jpg",
        "date": "2013-04-08 21:02:02",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "108",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130408210211510.jpg",
        "date": "2013-04-08 21:02:22",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "109",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130408210230778.jpg",
        "date": "2013-04-08 21:02:38",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "110",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130408210403692.jpg",
        "date": "2013-04-08 21:04:14",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "111",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130408210424887.jpg",
        "date": "2013-04-08 21:04:41",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "113",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130408210514926.jpg",
        "date": "2013-04-08 21:05:36",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "114",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130410142658829.jpg",
        "date": "2013-04-10 14:27:08",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "115",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130410142719372.jpg",
        "date": "2013-04-10 14:27:31",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "116",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130410142746716.jpg",
        "date": "2013-04-10 14:27:58",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "117",
        "title": {
            "zh": "橡胶螺杆、机筒",
            "en": "Rubber Screw and Barrel"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "Rubber Machine Barrel/Screw"
        },
        "image": "/images/products/20130410142810861.jpg",
        "date": "2013-04-10 14:28:21",
        "description": {
            "zh": "销钉螺杆、机筒规格： Φ75mm- Φ200mm 冷、热喂料螺杆规格： Φ65mm- Φ650mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Pin Screw and BarrelSpecification:  Φ75mm- Φ200mm Cold, HotFeed料螺ScrewSpecification:  Φ65mm- Φ650mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ65mm- Φ650mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "119",
        "title": {
            "zh": "造粒机螺杆",
            "en": "Pelletizer Screw"
        },
        "categoryId": "9",
        "categoryName": {
            "zh": "造粒机螺杆/机筒",
            "en": "Pelletizer Screw/Barrel"
        },
        "image": "/images/products/20130410152147827.jpg",
        "date": "2013-04-10 15:21:58",
        "description": {
            "zh": "",
            "en": ""
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604145049470.jpg",
        "date": "2013-06-04 14:50:57",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "zh": {
                "规格": "Φ20mm- Φ220mm",
                "锁模力": "100KN-35000KN",
                "射胶量": "30g -30000g"
            },
            "en": {
                "Specification": "Φ20mm- Φ220mm",
                "Clamping Force": "100KN-35000KN",
                "Shot Volume": "30g -30000g"
            }
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "72",
        "title": {
            "zh": "不锈钢螺杆机筒",
            "en": "Stainless Steel Screw/Barrel"
        },
        "categoryId": "13",
        "categoryName": {
            "zh": "不锈钢螺杆机筒",
            "en": "Stainless Steel Screw/Barrel"
        },
        "image": "/images/products/20130408204058490.jpg",
        "date": "2013-04-08 20:41:09",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {
            "规格": "Φ45/2mm- Φ200/2mm"
        },
        "categoryId": "13",
        "categoryName": {
            "zh": "不锈钢螺杆机筒",
            "en": "Stainless Steel Screw/Barrel"
        },
        "image": "/images/products/20130408204118288.jpg",
        "date": "2013-04-08 20:41:29",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {},
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "87",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205143616.jpg",
        "date": "2013-04-08 20:51:53",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "88",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205204696.jpg",
        "date": "2013-04-08 20:52:13",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "89",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20130408205221704.jpg",
        "date": "2013-04-08 20:52:29",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "120",
        "title": {
            "zh": "造粒机螺杆",
            "en": "Pelletizer Screw"
        },
        "categoryId": "9",
        "categoryName": {
            "zh": "造粒机螺杆/机筒",
            "en": "Pelletizer Screw/Barrel"
        },
        "image": "/images/products/20130410152544848.jpg",
        "date": "2013-04-10 15:25:52",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "categoryId": "9",
        "categoryName": {
            "zh": "造粒机螺杆/机筒",
            "en": "Pelletizer Screw/Barrel"
        },
        "image": "/images/products/20130410152606646.jpg",
        "date": "2013-04-10 15:26:14",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {},
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "138",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142724371.jpg",
        "date": "2013-06-04 14:27:35",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "139",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142748169.jpg",
        "date": "2013-06-04 14:28:02",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "140",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142814564.jpg",
        "date": "2013-06-04 14:28:25",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "141",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142836844.jpg",
        "date": "2013-06-04 14:28:44",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "142",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142900818.jpg",
        "date": "2013-06-04 14:29:10",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "143",
        "title": {
            "zh": "挤出机螺杆、机筒",
            "en": "Extruder Screw and Barrel"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "Extruder Screw/Barrel"
        },
        "image": "/images/products/20130604142922486.jpg",
        "date": "2013-06-04 14:29:31",
        "description": {
            "zh": "规格： Φ20mm- Φ300mm 长径比： L/D=15-65 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ300mm Length/Diameter Ratio:  L/D=15-65 Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ300mm 长径比： L/D=15-65"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "144",
        "title": {
            "zh": "注塑机螺杆",
            "en": "Injection Machine Screw"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604143003751.jpg",
        "date": "2013-06-04 14:30:13",
        "description": {
            "zh": "规格： Φ45/2mm- Φ200/2mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/2mm- Φ200/2mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "zh": {
                "规格": "Φ45/2mm- Φ200/2mm"
            },
            "en": {
                "Specification": "Φ45/2mm- Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "146",
        "title": {
            "zh": "锥形双螺杆",
            "en": "Conical Twin Screw"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "Conical Twin Barrel/Screw"
        },
        "image": "/images/products/20130604144408162.jpg",
        "date": "2013-06-04 14:44:20",
        "description": {
            "zh": "规格： Φ45/90mm- Φ92/188mm 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um",
            "en": "Specification:  Φ45/90mm- Φ92/188mm Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um"
        },
        "specification": {
            "规格": "Φ45/90mm- Φ92/188mm"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "148",
        "title": {
            "zh": "螺杆附件",
            "en": "Screw Accessories"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604145110461.jpg",
        "date": "2013-06-04 14:51:19",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "149",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604145132411.jpg",
        "date": "2013-06-04 14:51:49",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "150",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604145157914.jpg",
        "date": "2013-06-04 14:52:04",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    },
    {
        "id": "151",
        "title": {
            "zh": "注塑机螺杆、机筒",
            "en": "Injection Machine Screw and Barrel"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "Injection Machine Screw/Barrel"
        },
        "image": "/images/products/20130604145216554.jpg",
        "date": "2013-06-04 14:52:29",
        "description": {
            "zh": "规格： Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g 材料与工艺： 1. 38CrMoALA 氮化处理 氮化深度： 0.5-0.8mm ，氮化硬度： HV ≥ 920 2. 42CrMo 电镀：高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度：≥ HV800 ，厚度 0.03-0.05mm ，粗糙度 Ra0.2um 3. SKD61 调质、真空淬火 + 整体硬化处理 硬度指标： HRC ＞ 55-58 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 4. 9Cr18Mov 真空淬火、 CNC 圆磨 硬度指标： HRC ＞ 50-55 ，直线度 0.015mm/m ，粗糙度 Ra0.4um 5. 电镀硬铬技术指标： 镀铬层厚度： 0.05-0.10mm ，镀铬层硬度： HV ≥ 960",
            "en": "Specification:  Φ20mm- Φ220mm Clamping Force： 100KN-35000KN Shot Volume： 30g -30000g Materials and Processes:  1. 38CrMoALA Nitriding Treatment Nitriding Depth:  0.5-0.8mm ,Nitriding Hardness:  HV≥ 920 2. 42CrMo Plating：High Frequency Quenching + Plating / Bimetallic PTA+ Plating Chromium Hardness:  ≥ HV800 ,Thickness 0.03-0.05mm ,Roughness Ra0.2um 3. SKD61 Quenching and Tempering, Vacuum Quenching + Overall Hardening Hardness Index:   HRC＞ 55-58 ,Straightness 0.015mm/m ,Roughness Ra0.4um 4. 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index:   HRC＞ 50-55 ,Straightness 0.015mm/m ,Roughness Ra0.4um 5. Hard Chrome Plating Technical Index： Chrome Layer Thickness:  0.05-0.10mm ,Chrome Layer Hardness:  HV≥ 960"
        },
        "specification": {
            "规格": "Φ20mm- Φ220mm 锁模力： 100KN-35000KN 射胶量： 30g -30000g"
        },
        "materials_and_processes": [
            {
                "material": {
                    "zh": "38CrMoALA",
                    "en": "38CrMoALA"
                },
                "process": {
                    "zh": "氮化处理 氮化深度",
                    "en": "氮化处理 氮化深度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "5",
                    "en": "5"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "8mm",
                    "en": "8mm"
                },
                "process": {
                    "zh": "氮化硬度",
                    "en": "氮化硬度"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "42CrMo",
                    "en": "42CrMo"
                },
                "process": {
                    "zh": "电镀",
                    "en": "电镀"
                },
                "parameters": {
                    "zh": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    },
                    "en": {
                        "高频淬火 + 电镀 / 双金属 PTA+ 电镀 镀铬硬度": "≥ HV800"
                    }
                }
            },
            {
                "material": {
                    "zh": "03",
                    "en": "03"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05mm",
                    "en": "05mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "SKD61",
                    "en": "SKD61"
                },
                "process": {
                    "zh": "调质、真空淬火 + 整体硬化处理 硬度指标",
                    "en": "调质、真空淬火 + 整体硬化处理 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "9Cr18Mov",
                    "en": "9Cr18Mov"
                },
                "process": {
                    "zh": "真空淬火、 CNC 圆磨 硬度指标",
                    "en": "真空淬火、 CNC 圆磨 硬度指标"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "015mm",
                    "en": "015mm"
                },
                "process": {
                    "zh": "粗糙度 Ra",
                    "en": "粗糙度 Ra"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "05",
                    "en": "05"
                },
                "process": {
                    "zh": "-",
                    "en": "-"
                },
                "parameters": {}
            },
            {
                "material": {
                    "zh": "10mm",
                    "en": "10mm"
                },
                "process": {
                    "zh": "镀铬层硬度",
                    "en": "镀铬层硬度"
                },
                "parameters": {}
            }
        ]
    }
];


export const products =rawProducts

