import React from "react";

const Home = () => {
  return (
    <section
        id="home"
        className="min-h-[100vh] bg-PrimaryBgTien flex items-end justify-center relative"
        style={{
            backgroundImage: 'url("/fight.png")',
            backgroundSize: '50% 100%',
            backgroundPosition: 'left top',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className="absolute top-0 left-0 bg-black opacity-70 w-full sm:w-[50vw] h-[100vh]">
            <img
                id="hcm"
                src="https://backan.gov.vn/SiteCollectionDocuments/461-073e9c731a6f.jpg"
                alt="Chủ tịch Hồ Chí Minh"
                className="w-full h-full object-cover"
            />
        </div>

        <div className="absolute top-0 right-0 bg-black opacity-100 w-full sm:w-[50vw] h-[100vh]">
            <img
                id="nha-rong"
                src="https://danviet.mediacdn.vn/thumb_w/650/2020/5/26/929-15904910607461031609626.jpg"
                alt="Bến cảng nhà rồng"
                className="w-full h-full object-cover"
            />
        </div>

        <div className="absolute top-2 left-[50.75%] 3xl:left-[51.2%] transform -translate-x-1/2">
            <h1 className="text-xl 3xl:text-[30px] font-semibold mb-6">
            <span className="text-white relative">
            Bác Hồ Và Những Bước&nbsp;
                <span className="absolute -bottom-1 right-[2px] 3xl:right-1 h-[2.5px] w-[40px] bg-yellow"></span>
            </span>
            <span className="text-black relative">
            Chân Khởi Nguồn Cách Mạng
                <span className="absolute -bottom-1 -left-[2px] 3xl:-left-1 h-[2.5px] w-[40px] bg-black"></span>
            </span>
            </h1>
        </div>
        <div className="absolute top-[5vh] right-[10vw] mt-10">
            <h1 className="font-semibold mb-6">
                <span className="text-black text-base 3xl:text-2xl ps-1 font-extrabold vertical-text relative">
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>B</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>Ế</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>N</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}> </span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>N</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>H</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>À</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}> </span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>R</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>Ồ</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>N</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>G</span>
                </span>
                <span className="text-black text-[90px] 3xl:text-[120px] leading-[90px] font-extrabold vertical-text relative">
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>1</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>9</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>1</span>
                    <span className="char text-black" style={{transform: 'translate(0px, 0px)', opacity: 1}}>1</span>
                </span>
            </h1>
        </div>
        <div className="flex flex-col md:flex-row items-end justify-center w-full ms-[90px]">
            <div className="flex-1 mb-16 text-white h-full text-center md:text-left">
            <div
                className="ms-10"
                style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                }}
            >
                <div className="text-2xl font-extrabold" style={{color: "black"}}>"Không có gì quý hơn độc lập, tự do"</div>
                <div className="text-3xl font-extrabold" style={{color: "black"}}>
                    17/7/1966
                </div>
                <div className="text-5xl font-extrabold leading-[50px]">
                
                </div>
            </div>
        </div>
        <div className="flex-1 h-full object-center">
          <div className="flex-1 h-full object-center">
                
          </div>
        </div>
        <div className="flex-1 text-black bg-yellow pl-6 pr-6 pb-3 pt-12 rounded-lg shadow-lg">
          <div className="absolute bottom-52 3xl:bottom-52 right-0 flex w-auto justify-end gap-4">
            <div className="w-[230px] h-[130px] 3xl:w-[270px] 3xl:h-[150px] overflow-hidden rounded-md">
              <div style={{ borderRadius: "8px", width: "100%", height: "100%" }}>
                {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDBhfn_UBSeeuNYuT5F_i4lIID1iND5MVYg&s"
                alt="HCM"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                    objectPosition: "top"
                }}
                /> */}
              </div>
            </div>
                {/* <video
                  src="70Y-DienBienPhu.mp4"
                  preload="auto"
                  controls
                  style={{ width: "100%", height: "100%" }}
                  className="w-[230px] h-[130px] 3xl:w-[250px] 3xl:h-[150px] object-cover rounded-md"
                ></video> */}
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
