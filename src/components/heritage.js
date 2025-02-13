import React from "react";
import "./heritage.css";

const Heritage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden" id="heritage">
      <div className="swiper swiper-no-swiping swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide swiper-slide-active"
            style={{ width: "1280px" }}
          >
            <section
              id="context"
              className="h-[100vh] pt-[28px] bg-primaryBgColor relative" style={{width: "100vw", height: "100vh"}}
            >
              <h2
                className="context-title w-full text-center"
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                  textAlign: "center",
                  textTransform: "uppercase",
                  marginLeft: "28px",
                  textShadow:
                    "rgba(39, 34, 27, 0.4) 0.0441942em 0.0441942em 0em",
                }}
              >
                <span
                  className="relative"
                  style={{
                    color: "rgb(253, 201, 14)",
                    textDecoration: "underline",
                    textDecorationColor: "rgb(0, 0, 0)",
                    marginRight: "2px",
                  }}
                >
                  DI&nbsp;
                </span>
                <span
                  className="relative"
                  style={{
                    color: "rgb(0, 0, 0)",
                    textDecoration: "underline",
                    textDecorationColor: "rgb(253, 201, 14)",
                    textDecorationSkip: "none",
                  }}
                >
                  SẢN
                </span>
              </h2>
              <div className="context-content">
              <div
                className="left-side"
                style={{
                  backgroundImage:
                    'url("https://www.nxbctqg.org.vn/img_data/images/590078416353_a4aeee8b-6cc8-4b00-b8f7-345c16fc650b.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "top center", // Đặt ảnh bắt đầu từ trên, canh giữa theo chiều ngang
                  backgroundRepeat: "no-repeat",
                }}
              >

                  <div className="context-content-title">
                    <span style={{ fontSize: "28px" }}>
                      Tư tưởng Hồ Chí Minh
                    </span>
                    <br />
                    <span
                      className="uppercase"
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginTop: "4px",
                      }}
                    >
                      Tư tưởng cách mạng vô sản
                      <br />
                      <p>
                        Ảnh hưởng của Hồ Chí Minh đối với phong
                        trào giải phóng dân tộc trên thế giới
                      </p>
                    </span>
                  </div>
                </div>
                <div className="right-side pt-[100px]">
                  <div className="relative w-full h-fit">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/11/Ho_Chi_Minh_Museum_-_Hanoi%2C_Vietnam_-_DSC03496.JPG"
                      alt="bao-tang-hcm"
                      style={{
                        height: "300px",
                        objectFit: "contain",
                        objectPosition: "left top",
                      }}
                    />
                    <div className="context-content-detail absolute -bottom-[-47px] -left-[-47px] max-w-[540px]">
                      <span style={{ fontSize: "16px" }}>
                        BẢO TÀNG HỒ CHÍ MINH
                      </span>
                      <br />
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "16px",
                          fontWeight: "400",
                          marginTop: "4px",
                          fontStyle: "italic",
                        }}
                      >
                        Lưu giữ và trưng bày những tài liệu, hiện vật liên quan
                        đến cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full h-fit mt-6 pr-52 flex justify-end">
                    <img
                      src="https://baotanghochiminh.vn/pic/Service/images/Pac%20Bo%20-%20Cao%20Bang%20HT%20(Large).jpg"
                      alt="pac-bo"
                      style={{
                        height: "300px",
                        objectFit: "contain",
                        objectPosition: "left top",
                      }}
                    />
                    <div className="context-content-detail absolute -bottom-[-32px] -right-[-12px] max-w-[560px] fadeInUp">
                      <span style={{ fontSize: "16px" }}>
                        DI TÍCH LỊCH SỬ TẠI PÁC BÓ
                      </span>
                      <br />
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "16px",
                          fontWeight: "400",
                          marginTop: "4px",
                          fontStyle: "italic",
                        }}
                      >
                        Di tích này có giá trị đặc biệt về lịch sử và văn hóa,
                        mang đậm dấu ấn của những năm tháng kháng chiến và hoạt
                        động cách mạng.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Repeat similar structure for other slides */}
        </div>
      </div>
    </div>
  );
};

export default Heritage;
