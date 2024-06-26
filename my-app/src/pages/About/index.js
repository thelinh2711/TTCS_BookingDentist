import React, { useEffect } from "react";
import Banner1 from "../../components/Banner1";
import ItemProfile from "../../components/ItemProfile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./styles.scss";
import Next from "../../components/btnSlick/Next";
import Prev from "../../components/btnSlick/Pre";
import BookingBanner from "../../components/BookingBanner";
import { useDispatch, useSelector } from "react-redux";
import { listAllTeam } from "../../feature/TeamSlice";

const AboutPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
        <div className="ft-slick__dots--custom"></div>
    ),
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
          }
      },
      {
        breakpoint: 742,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
        }
    }
    ],
  };
  const team = useSelector(team => team.team.value?.data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listAllTeam())
    }, []);
  return (
    <div>
      <Banner1 />
      {/* section đội ngũ bác sĩ */}
      <div className="w-full">
        <div className="w-default mx-auto px-5 mt-7">
          <div className="flex align-items-center flex-column">
            <h3
              className="c-primary1 text-7xl"
              style={{ letterSpacing: "0.7px" }}
            >
              Đội Ngũ Bác Sĩ
            </h3>
            <p className="mt-6 w-full md:w-7 line-height-3 text-center text-3xl">
              Đội ngũ bác sĩ của nha khoa Á Châu đều là các bác sĩ tốt nghiệp
              tại các trường đào tạo y khoa hàng đầu như Đại học Y Hà Nội. Với
              nhiều năm kinh nghiệm và hơn hết là sự tận tâm trong công việc để
              cống hiến hết mình trong công việc.
            </p>
          </div>
          <div className="mt-8 px-2 md:px-8">
            <div className="cs-slick mb-8 fb-slick1">
              <Slider {...settings}>
                {team?.map(data =>{
                  return <ItemProfile data={data} />
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" style={{marginTop: "150px"}}>
        <div className="w-default mx-auto px-5">
          <div className="flex flex-column md:flex-row" style={{columnGap: "70px"}} >
            <div>
              <p className="c-primary text-4xl font-normal">Nha Khoa Á Châu</p>
              <h3 className="c-primary1 text-7xl font-bold mt-4 line-height-2">Cơ sở vật chất <br/> Nha Khoa <br/> Á Châu</h3>
              <div className="border-round-3xl overflow-hidden mt-7">
                <img className="flex hover-scale" src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663903698/co-so-vat-chat-01-1024x1536_u2cjtt.jpg" width="320px"/>
              </div>
            </div>
            <div className="flex flex-column justify-content-between align-items-center">
              <div className="hidden md:block border-round-3xl overflow-hidden">
                <img className="flex hover-scale" src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663903726/vt01600x700_l8cvli.jpg" width="320px" />
              </div>
              <p className="px-0 md:px-6 text-3xl mt-5 md:mt-0">
                Cơ sở vật chất của Nha khoa Á Châu luôn đáp ứng các tiêu chuẩn
                mới nhất và khắt khe nhất của bộ Y Tế ban hành. Chúng tôi mong
                muốn khách hàng có cơ hội trải nghiệm dịch vụ tốt nhất bằng các
                bằng chứng thực tế đã được chứng minh và cấp phép. Ngoài ra
                Hanseoul là đối tác chiến lược hàng đầu của nhà cung cấp vật tư
                y tế 3M của Mỹ, cam kết chất lượng luôn đảm bảo quy chuẩn quốc
                tế.
              </p>
            </div>
            <div className="justify-content-center align-items-center hidden lg:flex">
              <div className="border-round-3xl overflow-hidden">
                <img className="flex hover-scale" src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663903717/vt02_fdxmgb.jpg" width="320px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" style={{margin: "150px 0px"}}>
          <div className="flex px-5 w-default mx-auto">
            <div className="md:block hidden bg-primary2 text-white px-6 py-6 z-2 mx-0 my-8 w-6">
              <p className="text-4xl ">Đặt lịch với </p>
              <h3 className="text-6xl font-bold mt-3">Chúng tôi nha khoa Á Châu</h3>

              <p className="text-3xl font-normal mt-6">Nhanh chóng tổng hợp người dùng B2B và tiềm năng trên toàn thế giới. Từng bước đạo văn thương mại điện tử cấp tài nguyên thông qua năng lực cốt lõi cấp tài nguyên.</p>
              <div className="flex justify-content-between mt-7">
                <div className="flex flex-column align-items-center">
                  <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663908026/caculator_hospital_mztr1f.png" width="50px"/>
                  <p className="mt-3">Hotline</p>
                  <p className="text-lg text-400">0372559460</p>
                </div>
                <div className="flex flex-column align-items-center">
                  <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663399845/signature_tqtnbs.png" width="70px"/>
                  <p className="mt-3">Cam kết</p>
                  <p className="text-lg text-400">Uy tín - Chất lượng</p>
                </div>
                <div className="flex flex-column align-items-center">
                  <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1663907986/calendar_zfkw7j.png" width="50px"/>
                  <p className="mt-3">Thời gian làm việc</p>
                  <p className="text-lg text-400">Thứ 2 - Thứ 6</p>
                  <p className="text-lg text-400">8:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="cs-w-booking surface-200 md:w-8 w-full z-1 flex md:justify-content-end justify-content-center">
              <div
                style={{ width: "calc(100% - 100%/7)" }}
                className="py-7 md:px-7 px-2"
              >
                <BookingBanner />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutPage;
