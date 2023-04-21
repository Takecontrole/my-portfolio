import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  dashboard,
  valenAdmin,
  pizza,
  valen,
  studio,
  appleNext,
  apple,
  furniture,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Обо мне",
  },
  {
    id: "projects",
    title: "Мои работы",
  },
  {
    id: "contact",
    title: "Связаться",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stuck разработчик",
    company_name: "",
    icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "Я эксперт по дизайну пользовательского интерфейса и взаимодействия с данными, и я могу предоставить полные комплексные решения для Вашего сайта, которые помогут с лёгкостью запустить Вашу бизнес идею.",
    ],
  },
  {
    title: "Обслуживание",
    company_name: "Новейшие технологии",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Комплексный веб-дизайн для малого и среднего бизнеса. Уникальные, современные и профессионально выглядящие веб-сайты, созданные с учетом вовлечения пользователей.",
    ],
  },
  {
    title: "Процесс",
    company_name: "Постоянная коммуникация",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Я буду информировать Вас на каждом этапе разработки. Вы сможете видеть весь процесс от начала до конца, оценивать и вносить корректировки по желанию.",
    ],
  },
  {
    title: "Управляйте сайтом сами",
    company_name: "Панель управления",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Я создам для Вас панель управления с правами администратора где Вы сможете добавлять, редактировать и удалять всё самостоятельно, а так-же видеть аналитику продаж, пользователей, их заказы, общаться с ними через внутренний мессенджер"
    ],
  },
  {
    title: "Результат",
    company_name: "Оптимизированное присутсвие в интернете",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Вы получите оптимизированный веб-сайт и дизайн веб-сайта. Безопасный, мобильный, быстрый, простой в управлении и обслуживании, а также полностью редактируемый.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Магазин одежды",
    description:
      "Web платформа, с уникальным дизайном, которая позволяет пользователям, просматривать товары и фильтровать их, добавлять их в корзину и список желаний, оплачивать покупки, общаться с администратором.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: valen,
    source_code_link: "https://valen-nine.vercel.app/",
  },
  {
    name: "Панель управления",
    description:
      "А так выглядит панель управления для администратора, откуда можно управлять интернет магазином самостоятельно.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: valenAdmin,
    source_code_link: "https://valentino-admin.vercel.app/",
  },
  {
    name: "Мебель",
    description:
      "Ещё один вариант интернет магазина.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://furniture-six-nu.vercel.app/",
  },
];

const projects2 = [
  {
    name: "Apple",
    description:
      "Кросота в простоте и удобстве.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://take-control-delta.vercel.app/",
  },
 {
    name: "Пицца",
    description:
      "В этой пиццерии покупатели могут заказывать пиццу выбирая желаемые ингредиенты",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "pizza-with-backend.vercel.app",
  },
  {
    name: "Панель управления",
    description:
      "Альтернативный дизайн панели управления с тем же функционалом.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://admin-dashboard-gilt-mu.vercel.app/",
  },
];

const projects3 = [
    {
    name: "Презентация новой модели",
    description:
      "Этот сайт акцентирован на показе одного единственного товара. который привлекает покупателя своим необычным 3D дизайном",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: appleNext,
    source_code_link: "https://3dapple.vercel.app/",
  },
  {
    name: "Студия моды",
    description:
      "Стильный дизайн. Презентация коллекции.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "animations",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: studio,
    source_code_link: "https://fashion-studio-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2, projects3 };
