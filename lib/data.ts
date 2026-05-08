/**
 * 产品数据 - 佛山市梦泽精细化工有限公司
 * Product Data - Foshan Mengze Fine Chemical Co., Ltd.
 * 
 * 60款产品，涵盖10大分类
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  specifications?: Record<string, string>;
  warranty?: string;
  process?: string;
  /** 产品主图相对路径，如 /images/product-o-02-glitter-adhesive.png */
  image?: string;
}

export const PRODUCT_CATEGORIES = [
  { value: 'all', label: '全部产品' },
  { value: 'composite', label: '复合类应用' },
  { value: 'paper', label: '彩印纸品包装' },
  { value: 'sealant', label: '密封胶系列' },
  { value: 'waterproof', label: '防水涂料系列' },
  { value: 'construction', label: '建筑装饰胶' },
  { value: 'industrial', label: '工业漆系列' },
  { value: 'flocking', label: '植绒胶系列' },
  { value: 'stiffening', label: '硬挺类应用' },
  { value: 'furniture', label: '家具类' },
  { value: 'other', label: '其他' },
] as const;

export const products: Product[] = [

  // ===== 一、复合类应用（13款）=====
  {
    id: 'c-01',
    name: '内衣复棉厂用胶',
    category: 'composite',
    description: '内衣、箱包、玩具、鞋材、手袋、服装面料等专业贴合加工专用',
    features: ['耐水洗', '高温热压不黄变', '柔软', '初粘力强'],
    applications: ['内衣复合', '箱包贴合', '玩具制造', '鞋材加工', '服装面料'],
    process: '大滚筒热复合机，约200°C贴合烘干；热压温度200°C/60秒，或240°C/45秒',
    specifications: {
      '施工方式': '辊涂或刀片刮涂',
      '上胶要求': '需根据不同材料选择合适涂胶量和辊筒温度'
    }
  },
  {
    id: 'c-02',
    name: '服装面料复合胶',
    category: 'composite',
    description: '中大布匹市场，服装面料复合厂专用',
    features: ['辊涂', '刀片刮涂'],
    applications: ['中大布匹市场', '服装面料复合厂'],
    process: '大滚筒热复合机，温度200°C',
    specifications: {
      '适用材质': '内衣、箱包、玩具、鞋材、手袋、服装面料'
    }
  },
  {
    id: 'c-03',
    name: '海绵、喷胶棉复合胶',
    category: 'composite',
    description: '空气过滤厂、坐垫厂、鞋材厂、玩具厂专用',
    features: ['使用普通苯丙防水胶生产'],
    applications: ['空气过滤厂', '坐垫厂', '鞋材厂', '玩具厂']
  },
  {
    id: 'c-04',
    name: '无纺布塑料复合胶 / 台布胶',
    category: 'composite',
    description: 'PVC、珍珠棉、OPP、PS等材质与无纺布、针织布、木板的加热或常温复合',
    features: ['加热或常温均可'],
    applications: ['手袋厂', '台布厂', '地面保护膜'],
    specifications: {
      '复合材质': 'PVC、珍珠棉、OPP、PS + 无纺布/针织布/木板'
    }
  },
  {
    id: 'c-05',
    name: '箱包材料-PVC/PS面板与木板复合胶',
    category: 'composite',
    description: 'PVC、PA与中纤板、石膏板、胶合板、纸张等的冷贴复合',
    features: ['粘合强度高', '胶质细腻', '流平性好'],
    applications: ['音箱厂', '家具厂', '箱包厂'],
    process: 'PVC硬膜/PS硬膜与普通木板复合，辊涂上胶（木板面上胶），常温干燥'
  },
  {
    id: 'c-06',
    name: '阻燃复合胶',
    category: 'composite',
    description: '有阻燃耐火要求的产品生产专用',
    features: ['阻燃耐火'],
    applications: ['布料海绵复合加工行业', '非纺织品面料复合行业']
  },
  {
    id: 'c-07',
    name: '薄膜可移除胶 FL-5068',
    category: 'composite',
    description: '双组分可移丙烯酸酯共聚乳液，用于PE、PP、PET等薄膜的可移除标签/胶带',
    features: ['初粘性好', '剥离力增长低', '耐候性好', '泡沫少', '可移除性优异'],
    applications: ['PE/PP/PET薄膜可移除标签', '薄膜复合定位', '电子产品外壳保护膜', '家电表面保护膜', '建材不锈钢板保护膜']
  },
  {
    id: 'c-08',
    name: '薄膜半可移胶 FL-4561',
    category: 'composite',
    description: '单组分半可移丙烯酸酯共聚乳液，用于BOPP、PET、合成纸等薄膜半可移胶带',
    features: ['中高剥离力', '内聚性好', '耐高温低残胶（PET 120-150℃残胶≤20%）', '持粘力≥48h'],
    applications: ['PET瓶贴（48h无残胶）', 'BOPP/PET薄膜标签', '日化包装瓶标签', '物流运输标签', '医药包装']
  },
  {
    id: 'c-09',
    name: '普通压敏胶 AC-5829L',
    category: 'composite',
    description: '环保型高固含低粘度纯丙烯酸酯共聚乳液，用于BOPP、PET、PVC等普通膜胶带',
    features: ['透明度好', '中高剥离力8-12N/in', '持粘好', '高固含低粘度', '耐候性好'],
    applications: ['封箱胶带', '包装胶带', '普通膜胶带', '工业粘接', '印刷包装']
  },
  {
    id: 'c-10',
    name: '高性能薄膜标签压敏胶 AC-5309H',
    category: 'composite',
    description: '高性能薄膜标签用纯丙烯酸酯共聚乳液，种子聚合工艺，初粘高不溢胶',
    features: ['种子聚合工艺', '初粘高≥24#', '内聚力高不溢胶', '流平好无鱼眼', '耐候不黄变'],
    applications: ['高性能薄膜标签', '精细标签印刷', '电子元件标签', '汽车VIN标签', '医药食品包装标签']
  },
  {
    id: 'c-11',
    name: '地板胶专用改性乳液 FA-5878',
    category: 'composite',
    description: 'PVC地板胶专用环保改性乳液，无需另加增粘树脂，不含增塑剂，低气味低VOC',
    features: ['无需增粘树脂即高粘合强度', '对PVC/PE发泡体润湿性好', '内聚力及耐热性优', '不含增塑剂', '低气味低VOC'],
    applications: ['PVC片材地板胶', 'PE发泡体地板垫层', '幼儿园/健身房PVC地胶', '出口欧美环保地板胶', '旧地面翻新']
  },
  {
    id: 'c-12',
    name: '高粘压敏胶乳液 AC-5406',
    category: 'composite',
    description: '改性丙烯酸酯共聚物压敏胶，高初粘、表面能低、不残胶不破膜',
    features: ['高初粘≥24#', '表面能低', '耐水耐潮', '不残胶不破膜', '可配合交联剂使用'],
    applications: ['PVC型材表面保护膜', '电子产品外壳保护膜', '不锈钢板/铝塑板保护膜', '光面板材防护', '薄膜包装密封']
  },
  {
    id: 'c-13',
    name: 'PVC复合装饰胶 CF-6078',
    category: 'composite',
    description: '特殊种子聚合工艺，高固含（60%）干燥快，用于PVC装饰材料复合及高速包装贴合',
    features: ['特殊种子聚合', '高固含60%干燥快', '流平性好不溢胶', '对PVC附着力优', '耐候性良好'],
    applications: ['PVC装饰片材贴合', '礼品盒包装', 'BOPP/PET薄膜复合', '离型纸/格拉辛纸复合', 'PVC与纸张/织物复合']
  },

  // ===== 二、彩印纸品包装（10款）=====
  {
    id: 'p-01',
    name: '纸品通用型白乳胶',
    category: 'paper',
    description: '纸箱手工粘合、纸制品制作、瓦楞纸裱合、面纸裱合、流水线纸箱粘合',
    features: ['通用型', '干燥速度快', '性能稳定'],
    applications: ['纸箱手工粘合', '瓦楞纸裱合', '面纸裱合', '流水线纸箱'],
    specifications: {
      '固含量': '22-40%',
      '粘度': '8000-20000 mpa.s',
      '施工方式': '手工涂胶或半自动涂胶'
    }
  },
  {
    id: 'p-02',
    name: '裱纸裱盒胶',
    category: 'paper',
    description: '各种普通瓦楞纸箱、蜂窝纸板、牛皮纸袋、印刷彩盒、玩具盒、礼品盒、精装书上壳等',
    features: ['适用范围广', '粘合强度高'],
    applications: ['瓦楞纸箱', '蜂窝纸板', '牛皮纸袋', '印刷彩盒', '礼品盒', '精装书上壳']
  },
  {
    id: 'p-03',
    name: '高速上机胶',
    category: 'paper',
    description: '药盒、彩箱等纸制品在高速自动上胶机上使用的封边搭口工艺',
    features: ['高速连续生产', '快干'],
    applications: ['药盒', '彩箱', '高速自动上胶机封边搭口'],
    specifications: {
      '有膜纸张推荐': 'ZSJ纸塑胶',
      '普通油墨纸箱推荐': '高固含量的白乳胶'
    }
  },
  {
    id: 'p-04',
    name: '纸塑胶 / 黄胶',
    category: 'paper',
    description: '适用于光膜、哑膜覆膜面纸、磨光油材质、灰板纸、白板纸、普通光油、部分UV材质',
    features: ['较长开放时间', '超强初粘性', '终粘强度高', '可机上操作', '水性环保'],
    applications: ['光油盒', '磨光盒', '光膜哑膜彩盒', '覆膜手挽袋']
  },
  {
    id: 'p-05',
    name: '裱纸裱卡白乳胶',
    category: 'paper',
    description: '经济实用型，适用于牛皮纸、铜版纸、灰板纸、白板纸、木板',
    features: ['经济适用型', '粘接范围广'],
    applications: ['牛皮纸', '铜版纸', '灰板纸', '白板纸', '木板']
  },
  {
    id: 'p-06',
    name: '十二合一无味彩箱彩盒胶（1WA型）',
    category: 'paper',
    description: '多功能无味配方，适用于牛皮纸、光膜、哑膜、光油、UV、淋膜、特种纸、触感纸、金银卡',
    features: ['耐高低温', '环保无味', '手工/喷涂/滚涂通用', '起粘快', '不飞胶'],
    applications: ['彩箱', '彩盒', '特种纸盒', '金银卡盒']
  },
  {
    id: 'p-07',
    name: '礼盒胶 / 精装盒糊盒胶',
    category: 'paper',
    description: '高初粘+高终粘，适用于特种纸、触感纸、金银卡纸、光膜哑膜覆膜材质、塑胶盒',
    features: ['耐低温', '耐高温', '净味环保', '开机速度快'],
    applications: ['特种纸盒', '触感纸盒', '金银卡盒', '塑胶盒']
  },
  {
    id: 'p-08',
    name: '内托胶',
    category: 'paper',
    description: '专用EVA材质、珍珠绵材质的粘接',
    features: ['对EVA/珍珠绵粘接性强'],
    applications: ['EVA内托', '珍珠绵内托']
  },
  {
    id: 'p-09',
    name: '通用纸箱粘箱白乳胶',
    category: 'paper',
    description: '粘结强度高、使用范围广、干燥速度快、性能稳定可靠',
    features: ['粘结强度高', '干燥速度快', '性能稳定'],
    applications: ['手工粘接', '上机操作'],
    specifications: {
      '施工方式': '手工粘接或上机操作'
    }
  },
  {
    id: 'p-10',
    name: '纸袋胶（食品袋、瓷砖胶袋）',
    category: 'paper',
    description: '高速连续生产、快干型，适用于食品袋、瓷砖胶袋',
    features: ['高速连续生产', '快干'],
    applications: ['食品袋', '瓷砖胶袋', '高速包装生产线'],
    specifications: {
      '固含量': '6-12%'
    }
  },

  // ===== 三、密封胶系列（3款）=====
  {
    id: 's-01',
    name: '水性密封胶995 / 水性美容收边填缝胶',
    category: 'sealant',
    description: '高弹水性密封胶，可替代流通硅酮胶，用于门窗、外墙填缝、室内家装等',
    features: ['弹性好', '亮度好', '粘接力强', '不收缩', '不开裂', '固化后不溶于水'],
    applications: ['门窗填缝', '外墙填缝', '室内家装', '集成墙板', '护墙板', '纤维木板'],
    warranty: '厂家承诺：外墙5年不开裂',
    specifications: {
      '类型': '高弹水性密封胶',
      '可替代': '流通硅酮胶'
    }
  },
  {
    id: 's-02',
    name: '半高弹水性密封胶',
    category: 'sealant',
    description: '性价比高，适用于家装门窗填缝、室内美容收边、墙板、踢脚线等',
    features: ['性价比高', '室内家装专用'],
    applications: ['家装门窗', '室内美容收边', '墙板', '踢脚线', '纤维木板'],
    warranty: '厂家承诺：门窗3年不开裂'
  },
  {
    id: 's-03',
    name: '流通经济型水性密封胶',
    category: 'sealant',
    description: '室内密封专用（不能用于粘接）',
    features: ['经济实用', '室内密封'],
    applications: ['室内密封专用'],
    warranty: '厂里不承诺质保'
  },

  // ===== 四、防水涂料系列（6款）=====
  {
    id: 'w-01',
    name: 'JS系列弹性防水涂料',
    category: 'waterproof',
    description: '墙面裂缝、屋顶、卫生间、厨房、内外墙、窗户、阳台、星铁瓦面等防水补漏',
    features: ['防渗防潮', '耐高温', '附着力强', '耐酸碱', '耐磨'],
    applications: ['墙面裂缝', '屋顶', '卫生间', '厨房', '内外墙', '窗户', '阳台', '星铁瓦面'],
    process: '搭配水泥砂浆，JS+水泥粉搅拌均匀涂刷（不能加水）',
    specifications: {
      '施工要点': '涂刷2-3遍，每遍≤1毫米，十字型涂刷'
    }
  },
  {
    id: 'w-02',
    name: '防水隔热涂料',
    category: 'waterproof',
    description: '可降低物体表面温度10-20°C，降低室内温度',
    features: ['净味环保', '施工方便', '长久耐候', '降温10-20°C'],
    applications: ['铁皮厂房', '彩钢瓦屋顶', '水泥混凝土房顶', '车辆外包', '船舶外包装', '储物罐']
  },
  {
    id: 'w-03',
    name: '红橡胶外露型防水涂料',
    category: 'waterproof',
    description: '屋面、阳台、天台等直接暴露环境下的防水，使用寿命10年以上',
    features: ['耐候性强', '高弹性', '抗紫外线', '防水稳定持久'],
    applications: ['屋面', '阳台', '天台'],
    specifications: {
      '耐温范围': '-20°C至120°C',
      '使用寿命': '10年以上'
    }
  },
  {
    id: 'w-04',
    name: '外墙透明防水胶',
    category: 'waterproof',
    description: '建筑物外墙防水防潮工程，透明无色不改变原墙面颜色',
    features: ['透明无色', '不改变原墙面颜色', '透气性好', '环保水性'],
    applications: ['住宅外墙', '商业楼宇外墙', '公共设施外墙']
  },
  {
    id: 'w-05',
    name: '内墙工装耐擦洗乳胶漆',
    category: 'waterproof',
    description: '耐擦洗、干燥快、抗碱性、防霉性，适用于酒店、学校、医院、办公楼宇内墙',
    features: ['耐擦洗', '干燥快', '抗碱性', '防霉性'],
    applications: ['酒店', '学校', '医院', '办公楼宇', '家庭住宅内墙']
  },
  {
    id: 'w-06',
    name: '净味补墙膏',
    category: 'waterproof',
    description: '修补墙面破损、裂缝、孔洞等室内装修，无异味低VOC环保',
    features: ['低VOC', '无异味', '易操作', '适用范围广'],
    applications: ['墙面破损修补', '裂缝修补', '孔洞修补']
  },

  // ===== 五、建筑装饰胶系列（4款）=====
  {
    id: 'b-01',
    name: '装修白乳胶',
    category: 'construction',
    description: '贴纸、墙纸、宝丽纸、华丽纸、哈吧纸、超薄普通木纹纸及粘贴薄型夹板',
    features: ['超高粘度', '超强承重', '环保净味'],
    applications: ['贴纸', '墙纸', '宝丽纸', '华丽纸', '木纹纸', '薄型夹板']
  },
  {
    id: 'b-02',
    name: '108建筑胶水',
    category: 'construction',
    description: '防漏、建筑批灰专用，与粉料混合后施工',
    features: ['与粉料混合不流挂', '静置不返水', '附着力强'],
    applications: ['防漏', '建筑批灰（滑石粉、双飞粉、石灰、水泥等）']
  },
  {
    id: 'b-03',
    name: '瓷砖背胶',
    category: 'construction',
    description: '耐热耐寒、耐水性好、浓稠度高、渗透力强，避免空鼓掉砖',
    features: ['避免空鼓', '避免掉砖', '吸收墙面应力', '耐热耐寒', '耐水性好', '浓稠度高', '渗透力强'],
    applications: ['厨房墙面', '卫生间', '客厅', '走廊', '外墙贴瓷砖']
  },
  {
    id: 'b-04',
    name: '墙固地固固砂宝-界面剂',
    category: 'construction',
    description: '解决地面起砂、基墙粘结不牢、墙面起皮掉砂、墙面反碱等问题',
    features: ['加固松散基面', '提高粘结强度'],
    applications: ['地面起砂', '基墙粘结不牢', '墙面起皮掉砂', '墙面反碱掉砂', '地面硬度不够', '墙面发霉脱粉']
  },

  // ===== 六、工业漆系列（2款）=====
  {
    id: 'i-01',
    name: '水性防锈转锈工业漆',
    category: 'industrial',
    description: '桥梁、钢结构建筑、机械设备、车辆、船舶、管道等金属表面防护与翻新',
    features: ['以水为分散介质', 'VOC极低或无', '转锈功能', '耐候性强'],
    applications: ['桥梁', '钢结构建筑', '机械设备', '车辆', '船舶', '管道']
  },
  {
    id: 'i-02',
    name: '水性彩钢瓦翻新漆',
    category: 'industrial',
    description: '工业厂房、仓库、市场大棚、住宅屋顶等彩钢瓦屋面翻新维护',
    features: ['防锈防腐', '附着力强', '色彩丰富', '施工便捷'],
    applications: ['工业厂房', '仓库', '市场大棚', '住宅屋顶彩钢瓦']
  },

  // ===== 七、植绒胶系列（6款）=====
  {
    id: 'f-01',
    name: '海绵植绒胶',
    category: 'flocking',
    description: '用于海绵材质植绒加工',
    features: ['对海绵附着力强', '柔软手感'],
    applications: ['海绵植绒加工']
  },
  {
    id: 'f-02',
    name: '纸张植绒胶',
    category: 'flocking',
    description: '用于纸张材质植绒加工',
    features: ['纸张兼容性好', '粘接牢固'],
    applications: ['纸张植绒加工']
  },
  {
    id: 'f-03',
    name: 'ABS植绒胶',
    category: 'flocking',
    description: '用于ABS塑料材质植绒',
    features: ['ABS塑料专用', '粘接强度高'],
    applications: ['ABS塑料植绒']
  },
  {
    id: 'f-04',
    name: 'PVC玩具植绒胶',
    category: 'flocking',
    description: '用于PVC玩具表面植绒',
    features: ['PVC材质专用', '安全环保'],
    applications: ['PVC玩具表面植绒']
  },
  {
    id: 'f-05',
    name: '衣架植绒胶',
    category: 'flocking',
    description: '用于衣架表面植绒加工',
    features: ['衣架表面专用', '耐磨不掉绒'],
    applications: ['衣架表面植绒']
  },
  {
    id: 'f-06',
    name: '硅胶植绒',
    category: 'flocking',
    description: '用于硅胶材质植绒加工',
    features: ['硅胶材质专用', '附着力强'],
    applications: ['硅胶植绒加工']
  },

  // ===== 八、硬挺类应用（7款）=====
  {
    id: 'st-01',
    name: '抛光轮、麻轮硬挺胶',
    category: 'stiffening',
    description: '用于抛光轮、麻轮加硬定型',
    features: ['高硬度定型', '耐磨'],
    applications: ['抛光轮加硬', '麻轮定型']
  },
  {
    id: 'st-02',
    name: '纺织面料硬挺胶',
    category: 'stiffening',
    description: '用于纺织面料上浆加硬',
    features: ['面料上浆专用', '硬度均匀'],
    applications: ['纺织面料上浆']
  },
  {
    id: 'st-03',
    name: '捆绑带硬挺胶',
    category: 'stiffening',
    description: '用于捆绑带加硬定型',
    features: ['捆绑带定型专用'],
    applications: ['捆绑带加硬']
  },
  {
    id: 'st-04',
    name: '弹力伸缩织带硬挺胶',
    category: 'stiffening',
    description: '用于弹力伸缩织带加硬',
    features: ['弹力织带专用', '定型效果好'],
    applications: ['弹力伸缩织带加硬']
  },
  {
    id: 'st-05',
    name: '窗帘带硬挺胶',
    category: 'stiffening',
    description: '用于涤纶窗帘带上浆加硬',
    features: ['涤纶窗帘带专用'],
    applications: ['涤纶窗帘带上浆']
  },
  {
    id: 'st-06',
    name: '棉锥硬挺粘合胶',
    category: 'stiffening',
    description: '废旧纤维真空泵成型，硬度+粘合强度双重效果',
    features: ['硬度+粘合强度', '真空泵成型'],
    applications: ['棉锥成型']
  },
  {
    id: 'st-07',
    name: '玻纤硬挺胶',
    category: 'stiffening',
    description: '用于玻纤网格布加硬定型',
    features: ['玻纤材质专用', '定型持久'],
    applications: ['玻纤网格布加硬']
  },

  // ===== 九、家具类（5款）=====
  {
    id: 'fu-01',
    name: '贴纸胶',
    category: 'furniture',
    description: '家具表面贴纸粘合专用',
    features: ['粘接牢固', '不伤表面'],
    applications: ['家具表面贴纸']
  },
  {
    id: 'fu-02',
    name: '压板胶',
    category: 'furniture',
    description: '压板工艺专用',
    features: ['压板工艺专用', '高强度'],
    applications: ['压板工艺']
  },
  {
    id: 'fu-03',
    name: '拼板胶',
    category: 'furniture',
    description: '木板拼接粘合专用',
    features: ['木板拼接专用', '高粘接强度'],
    applications: ['木板拼接']
  },
  {
    id: 'fu-04',
    name: '木皮胶',
    category: 'furniture',
    description: '木皮贴面粘合专用',
    features: ['木皮贴面专用', '粘接平整'],
    applications: ['木皮贴面']
  },
  {
    id: 'fu-05',
    name: '真空吸塑胶',
    category: 'furniture',
    description: '真空吸塑工艺专用',
    features: ['真空吸塑专用', '成型好'],
    applications: ['真空吸塑工艺']
  },

  // ===== 十、其他（4款）=====
  {
    id: 'o-01',
    name: '通用白乳胶',
    category: 'other',
    description: '通用型白乳胶，用途广泛',
    features: ['通用型', '用途广泛'],
    applications: ['通用粘接']
  },
  {
    id: 'o-02',
    name: '金葱粉胶',
    category: 'other',
    description: '用于金葱粉加工，呈现金色闪粉质感效果',
    features: ['金色闪粉质感', '附着力强', '施工便捷'],
    applications: ['金葱粉加工', 'DIY手工', '礼品包装'],
    image: '/images/product-o-02-glitter-adhesive.png',
  },
  {
    id: 'o-03',
    name: '马赛克胶',
    category: 'other',
    description: '马赛克颗粒与玻纤网、涤纶六角网、纸网粘合',
    features: ['多材质粘接', '马赛克专用'],
    applications: ['马赛克颗粒粘网']
  },
  {
    id: 'o-04',
    name: '台板胶',
    category: 'other',
    description: '高粘度不干胶，用于印花平台布料定位',
    features: ['高粘度不干', '定位专用'],
    applications: ['印花平台布料定位']
  },
];
