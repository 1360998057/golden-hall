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
  parameters: any;
}

export interface ProductItem {
  id: string;
  title: I18nText;
  categoryId: string;
  categoryName: I18nText;
  image: string;
  date: string;
  description: I18nText;
  specification: {
    zh?: Record<string, any>;
    en?: Record<string, any>;
  } | Record<string, any>;
  materials_and_processes: MaterialProcess[];
}


type ProductItemRaw = ProductItem;








const rawProducts: ProductItemRaw[] = [
    {
        "id": "165",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20140523091522172.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ220/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 整体硬化；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ220/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 整体硬化；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ220/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ220/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 整体硬化",
                    "en": "SKD61 Through-Hardening"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
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
    "date": "",
    "description": {
        "zh": "规格：规格范围：Φ45/2mm- Φ220/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 整体硬化；工艺 4：9Cr18Mov 精加工",
        "en": "Specification: Range: Φ45/2mm- Φ220/2mm Materials and Processes: Process 1: 38CrMoALA Nitriding Treatment; Process 2: 42CrMo Electroplating Process; Process 3: SKD61 Through-Hardening; Process 4: 9Cr18Mov Precision Machining"
    },
    "specification": {
        "zh": {
            "规格范围": "Φ45/2mm- Φ220/2mm"
        },
        "en": {
            "Range": "Φ45/2mm- Φ220/2mm"
        }
    },
    "materials_and_processes": [
        {
            "process": {
                "zh": "工艺 1",
                "en": "Process 1"
            },
            "material": {
                "zh": "38CrMoALA 氮化处理",
                "en": "38CrMoALA Nitriding Treatment"
            },
            "parameters": {
                "zh": {
                    "氮化深度": "0.5-0.8mm",
                    "氮化硬度": "HV≥920"
                },
                "en": {
                    "Nitration Depth": "0.5-0.8mm",
                    "Nitriding Hardness": "HV≥920"
                }
            }
        },
        {
            "process": {
                "zh": "工艺 2",
                "en": "Process 2"
            },
            "material": {
                "zh": "42CrMo 电镀工艺",
                "en": "42CrMo Electroplating Process"
            },
            "parameters": {
                "zh": {
                    "镀铬硬度": "≥HV800",
                    "镀层厚度": "0.03-0.05mm",
                    "表面粗糙度": "Ra 0.2μm"
                },
                "en": {
                    "Chrome Plating Hardness": "≥HV800",
                    "Plating Thickness": "0.03-0.05mm",
                    "Surface Roughness": "Ra 0.2μm"
                }
            }
        },
        {
            "process": {
                "zh": "工艺 3",
                "en": "Process 3"
            },
            "material": {
                "zh": "SKD61 整体硬化",
                "en": "SKD61 Through-Hardening"
            },
            "parameters": {
                "zh": {
                    "硬度指标": "HRC > 55-58",
                    "直线度": "0.015mm/m",
                    "表面粗糙度": "Ra 0.4μm"
                },
                "en": {
                    "Hardness Index": "HRC > 55-58",
                    "Straightness": "0.015mm/m",
                    "Surface Roughness": "Ra 0.4μm"
                }
            }
        },
        {
            "process": {
                "zh": "工艺 4",
                "en": "Process 4"
            },
            "material": {
                "zh": "9Cr18Mov 精加工",
                "en": "9Cr18Mov Precision Machining"
            },
            "parameters": {
                "zh": {
                    "硬度指标": "HRC > 50-55",
                    "直线度": "0.015mm/m",
                    "表面粗糙度": "Ra 0.4μm"
                },
                "en": {
                    "Hardness Index": "HRC > 50-55",
                    "Straightness": "0.015mm/m",
                    "Surface Roughness": "Ra 0.4μm"
                }
            }
        }
    ]
},
    {
        "id": "167",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆与机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20140523100209509.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "168",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "螺杆附件"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20140525075341851.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "171",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20140525083058294.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "172",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡塑螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20140525083337955.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "90",
        "title": {
            "zh": "锥形双螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "",
        "categoryName": {
            "zh": "",
            "en": ""
        },
        "image": "/images/products/20130408205255941.jpg",
        "date": "",
        "description": {
            "zh": "",
            "en": ""
        },
        "specification": {
            "zh": {},
            "en": {}
        },
        "materials_and_processes": []
    },
    {
        "id": "92",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205429184.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "93",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205448844.gif",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "94",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205506971.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "95",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205522155.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "96",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205539610.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "97",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205556870.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "98",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20130408205612868.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "99",
        "title": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双螺杆"
        },
        "categoryId": "4",
        "categoryName": {
            "zh": "平行双机筒/螺杆",
            "en": "平行双机筒/螺杆"
        },
        "image": "/images/products/20130408205629899.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/2mm - Φ200/2mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/2mm - Φ200/2mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/2mm - Φ200/2mm"
            },
            "en": {
                "Range": "Range: Φ45/2mm - Φ200/2mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "100",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130408205755790.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "101",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130408205832479.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "104",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130408210028389.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "105",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130408210058464.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "106",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130408210124349.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "107",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130408210148954.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "108",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130408210211510.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "109",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130408210230778.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "110",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130408210403692.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "111",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130408210424887.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "113",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130408210514926.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "114",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130410142658829.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "115",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130410142719372.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "116",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130410142746716.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "117",
        "title": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶螺杆、机筒"
        },
        "categoryId": "8",
        "categoryName": {
            "zh": "橡胶机机筒/螺杆",
            "en": "橡胶机机筒/螺杆"
        },
        "image": "/images/products/20130410142810861.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：销钉螺杆、机筒规格：Φ75mm - Φ200mm；冷、热喂料螺杆规格：Φ65mm - Φ650mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "销钉螺杆、机筒规格：Φ75mm - Φ200mm",
                "冷、热喂料螺杆规格": "Φ65mm - Φ650mm"
            },
            "en": {
                "Range": "Pin Screw & Barrel Specifications: Φ75mm - Φ200mm",
                "Cold/Hot Feed Screw Specifications": "Φ65mm - Φ650mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "87",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20130408205143616.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "88",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20130408205204696.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "89",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20130408205221704.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "138",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142724371.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "139",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142748169.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "140",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142814564.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "141",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142836844.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "142",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142900818.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "143",
        "title": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆、机筒"
        },
        "categoryId": "3",
        "categoryName": {
            "zh": "挤出机螺杆/机筒",
            "en": "挤出机螺杆/机筒"
        },
        "image": "/images/products/20130604142922486.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ300mm；长径比 L/D=15-65 Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ300mm；长径比 L/D=15-65"
            },
            "en": {
                "Range": "Diameter: Φ20mm - Φ300mm; L/D Ratio: 15-65"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "146",
        "title": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双螺杆"
        },
        "categoryId": "5",
        "categoryName": {
            "zh": "锥形双机筒/螺杆",
            "en": "锥形双机筒/螺杆"
        },
        "image": "/images/products/20130604144408162.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ45/90mm- Φ92/188mm 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工",
            "en": "Specification: 规格范围：Φ45/90mm- Φ92/188mm Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ45/90mm- Φ92/188mm"
            },
            "en": {
                "Range": "Range: Φ45/90mm- Φ92/188mm"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            }
        ]
    },
    {
        "id": "148",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "螺杆附件"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130604145110461.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "149",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130604145132411.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "150",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130604145157914.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    },
    {
        "id": "151",
        "title": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆、机筒"
        },
        "categoryId": "2",
        "categoryName": {
            "zh": "注塑机螺杆/机筒",
            "en": "注塑机螺杆/机筒"
        },
        "image": "/images/products/20130604145216554.jpg",
        "date": "",
        "description": {
            "zh": "规格：规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g 材料与工艺：工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标",
            "en": "Specification: 规格范围：Φ20mm - Φ220mm；锁模力：100KN - 35000KN；射胶量：30g - 30000g Materials and Processes: 工艺 1：38CrMoALA 氮化处理；工艺 2：42CrMo 电镀工艺；工艺 3：SKD61 调质；工艺 4：9Cr18Mov 精加工；技术指标 5：电镀硬铬技术指标"
        },
        "specification": {
            "zh": {
                "规格范围": "Φ20mm - Φ220mm",
                "锁模力": "100KN - 35000KN",
                "射胶量": "30g - 30000g"
            },
            "en": {
                "Range": "Range: Φ20mm - Φ220mm",
                "Clamping Force": "Clamping Force: 100KN - 35000KN",
                "Shot Weight / Injection Capacity": "Shot Weight / Injection Capacity: 30g - 30000g"
            }
        },
        "materials_and_processes": [
            {
                "process": {
                    "zh": "工艺 1",
                    "en": "Process 1"
                },
                "material": {
                    "zh": "38CrMoALA 氮化处理",
                    "en": "38CrMoALA Nitriding Treatment"
                },
                "parameters": {
                    "zh": {
                        "氮化深度": "0.5-0.8mm",
                        "氮化硬度": "HV≥920"
                    },
                    "en": {
                        "Nitration Depth": "0.5-0.8mm",
                        "Nitriding Hardness": "HV≥920"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 2",
                    "en": "Process 2"
                },
                "material": {
                    "zh": "42CrMo 电镀工艺",
                    "en": "42CrMo Electroplating Process"
                },
                "parameters": {
                    "zh": {
                        "镀铬硬度": "≥HV800",
                        "镀层厚度": "0.03-0.05mm",
                        "表面粗糙度": "Ra 0.2μm"
                    },
                    "en": {
                        "Chrome Plating Hardness": "≥HV800",
                        "Plating Thickness": "0.03-0.05mm",
                        "Surface Roughness": "Ra 0.2μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 3",
                    "en": "Process 3"
                },
                "material": {
                    "zh": "SKD61 调质",
                    "en": "SKD61 Quenching & Tempering"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 55-58",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 55-58",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "工艺 4",
                    "en": "Process 4"
                },
                "material": {
                    "zh": "9Cr18Mov 精加工",
                    "en": "9Cr18Mov Precision Machining"
                },
                "parameters": {
                    "zh": {
                        "硬度指标": "HRC > 50-55",
                        "直线度": "0.015mm/m",
                        "表面粗糙度": "Ra 0.4μm"
                    },
                    "en": {
                        "Hardness Index": "HRC > 50-55",
                        "Straightness": "0.015mm/m",
                        "Surface Roughness": "Ra 0.4μm"
                    }
                }
            },
            {
                "process": {
                    "zh": "技术指标 5",
                    "en": "Technical Index 5"
                },
                "material": {
                    "zh": "电镀硬铬技术指标",
                    "en": "Hard Chrome Plating"
                },
                "parameters": {
                    "zh": {
                        "镀层厚度": "0.05-0.10mm",
                        "镀层硬度": "HV≥960"
                    },
                    "en": {
                        "镀层厚度": "Coating thickness 0.05-0.10mm",
                        "Coating Hardness": "HV≥960"
                    }
                }
            }
        ]
    }
];


export const products: ProductItem[] = rawProducts;

