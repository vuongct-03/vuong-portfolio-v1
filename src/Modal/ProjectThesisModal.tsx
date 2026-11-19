
import { Modal } from "react-bootstrap";
import {
  CheckCircle2,
  Layers3,
  Network,
} from "lucide-react";

import "./ProjectLoCoModal.css";

interface Props {
  show: boolean;
  onHide: () => void;
}

export default function ProjectThesisModal({
  show,
  onHide,
}: Props) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      scrollable
      className="project-detail-modal"
    >
      <Modal.Header closeButton>
        <div className="project-modal-heading">
          <Modal.Title>
            Furniture E-commerce
          </Modal.Title>

          <p>
            Hệ thống thương mại điện tử nội thất
            theo kiến trúc Microservices
          </p>
        </div>
      </Modal.Header>

      <Modal.Body>
        {/* TỔNG QUAN */}
        <div className="project-modal-section">
          <h3>
            <Layers3 size={19} />
            Tổng quan dự án
          </h3>

          <p>
            Nghiên cứu và phát triển nền tảng thương mại
            điện tử nội thất theo kiến trúc Microservices,
            hướng đến xây dựng hệ thống có khả năng
            mở rộng, dễ bảo trì và quản lý độc lập
            các chức năng nghiệp vụ.
          </p>

          <p>
            Hệ thống hỗ trợ hoạt động mua bán trực tuyến,
            kết nối người mua và nhà bán hàng, đồng thời
            tích hợp các dịch vụ thanh toán, vận chuyển
            và gợi ý sản phẩm nhằm nâng cao trải nghiệm
            người dùng.
          </p>
        </div>

        {/* CHỨC NĂNG */}
        <div className="project-modal-section">
          <h3>
            <CheckCircle2 size={19} />
            Chức năng chính
          </h3>

          <ul className="project-detail-list">
            <li>
              Xây dựng hệ thống quản lý sản phẩm,
              danh mục, tồn kho và thông tin
              nhà bán hàng.
            </li>

            <li>
              Phát triển các chức năng thương mại
              điện tử như giỏ hàng, đặt hàng, đánh giá
              quản lý đơn hàng và theo dõi
              quá trình mua sắm.
            </li>

            <li>
              Tích hợp cổng thanh toán trực tuyến
              VNPay và dịch vụ vận chuyển GHN.
            </li>

            <li>
              Xây dựng hệ thống xác thực và
              phân quyền người dùng theo vai trò,
              hỗ trợ quản lý các chức năng
              tương ứng với từng nhóm người dùng.
            </li>

            <li>
              Phát triển chức năng quản lý
              chương trình khuyến mãi và
              hỗ trợ hoạt động bán hàng.
            </li>

            <li>
              Xây dựng hệ thống gợi ý sản phẩm
              dựa trên mức độ tương đồng và
              hành vi tương tác của người dùng.
            </li>

            <li>
              Phát triển giao diện quản trị
              và quản lý dành cho các vai trò
              trong hệ thống.
            </li>
          </ul>
        </div>

        {/* KIẾN TRÚC HỆ THỐNG */}
        <div className="project-modal-section">
          <h3>
            <Network size={19} />
            Kiến trúc và giải pháp kỹ thuật
          </h3>

          <ul className="project-detail-list">
            <li>
              Thiết kế hệ thống theo kiến trúc
              Microservices, phân tách các
              chức năng nghiệp vụ thành
              những dịch vụ độc lập.
            </li>

            <li>
              Sử dụng Spring Cloud Gateway,
              Eureka và OpenFeign để hỗ trợ
              định tuyến, khám phá dịch vụ
              và giao tiếp giữa các Microservices.
            </li>

            <li>
              Tích hợp Apache Kafka để xử lý
              giao tiếp bất đồng bộ và
              trao đổi sự kiện giữa các dịch vụ.
            </li>

            <li>
              Kết hợp MySQL và MongoDB
              để lưu trữ, quản lý dữ liệu
              phù hợp với đặc điểm
              của từng dịch vụ.
            </li>

            <li>
              Áp dụng Spring Security, JWT
              và RBAC để xác thực,
              phân quyền và bảo vệ
              tài nguyên hệ thống.
            </li>

            <li>
              Áp dụng thuật toán Cosine Similarity
              trong xây dựng chức năng
              gợi ý sản phẩm.
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}
