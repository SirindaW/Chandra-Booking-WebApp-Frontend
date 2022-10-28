import styles from "./styles";
import bgHome from "../../images/bg-home.svg";
import { Button } from "@mui/material";
import aircon from "../../images/room-detail/aircon.svg"
import refrigerator from "../../images/room-detail/refrigerator.svg"
import safe from "../../images/room-detail/safe.svg"
import tv from "../../images/room-detail/tv.svg"
import wifi from "../../images/room-detail/wifi.svg"

const Roomdetail = () => {
  const data = {
    roomType: null,
    pictures: null,
    info: [
      {
        logo: null,
        featureName: null,
        amount: null,
      },
    ],
    prices: {
      roomOnly: null,
      withBreakfast: null,
    },
  };

  return (
    <div className={`${styles.flexCenter} flex-col w-full gap-[3rem]`}>
      {/* navbar background */}
      <div className="overflow-hidden w-full h-[110px]">
        <img className="w-full " src={bgHome} alt="" srcset="" />
      </div>

      {/* 1 big picture on the left */}
      <div className="flex justify-center items-center px-[5rem] w-full h-[523px] gap-2">
        <div>
          <img
            className="w-[615.84px] h-[523px] rounded-lg"
            src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="placeholder"
          />
        </div>

        {/* 4 pictures on the right */}
        <div className="flex justtify-center items-center w-[650px] flex-wrap">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex justify-center p-2">
              <img
                className="w-[289.97px] h-[251.81px] rounded-lg"
                src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="placeholder"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full px-[8rem]">
        <div className="flex flex-col justify-start gap-8">
          <span className="text-[35px]">
            {data.roomType ? data.roomType : "(Type) Room"}
          </span>
          <div className="flex justify-center items-center overflow-x-auto gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div className="flex flex-col justify-center item-center w-[176px] h-[160px] bg-gray-300 rounded-xl">
                <span className="text-center">Logo</span>
                <span className="text-center">Name</span>
                <span className="text-center">Amount</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col w-[382px] h-[291] mt-1 p-2 gap-[2rem] border border-[2px] rounded-lg shadow-lg`}
        >
          <span
            className="text-[25px] text-red-700 text-center pb-2"
            style={{ borderBottom: "1px solid gray" }}
          >
            {data.prices.roomOnly && data.prices.withBreakfast
              ? `THB ${data.prices.roomOnly} - ${data.prices.withBreakfast}`
              : "THB (start) - (end)"}
          </span>
          <div className="flex flex-col justify-center">
            <span>The place to be room only: 1,590</span>
            <span>The place to be with breakfast : 1,890</span>
          </div>
          <div className="flex justify-center item-center">
            <Button
              variant="contained"
              style={{
                width: "220px",
                height: "60px",
                borderRadius: "30px",
                backgroundColor: "#D4990D",
              }}
            >
              Booking Now
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-start flex-col gap-4 w-full px-[6rem] mt-[3rem]`}
      >
        <span className="text-[22px] font-bold">(Type) details</span>
        <span className="text-[15px]">
          35-sqm room with a king-sized Bed working desk, shower, free Wi-Fi.
        </span>
        <span className="text-[15px] w-[745px] h-[86px]">
          Sink into style in our Premium Deluxe room. Sleek lines, earthy
          colours and contemporary décor combine to lend this 35-sqm living
          space warmth and elegance. Located on the higher floors, this room is
          basked in natural light and adorned with stunning views of the
          cityscape or lush gardens.
        </span>
      </div>

      <div className={`flex justify-start flex-col gap-4 w-full px-[6rem] mb-[5rem]`}>
        <div className="text-[22px]">Offered Amenities</div>
        
        <div className="flex flex-col gap-8">
            <div className="flex text-[16px] w-[345px] justify-between">
              <div className={`${styles.flexCenter} gap-2`}>
                <img src={safe} alt=""/>
                <span>Safe in Room</span>
              </div>
              <div className={`${styles.flexCenter} gap-2`}>
                <img src={tv} alt=""/>
                <span>Television</span>
              </div>
            </div>
            
            <div className="flex text-[16px] w-[380px] justify-between">
              <div className={`${styles.flexCenter} gap-2`}>
                <img src={wifi} alt=""/>
                <span>Free Wifi</span>
              </div>
              <div className={`${styles.flexCenter} gap-2`}>
                <img src={aircon} alt=""/>
                <span>Air Conditioning</span>
              </div>
            </div>
            
            <div className="flex text-[16px] w-[300px] justify-between">
              <div className={`${styles.flexCenter} gap-2`}>
                <img src={refrigerator} alt=""/>
                <span>Refrigerator</span>
              </div>
            </div>
        </div>

      </div>


    </div>
  );
};

export default Roomdetail;
