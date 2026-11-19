
import type Project from "../types/IProjects";
import loco_art_market_img from "../assets/LOCO-logo.png";
import microservice_ime from "../assets/microservice_img.png";

export const projects: Project[] = [
  {
    title: "OHQUAO & LÔCÔ Art Market",
    subtitle: "Hệ thống quản lý và đặt booth trực tuyến",
    description:
      "Phát triển hệ thống quản lý sơ đồ gian hàng, đặt booth trực tuyến, kiểm tra điều kiện đăng ký của vendor, xử lý đặt chỗ đồng thời và quản lý sự kiện.",
    image: loco_art_market_img,
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "MySQL",
      "AWS Amplify",
      "Render",
    ],
    website: "https://locoartmarket.com",
  },
  {
    title: "Website Sản phẩm Nội thất",
    subtitle: "Hệ thống thương mại điện tử Microservices",
    description:
      "Khóa luận tốt nghiệp - Xây dựng nền tảng thương mại điện tử nội thất theo kiến trúc Microservices. Tích hợp Kafka, Eureka, API Gateway, JWT, RBAC, VNPay, GHN và hệ thống gợi ý sản phẩm.",
    image: microservice_ime,
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "MySQL",
      "MongoDB",
      "React",
      "TypeScript",
    ],
  },
//   {
//     title: "Hệ thống quản lý thư viện",
//     subtitle: "Hệ thống quản lý thư viện sách với MongoDB",
//     description:
//       "Xây dựng hệ thống quản lý thư viện sử dụng MongoDB, thực hiện các thao tác CRUD đối với sách và người dùng; thiết kế cơ sở dữ liệu, quản lý tài khoản và phân quyền truy cập theo vai trò (RBAC), đảm bảo tính bảo mật và kiểm soát quyền thao tác dữ liệu.",
//     image: "",
//     technologies: [
//       "MongoDB",
//       "CRUD",
//       "RBAC",
//       "Database Design",
//       "Authentication",
//       "Authorization",
//     ],
//   },
];
