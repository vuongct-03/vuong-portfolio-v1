
import {Modal } from "react-bootstrap";
import {
  CheckCircle2,
  Layers3,
} from "lucide-react";

import "./ProjectLoCoModal.css";

interface Props {
  show: boolean;
  onHide: () => void;
}

export default function ProjectDetailModal({
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
            OHQUAO & LÔCÔ Art Market
          </Modal.Title>

          <p>Hệ thống quản lý và đặt booth trực tuyến</p>
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
            Phát triển hệ thống quản lý và đặt booth
            trực tuyến cho LÔCÔ Art Market, hỗ trợ
            ban tổ chức quản lý sơ đồ gian hàng,
            thông tin vendor và quy trình đăng ký
            tham gia sự kiện.
          </p>

          <p>
            Hệ thống số hóa quy trình lựa chọn gian hàng,
            kiểm tra điều kiện đăng ký và xử lý các
            yêu cầu đặt chỗ đồng thời, đảm bảo tính
            chính xác và nhất quán của dữ liệu.
          </p>

            <p>
            Xây dựng công cụ quản lý và tùy chỉnh sơ đồ gian hàng linh hoạt,
            cho phép LÔCÔ thiết kế bố cục, cấu hình vị trí, kích thước và
            giá booth phù hợp với quy mô và đặc điểm của từng sự kiện.
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
                    Thiết kế và quản lý sơ đồ booth dạng lưới,
                    cấu hình vị trí, kích thước, giá và trạng thái
                    của từng gian hàng.
                </li>
                <li>
                    Quản lý Mã gian hàng, màu sắc gian hàng theo zone.
                </li>

                <li>
                    Cho phép vendor lựa chọn vị trí gian hàng
                    trực tiếp trên sơ đồ, kiểm tra điều kiện
                    và xác nhận đặt booth.
                </li>

                <li>
                    Kiểm tra số điện thoại, loại booth, mức giá đã đăng ký và chi phí phát sinh trước khi đặt chỗ.
                </li>

                <li>
                    Áp dụng Database Transaction và Atomic Update
                    để ngăn chặn tình trạng nhiều vendor đặt trùng
                    một gian hàng.
                </li>

                <li>
                    Theo dõi trạng thái gian hàng, thống kê số lượng
                    booth đã đặt, doanh thu và các khoản thanh toán
                    bổ sung.
                </li>

                <li>
                    Thiết lập thời gian mở và đóng đăng ký,
                    kiểm soát quyền truy cập và hiển thị thông báo
                    theo trạng thái sự kiện.
                </li>
                </ul>
        </div>


      </Modal.Body>
    </Modal>
  );
}
