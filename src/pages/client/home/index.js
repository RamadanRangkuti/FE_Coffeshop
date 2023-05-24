import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import { Link } from "react-router-dom"
import heroBackground from "../../../assets/img/coffe-hero.png"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Rx, RxDotFilled } from "react-icons/rx";


export default function Home(){
  const aboutTitle = "We Provide Good Coffee and Healthy Meals";
  const aboutCaption ="You can explore the menu that we provide with fun and have their own taste and make your day better.";

  const dataProductCard = [
    {
      img: "hazelnut-latte.png",
      title: "Hazelnut Latte",
      content: [
        "Hazelnut Syrup",
        "Vanilla Whipped Cream",
        "Ice / Hot",
        "Sliced Banana on Top",
      ],
      price: "IDR 25.000",
    },
    {
      img: "pinky-promise.png",
      title: "Pinky Promise",
      content: [
        "1 Shot of Coffee",
        "Vanilla Whipped Cream",
        "Chocolate Biscuits",
        "Strawberry Syrup",
        "Sliced strawberry on Top",
      ],
      price: "IDR 30.000",
    },
    {
      img: "chicken-wings.png",
      title: "Chicken Wings",
      content: [
        "Wings",
        "Drum Sticks",
        "Mayonaise and Lemon",
        "Hot Fried",
        "Secret Recipe",
        "Buy 1 Get 1 only for Dine in",
      ],
      price: "IDR 40.000",
    },
  ];

  const reviews = [
    {
      //   avatar: "../../../assets/img/viezh-robert.webp",
      id: 1,
      //   avatar: "../../../../src/assets/img/viezh-robert.webp",
      avatar: "viezh-robert.webp",
      name: "Viezh Robert",
      country: "Warsaw, Poland",
      review:
        "Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like ithere!! Very recommended!",
      rating: "4.5",
    },
    {
      id: 2,
      avatar: "yessica-christy.webp",
      name: "Yessica Christy",
      country: "Shanxi, China",
      review:
        "I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
      rating: "4.5",
    },
    {
      id: 3,
      avatar: "kim-young-jou.webp",
      name: "Kim Young Jou",
      country: "Seoul, South Korea",
      review:
        "This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!",
      rating: "4.5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0; // true
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return(
    <>
    <Header/>
    <section
      className="hero-section bg-emerald-500 w-full h-[40rem] pl-20 pt-20 max-sm:pl-5 max-sm:pt-24 sm:pt-5 md:pt-10 md:max-lg:pt-60 md:max-lg:h-[75vh] lg:pt-40 lg:h-[120vh] xl:bg-no-repeat bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroBackground})` }}
      >
      <div className="w-1/2 max-sm:w-full flex flex-col gap-8 max-sm:gap-3 h-full max-sm:justify-center">
        <h1 className="text-[#ffffff] font-black text-[50px] max-sm:text-[40px] sm:text-[40px] md:text-[40px] lg:text-[50px]">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-[#ffffff] font-bold text-[20px] max-sm:mb-6">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <Link to="/product">
          <button className="text-[#6A4029] font-bold bg-amber-400 hover:bg-amber-500 duration-300 px-24 max-sm:px-10 sm:px-5 md:px-5 lg:px-5 h-16 rounded-xl w-1/2 sm:w-3/4 md:w-3/4 lg:w-1/2">
            Get Started
          </button>
        </Link>
      </div>
    </section>

    <section className="w-full h-[10vh] relative flex justify-center items-center max-sm:hidden sm:max-md:hidden">
      <div className="card-staff bg-white shadow-xl absolute lg:-top-24 md:max-lg:-top-24 flex justify-center items-center h-[30vh] md:max-lg:h-[20vh] w-[80%] md:max-lg:w-[90%] rounded-md">
        <div className="w-1/3 h-2/3 flex justify-center items-center  gap-x-5  border-r-[1px] border-slate-200">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/staff.png")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">90+</p>
            <p className="text-[#4F5665] text-lg">Staff</p>
          </div>
        </div>
        <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5  border-r-[1px] border-slate-200">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/location.png")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">30+</p>
            <p className="text-[#4F5665] text-lg">Stores</p>
          </div>
        </div>
        <div className="w-1/3 h-2/3 flex justify-center items-center gap-x-5">
          <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded-full">
            <img
              src={require("../../../assets/img/love.png")}
              alt=""
              className=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-[#0B132A]">800+</p>
            <p className="text-[#4F5665] text-lg">Customers</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      className="flex w-full h-[80vh] sm:h-[200vh] md:h-[100vh] sm:flex-col sm:pt-5 md:flex-col md:pt-20 lg:flex-row lg:h-[100vh] justify-center items-center px-20 max-sm:flex-col max-sm:mb-10 max-sm:h-[150vh] max-sm:px-5"
    >
      <div className="h-full items-center justify-center flex max-sm:w-full max-sm:h-[30%] md:h-[40%] lg:h-[70%]">
        <img
          src={require("../../../assets/img/about.png")}
          alt=""
          width="573px"
          height="457px"
        />
      </div>

      <div className="flex items-center justify-center h-full max-sm:w-full max-sm:h-[50%] md:h-[40%] lg:h-[70%]">
        <div className="w-3/4 h-[80%] flex flex-col gap-y-5 lg:gap-y-3 justify-center max-sm:w-full">
          <h1 className="text-[#0B132A] text-[35px] font-bold max-lg:text-center">
            {aboutTitle}
          </h1>
          <p className="text-[#4F5665] leading-7">{aboutCaption}</p>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.png")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">High quality beans</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.png")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Healthy meals, you can request the ingredients
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.png")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Chat with our staff to get better experience for ordering
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={require("../../../assets/img/check.png")}
              alt="check"
              width="20px"
              height="20px"
            />
            <p className="text-[#4F5665]">
              Free member card with a minimum purchase of IDR 200.000.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-16 max-sm:h-[300vh] md:h-[200vh] md:pt-40 lg:h-[120vh] lg:pt-16">
        <div className="flex flex-col gap-y-14 max-sm:gap-y-20">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <h1 className="text-[#0B132A] text-[35px] font-bold text-center">
              Here is People’s Favorite
            </h1>
            <p className="text-[#4F5665] text-center">
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </p>
          </div>
          {/* <ProductCard /> */}
          <div className="flex justify-center gap-x-10 sm:flex-col sm:items-center sm:gap-y-10 md:flex-col md:items-center md:gap-y-10 max-sm:flex-col max-sm:items-center max-sm:gap-y-10 lg:flex-row lg:justify-center">
          {dataProductCard.map(({ img, title, content, price }) => {
          return (
            <div className="flex flex-col items-center border-2 hover:border-[#6A4029] duration-300 rounded-md w-[25%] sm:w-[50%] md:w-[60%] lg:w-[25%] max-sm:w-[90%] h-[600px] justify-around">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="card-img-1">
                  <img
                    src={``}
                    className="rounded-full"
                    alt=""
                  />
                </div>
                <h1 className="text-[#0B132A] text-lg font-bold">{title}</h1>
                <div className="menu-bundle-container flex flex-col gap-y-3">
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[0]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[1]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[2]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[3]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[4]}</p>
                  </div>
                  <div className="menu-bundle flex items-center gap-x-3">
                    <img
                      src={require("../../../assets/img/check-menu.png")}
                      alt=""
                    />
                    <p className="text-[#4F5665] text-base">{content[5]}</p>
                  </div>
                </div>
              </div>
              <div className="price flex flex-col items-center gap-y-3">
                <p className="text-[#0B132A] font-bold text-xl">{price}</p>
                <Link to="/product">
                  {/* <OrderBtn /> */}
                  <button className="text-[#6A4029] font-bold border-2 border-[#FFBA33] hover:bg-amber-400 duration-300 rounded-full px-12 py-3">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </section>

      <section id="store-maps" className="max-sm:py-10 mt-20 md:py-20 md:mt-40">
      <div className="store-maps-container flex flex-col items-center sm:gap-y-10 md:gap-y-14 lg:gap-y-20 max-sm:gap-y-10">
        <div className="flex flex-col justify-center items-center w-1/2 max-sm:w-full sm:w-3/4 md:w-3/4 lg:w-1/2 gap-y-4">
          <h1 className="text-[#0B132A] text-[35px] font-bold text-center w-3/4">
            Visit Our Store in the Spot on the Map Below
          </h1>
          <p className="text-[#4F5665] text-center max-sm:px-10">
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
        </div>
        <div className="img-store-maps sm:px-12 lg:px-20 md:px-12">
          <img src={require("../../../assets/img/maps-dot.png")} alt="" />
        </div>
      </div>
    </section>

    <section className="partner w-full mt-10 h-20vh">
      <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
        Our Partner
      </h1>
      <img
        src={require("../../../assets/img/partner.png")}
        alt=""
        className=" w-full px-20 max-sm:px-10 "
      />
    </section>

    <section className=" w-full mt-10 max-sm:h-[80vh] md:h-[80vh] lg:h-[80vh] justify-center flex flex-col relative items-center gap-14">
        <section className="w-1/3 max-sm:w-[80%] max-sm:h-[40%] sm:w-2/3 md:w-2/3 lg:w-1/3 flex flex-col items-center justify-center gap-y-5">
          <h1 className="text-4xl text-[#0B132A] font-bold text-center leading-snug">
            Loved by Thousands of Happy Customer
          </h1>
          <p className="text-[#4F5665] text-center leading-snug">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
        </section>
        <div className="w-full flex">
      <div className="h-[50vh] px-10 py-4 relative group flex gap-3 overflow-x-scroll scrollbar-hide no-scrollbar">
        {reviews.map((i) => {
          return (
            <div
              key={i.id}
              className="card-review border-2 rounded-md h-full w-1/3 sm:w-[45%] md:w-[40%] max-sm:w-[80%] max-lg:w-[40%] flex justify-center items-center p-8"
            >
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <div>
                      <img
                        // src={`http://localhost:3000/uploads/images/${i.avatar}`}
                        src={`https://kopikuu.vercel.app/uploads/images/${i.avatar}`}
                        //   src={require("../../../assets/img/viezh-robert.webp")}
                        alt=""
                        className="grow-1 pr-4"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        {i.name}
                      </p>
                      <p className="text-sm text-[#4F5665]">{i.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">{i.rating}</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    {i.review}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div> */}

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
      </div>
    </div>
    </section>

    <section className="flex justify-center mt-10 py-10 max-sm:py-10 max-sm:h-[50vh] md:h-[30vh] lg:h-[40vh]">
      <div className="promo-container flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
        <div className="flex flex-col w-2/6 sm:w-3/6 max-sm:w-full gap-y-2">
          <h1 className="text-4xl text-[#0B132A] font-bold">
            Check our promo today!
          </h1>
          <p className="text-base text-[#4F5665]">
            Let's see the deals and pick yours!
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/product">
            <button className="py-5 px-20 text-lg text-[#6A4029] font-bold cursor-pointer bg-amber-400 hover:bg-amber-500 duration-300 rounded-md">
              See promo
            </button>
          </Link>
        </div>
      </div>
    </section>

    

    <Footer/>
    </>
  )
}