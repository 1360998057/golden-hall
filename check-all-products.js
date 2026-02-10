const fs = require('fs');

// 读取产品数据
const content = fs.readFileSync('c:/code/golden-hall/lib/productsData.ts', 'utf8');
const startMarker = 'const rawProducts: ProductItemRaw[] =';
const arrayStart = content.indexOf('[', content.indexOf(startMarker));
const arrayEnd = content.lastIndexOf('];');

if (arrayStart === -1 || arrayEnd === -1) {
    console.log('Could not find product array');
    process.exit(1);
}

const arrayContent = content.slice(arrayStart, arrayEnd + 2);
const jsonContent = arrayContent.replace(/const rawProducts:\s*ProductItemRaw\[\]\s*=\s*/, '');
const products = JSON.parse(jsonContent);

console.log('检查产品数据结构问题...\n');

const issues = [];

products.forEach(product => {
    const id = product.id;
    
    // 检查 materials_and_processes 结构
    if (product.materials_and_processes && Array.isArray(product.materials_and_processes)) {
        product.materials_and_processes.forEach((item, index) => {
            // 检查是否错误的拆分了数值
            const materialZh = item.material?.zh || '';
            const materialEn = item.material?.en || '';
            const processZh = item.process?.zh || '';
            const processEn = item.process?.en || '';
            
            // 检查材料是否只是数值（可能是错误拆分）
            if (/^[\d.]+$/.test(materialZh.trim()) || /^[\d.]+$/.test(materialEn.trim())) {
                issues.push({
                    id,
                    type: '数值被错误拆分为材料',
                    index,
                    material: materialZh,
                    process: processZh
                });
            }
            
            // 检查工艺是否只有单个字符或符号
            if (processZh.trim() === '-' || processZh.trim().length === 1) {
                issues.push({
                    id,
                    type: '工艺字段异常',
                    index,
                    process: processZh,
                    material: materialZh
                });
            }
            
            // 检查参数是否为空但可能有内容
            if ((!item.parameters || Object.keys(item.parameters).length === 0) && 
                (materialZh.includes('：') || materialEn.includes(':'))) {
                issues.push({
                    id,
                    type: '参数未被正确解析',
                    index,
                    material: materialZh
                });
            }
        });
    }
    
    // 检查 specification 结构
    if (product.specification) {
        if (typeof product.specification === 'object') {
            // 检查 zh/en 分层结构
            if (product.specification.zh && typeof product.specification.zh === 'object') {
                Object.entries(product.specification.zh).forEach(([key, value]) => {
                    if (typeof value !== 'string') {
                        issues.push({
                            id,
                            type: 'specification.zh 值类型错误',
                            key,
                            value
                        });
                    }
                });
            }
        }
    }
});

if (issues.length > 0) {
    console.log('发现以下问题：\n');
    issues.forEach((issue, i) => {
        console.log(`${i + 1}. 产品 ID: ${issue.id}`);
        console.log(`   类型: ${issue.type}`);
        console.log(`   详情: ${JSON.stringify(issue, null, 2)}`);
        console.log('');
    });
} else {
    console.log('未发现明显的数据结构问题。');
}

// 检查具体几个可能有问题的产品
const suspectIds = ['165', '167', '128', '104'];
console.log('\n检查可疑产品的详细信息：\n');

suspectIds.forEach(id => {
    const product = products.find(p => p.id === id);
    if (product) {
        console.log(`产品 ${id}:`);
        console.log(`  materials_and_processes 数量: ${product.materials_and_processes?.length || 0}`);
        
        if (product.materials_and_processes) {
            product.materials_and_processes.slice(0, 3).forEach((item, i) => {
                console.log(`    ${i + 1}. 材料: ${JSON.stringify(item.material?.zh || '')}`);
                console.log(`       工艺: ${JSON.stringify(item.process?.zh || '')}`);
                console.log(`       参数数量: ${Object.keys(item.parameters || {}).length}`);
            });
        }
        console.log('');
    }
});

console.log(`总检查完成。共 ${products.length} 个产品。`);