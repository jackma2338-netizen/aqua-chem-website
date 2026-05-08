/**
 * 公司常量配置
 * 佛山市梦泽精细化工有限公司
 */

export const COMPANY_INFO = {
  name: '佛山市梦泽精细化工有限公司',
  nameEn: 'Foshan Mengze Fine Chemical Co., Ltd.',
  slogan: '专注水性合成乳液，全产品线60款精细化工产品',
  description: '佛山市梦泽精细化工有限公司专业从事水性合成乳液研发、生产与销售，主营密封胶、防水涂料、彩印纸品包装胶、工业漆、植绒胶、硬挺剂等60款全系列产品，覆盖复合、纸品包装、密封胶、防水、建筑装饰、工业漆、植绒、硬挺、家具等十大应用领域。',
  established: '2010',
  address: {
    province: '广东省',
    city: '佛山市',
    district: '顺德区',
    street: '请填写具体街道地址',
    postalCode: '528000'
  },
  phone: '18929987773',
  email: '18929987773@163.com',
  contact: '罗工',
  website: 'aqua-chem-website.vercel.app'
} as const;

export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '产品中心', href: '/products' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
] as const;

export const ADVANTAGES = [
  {
    icon: 'Droplets',
    title: '全水性产品线',
    description: '60款产品全覆盖，水性环保，满足各行业专业需求。'
  },
  {
    icon: 'Award',
    title: '品质可靠',
    description: '多年精细化工生产经验，每批产品经过严格质检。'
  },
  {
    icon: 'Users',
    title: '技术支持',
    description: '专业团队提供技术咨询和解决方案，助力客户产品升级。'
  },
  {
    icon: 'Zap',
    title: '快速响应',
    description: '充足库存，灵活配送，联系人：罗工 18929987773。'
  }
] as const;

export const SOCIAL_LINKS = [
  { name: '电话', icon: 'Phone', href: 'tel:18929987773' },
  { name: '联系人', icon: 'User', contact: '罗工' }
] as const;
