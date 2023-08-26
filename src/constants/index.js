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
  commercePlatform,
  socialMedia
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
    title: "Уверенно знаю",
    company_name: "",
    icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "React • Redux • JavaScript • REST API • MongoDB • Git • CSS + (Material ui, Tailwind, Styled components, Bootstrap) • Responsive/Adaptive design • HTML •",
    ],
  },
  {
    title: "Понимаю и практиковал",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Node js • Express • Next js • Saas • TypeScript • Socket io",
    ],
  },
      {
    title: "Софт-скилы",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Свободно говорю на английском (С1), испанском (В2), базово на китайском(А2). Не скован в коллективе, легко общаюсь, прислушиваюсь к другим и воспринимаю критику, вежливый, не ругаюсь, не создаю драмм, держу позитивный настрой. Возьму во внимание, что самомотивация помогла мне достичь многих целей, а трудности научили решать проблемы и находить способ двигаться вперёд, гибко и логически мыслить, и адаптироваться к новому.",
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
    name: "Социальная сеть",
    title: "Основной функционал, который я реализовал в этом проекте:",
    description:
      "Приватные маршруты, авторизация с токеном и валидацией, подключил Redux, cloudinary, запросы к api в отдельном файле, тёмная/светлая тема, настройку профиля, подписки на друзей, возможность добавлять, редактировать и удалять записи на странице профиля, а также видео, фото и музыку в личных альбомах, лайки, комментарии и ответ на комментарии, пагинация, добавление в закладки, страница с новостями, рекоминдация по подпискам, чат (со смайликами), online/offline статус, уведомления, поиск по людям с фильтром, по постам и видео, раздел с музыкой, анимации, модальные окна. И многое другое.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
       {
        name: "Material UI/CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://social-media-puce-rho.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/social-media",
  },
  {
    name: "Комерческая платформа",
    title: "Основной функционал, который я реализовал в этом проекте:",
    description:
      "Отдельные маршруты для пользователей, продовцов и администраторов. Для регистрации необходимо подтверждение email, на почту приходит письмо.",
    description1:
      "Продавец может: создавать и контролировать товары, события, скидочные купоны, видеть денежный баланс, выводить деньги, список заказов, изменять статус заказов, подтверждать возврат средств, принимать и отправлять сообщения в реальном времени, редактировать профиль. ",
    description2:
      "Покупатель может: искать товары, добавлять их в карзину, избранное, редактировать профиль, менять пароль, оформлять заказ (подключена платёжная система stripe), отменять доставку, оценивать продавцов, оставлять отзывы, писать продавцу, видеть лидеров продаж.",
    description3:
      "Администратор может: видеть и контролировать всех пользователей и продацов, видеть все товары, события и заказы.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
       {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: commercePlatform,
    source_code_link: "https://frontend-commerce-two.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/frontend-commerce",
  },
  {
    name: "Магазин одежды",
    description:
      "Анимации, свайперы, табы, красивый дизайн, web платформа позволяет пользователям просматривать и фильтровать товары, видеть похожие, добавлять их в корзину, оплачивать покупки. Есть динамичная панель управления для админа с различными CRUD операциями.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
            {
        name: "Styled components",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: valen,
    source_code_link: "https://valen-nine.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/valen",
  },
];
const proud = [
  {
    name: "Магазин одежды",
    description:
      "Анимации, свайперы, табы, красивый дизайн, web платформа позволяет пользователям просматривать и фильтровать товары, видеть похожие, добавлять их в корзину, оплачивать покупки. Есть динамичная панель управления для админа с различными CRUD операциями.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: valen,
    source_code_link: "https://valen-nine.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/valen",
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
    source_code_link_github: "https://github.com/Takecontrole/valentino-admin",
  },
  {
    name: "Мебель",
    description:
      "Ещё один вариант интернет магазина.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
       {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://furniture-six-nu.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/furniture",
  },
];

const projects3 = [
  {
    name: "Apple",
    description:
      "TypeScript. Вход через google аккаунт, анимация при скролле, redux-toolkit.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
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
    source_code_link_github: "https://github.com/Takecontrole/apple/tree/main",
  },
 {
    name: "Пицца",
    description:
      "Покупатели могут заказывать пиццу выбирая желаемые ингредиенты, оформлять доставку, есть панель администратора для контроля доставки.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://pizza-with-backend.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/pizza-nextjs/tree/main",
  },
];

const projects2 = [
  {
    name: "Студия моды",
    description:
      "framer-motion, gsap, locomotive-scroll, normalize.css.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Animations",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: studio,
    source_code_link: "https://fashion-studio-one.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/fashion-studio",
  },
    {
    name: "Мебель",
    description:
      "mern-stack, redux-toolkit, stripe, socket io, bootstrap, react-reveal, .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
       {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://furniture-six-nu.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/furniture",
  },
    {
    name: "Панель управления",
    description:
      "Formik, yup , mui icons, mui-data-grid, nivo, char.js, fullcalendar.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://admin-dashboard-gilt-mu.vercel.app/",
    source_code_link_github: "https://github.com/Takecontrole/AdminDashboard",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2, projects3 };
