import React, { useState, useEffect } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import ReactDOM from 'react-dom';
import './cards.scss';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ image, title, content }) => (
  <div className='card'>
    <img src={image} alt={title}/>
    <div className='text-content'>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const [maxVisible, setMaxVisible] = useState(MAX_VISIBILITY);
  const count = React.Children.count(children);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMaxVisible(1);
      } else if (window.innerWidth <= 768) {
        setMaxVisible(2);
      } else {
        setMaxVisible(MAX_VISIBILITY);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on load

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointer-events': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
    </div>
  );
};

const Cards = () => (
  <div className='app' id="cards">
    <Carousel>
      {/* {[...new Array(CARDS)].map((_, i) => (
        <Card key={i} title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
      ))} */}
      <Card 
        image={"https://th.bing.com/th/id/R.84570ff356d96770e0ec6aa0a75575a4?rik=NPteVd%2fbr21FPA&pid=ImgRaw&r=0"} 
        title={'Phan Bội Châu'} 
        content='<span>Vai trò:</span> Một nhà yêu nước tiêu biểu, lãnh đạo phong trào Đông Du. <br/>
<span>Ảnh hưởng:</span> Tinh thần yêu nước và phong trào Đông Du của Phan Bội Châu đã truyền cảm hứng cho Nguyễn Tất Thành khi còn ở quê nhà. Tư tưởng dựa vào sức mạnh quốc tế để giải phóng dân tộc của Phan Bội Châu giúp Nguyễn Ái Quốc sớm nhận ra sự cần thiết của việc tìm kiếm sự hỗ trợ từ bên ngoài. <br/>
<span>Kết nối:</span> Dù không trực tiếp gặp Phan Bội Châu trong giai đoạn này, tư tưởng của ông là một trong những động lực ban đầu cho hành trình ra đi tìm đường cứu nước.' 
      />
      
      <Card 
        image={"https://upload.wikimedia.org/wikipedia/commons/c/c0/Lenin_in_1920_%28cropped%29.jpg"} 
        title={'Lênin (Vladimir Ilyich Lenin)'} 
        content='<span>Vai trò:</span> Nhà lãnh đạo cách mạng vô sản quốc tế, người sáng lập Quốc tế Cộng sản.<br/>
<span>Ảnh hưởng:</span> Tác phẩm "Luận cương về vấn đề dân tộc và thuộc địa" (1920) của Lenin đã gây ấn tượng mạnh với Nguyễn Ái Quốc, giúp ông tìm ra con đường cách mạng đúng đắn. Nguyễn Ái Quốc nhận định: "Luận cương làm tôi rất cảm động, sáng tỏ và tin tưởng biết bao. Tôi vui mừng đến phát khóc lên!".<br/>
<span>Kết nối:</span> Lenin trực tiếp định hướng tư tưởng của Nguyễn Ái Quốc qua các lý luận cách mạng Marxist-Leninist.' 
      />
      
      <Card 
        image={"https://upload.wikimedia.org/wikipedia/commons/8/8e/Jean_Jaur%C3%A8s%2C_1904%2C_by_Nadar.jpg"} 
        title={'Jean Jaurès'} 
        content='<span>Vai trò:</span> Nhà lãnh đạo Đảng Xã hội Pháp, nhà hoạt động chính trị nổi tiếng.<br/>
<span>Ảnh hưởng:</span> Jaurès là người tiêu biểu cho tư tưởng xã hội chủ nghĩa nhân đạo, luôn đấu tranh vì quyền lợi của các dân tộc bị áp bức. Các bài phát biểu và tác phẩm của ông về công lý và bình đẳng đã tác động đến Nguyễn Ái Quốc trong thời gian ông hoạt động ở Pháp.' 
      />
      
      <Card 
        image={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Marcel_Cachin_1929.jpg"} 
        title={'Marcel Cachin'} 
        content='<span>Vai trò:</span> Thành viên sáng lập Đảng Cộng sản Pháp, nhà báo cách mạng.<br/>
<span>Ảnh hưởng:</span> Là người Nguyễn Ái Quốc tiếp xúc trong thời gian tham gia Đảng Xã hội Pháp, Marcel Cachin giúp Nguyễn Ái Quốc tiếp cận lý luận Marxist-Leninist. Cachin cũng ủng hộ Nguyễn Ái Quốc trong việc đưa tiếng nói của các dân tộc thuộc địa vào chương trình nghị sự của Quốc tế Cộng sản.' 
      />
      
      <Card 
        image={"https://images.hcmcpv.org.vn/res/news/2021/09/15-09-2021-dong-chi-nguyen-an-ninh-nha-van-hoa-va-tu-tuong-lon-cua-nuoc-ta-dau-the-ky-xx-4723B09-details.jpg?vs=15092021102119"} 
        title={'Nguyễn An Ninh'} 
        content='<span>Vai trò:</span> Nhà cách mạng Việt Nam hoạt động ở Pháp.<br/>
<span>Ảnh hưởng:</span> Nguyễn An Ninh là một trí thức yêu nước, người thường xuyên trao đổi và hỗ trợ Nguyễn Ái Quốc tại Pháp trong việc tổ chức phong trào Việt kiều và tuyên truyền tư tưởng cách mạng.' 
      />
      
      <Card 
        image={"https://upload.wikimedia.org/wikipedia/commons/3/3f/Paul_Vaillant-Couturier_1921.jpg"} 
        title={'Paul Vaillant-Couturier'} 
        content='<span>Vai trò:</span> Nhà cách mạng Việt Nam hoạt động ở Pháp.<br/>
<span>Ảnh hưởng:</span> Là người bạn đồng hành của Nguyễn Ái Quốc tại Pháp, Paul Vaillant-Couturier giúp ông phổ biến các bài viết trên báo L Humanité và hỗ trợ ông trong các hoạt động tuyên truyền chống chủ nghĩa thực dân.' 
      />
      
      <Card 
        image={"https://upload.wikimedia.org/wikipedia/commons/c/cf/Soong_Ching-ling_at_CPPCC.jpg"} 
        title={'Tống Khánh Linh (Soong Ching-ling)'} 
        content='<span>Vai trò:</span> Nhà hoạt động cách mạng Trung Quốc, vợ của Tôn Trung Sơn.<br/>
<span>Ảnh hưởng:</span> Tống Khánh Linh ủng hộ phong trào cách mạng ở châu Á và đóng góp vào việc kết nối các nhà cách mạng quốc tế. Khi Nguyễn Ái Quốc hoạt động ở Trung Quốc, bà là cầu nối quan trọng với các phong trào trong khu vực.' 
      />
      
    </Carousel>
  </div>
);

export default Cards;
