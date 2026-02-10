const fs = require('fs');

// 读取当前产品数据
const content = fs.readFileSync('c:/code/golden-hall/lib/productsData.ts', 'utf8');
const marker = 'const rawProducts: ProductItemRaw[] =';
const markerPos = content.indexOf(marker);
const arrayStart = content.indexOf('[', markerPos + marker.length);
const arrayEnd = content.lastIndexOf('];');
const arrayString = content.slice(arrayStart, arrayEnd + 1);
const rawProducts = JSON.parse(arrayString);

// 找到 id 166 的产品并修复
const fixedProducts = rawProducts.map(product => {
  if (product.id === '166') {
    return {
      id: "166",
      title: {
        zh: "平行双螺杆与机筒",
        en: "Parallel Twin Screw and Barrel"
      },
      categoryId: "4",
      categoryName: {
        zh: "平行双机筒/螺杆",
        en: "Parallel Twin Barrel/Screw"
      },
      image: product.image,
      date: "",
      description: {
        zh: "规格：Φ45/2mm- Φ220/2mm 材料与工艺：工艺 1：38CrMoALA氮化处理 氮化深度：0.5-0.8mm，氮化硬度：HV≥920；工艺 2：42CrMo电镀 高频淬火+电镀/双金属PTA+电镀 镀铬硬度：≥HV800，厚度0.03-0.05mm，粗糙度Ra0.2um；工艺 3：SKD61调质、真空淬火+整体硬化处理 硬度指标：HRC＞55-58，直线度0.015mm/m，粗糙度Ra0.4um；工艺 4：9Cr18Mov真空淬火、CNC圆磨 硬度指标：HRC＞50-55，直线度0.015mm/m，粗糙度Ra0.4um",
        en: "Specification: Φ45/2mm- Φ220/2mm Materials and Processes: Process 1: 38CrMoALA Nitriding Treatment Nitration Depth: 0.5-0.8mm, Nitriding Hardness: HV≥920; Process 2: 42CrMo Plating Induction Quenching+Plating/Bimetallic PTA+Plating Chrome Plating Hardness: ≥HV800, Thickness 0.03-0.05mm, Surface Roughness Ra0.2um; Process 3: SKD61 Quenching & Tempering, Vacuum Quenching+Full Hardening Hardness Index: HRC＞55-58, Straightness 0.015mm/m, Surface Roughness Ra0.4um; Process 4: 9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding Hardness Index: HRC＞50-55, Straightness 0.015mm/m, Surface Roughness Ra0.4um"
      },
      specification: {
        zh: {
          "规格范围": "Φ45/2mm- Φ220/2mm"
        },
        en: {
          "Range": "Φ45/2mm- Φ220/2mm"
        }
      },
      materials_and_processes: [
        {
          process: {
            zh: "工艺 1",
            en: "Process 1"
          },
          material: {
            zh: "38CrMoALA 氮化处理",
            en: "38CrMoALA Nitriding Treatment"
          },
          parameters: {
            zh: {
              "氮化深度": "0.5-0.8mm",
              "氮化硬度": "HV≥920"
            },
            en: {
              "Nitration Depth": "0.5-0.8mm",
              "Nitriding Hardness": "HV≥920"
            }
          }
        },
        {
          process: {
            zh: "工艺 2",
            en: "Process 2"
          },
          material: {
            zh: "42CrMo 电镀",
            en: "42CrMo Plating"
          },
          parameters: {
            zh: {
              "工艺": "高频淬火+电镀/双金属PTA+电镀",
              "镀铬硬度": "≥HV800",
              "厚度": "0.03-0.05mm",
              "粗糙度": "Ra0.2um"
            },
            en: {
              "Process": "Induction Quenching+Plating/Bimetallic PTA+Plating",
              "Chrome Plating Hardness": "≥HV800",
              "Thickness": "0.03-0.05mm",
              "Surface Roughness": "Ra0.2um"
            }
          }
        },
        {
          process: {
            zh: "工艺 3",
            en: "Process 3"
          },
          material: {
            zh: "SKD61 调质、真空淬火+整体硬化处理",
            en: "SKD61 Quenching & Tempering, Vacuum Quenching+Full Hardening"
          },
          parameters: {
            zh: {
              "硬度指标": "HRC＞55-58",
              "直线度": "0.015mm/m",
              "粗糙度": "Ra0.4um"
            },
            en: {
              "Hardness Index": "HRC＞55-58",
              "Straightness": "0.015mm/m",
              "Surface Roughness": "Ra0.4um"
            }
          }
        },
        {
          process: {
            zh: "工艺 4",
            en: "Process 4"
          },
          material: {
            zh: "9Cr18Mov 真空淬火、CNC圆磨",
            en: "9Cr18Mov Vacuum Quenching, CNC Cylindrical Grinding"
          },
          parameters: {
            zh: {
              "硬度指标": "HRC＞50-55",
              "直线度": "0.015mm/m",
              "粗糙度": "Ra0.4um"
            },
            en: {
              "Hardness Index": "HRC＞50-55",
              "Straightness": "0.015mm/m",
              "Surface Roughness": "Ra0.4um"
            }
          }
        }
      ]
    };
  }
  return product;
});

// 写入文件
const newArray = JSON.stringify(fixedProducts, null, 4);
const before = content.slice(0, arrayStart);
const after = content.slice(arrayEnd + 2);
const newContent = before + newArray + '];' + after;

fs.writeFileSync('c:/code/golden-hall/lib/productsData.ts', newContent, 'utf8');
console.log('Fixed product 166 data structure');