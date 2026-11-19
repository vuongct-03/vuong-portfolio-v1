
export default function Knowledge() {
  return (
    <section id="knowledge" className="portfolio-section">
      <h2 className="section-title">KIẾN THỨC CHUYÊN MÔN</h2>

      <ul className="knowledge-list">
        <li className="mt-3">
          <strong>Frontend:</strong> Phát triển giao diện Responsive,
          quản lý Component, Props, React Hooks, điều hướng với
          React Router và tích hợp REST API.
        </li>

        <li className="mt-3">
          <strong>Backend:</strong> Thiết kế RESTful API theo kiến trúc
          phân lớp, xử lý nghiệp vụ, xác thực, phân quyền và phát
          triển hệ thống Microservices.
        </li>

        <li className="mt-3">
          <strong>Database:</strong> Thiết kế và quản trị MySQL,
          MongoDB; thiết kế & xây dựng mô hình dữ liệu, truy vấn,
          đảm bảo tính toàn vẹn dữ liệu.
        </li>

        <li className="mt-3">
          <strong>Cloud & Deployment:</strong> Triển khai ứng dụng
          trên Render, Aiven, AWS Amplify; có kiến thức nền tảng
          về AWS EC2, VPC, RDS, S3 và các dịch vụ Cloud.
        </li>

        <li className="mt-3">
          <strong>Kiến thức nền tảng:</strong> OOP, SOLID, ACID,
          Design Patterns,
          GitHub, bảo mật và lập trình đồng bộ,
          bất đồng bộ.
        </li>
      </ul>
    </section>
  );
}
