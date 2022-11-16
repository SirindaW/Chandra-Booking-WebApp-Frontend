import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./styles.js";
import { events } from "../../constants/text.js";
import { bookingUrl, alleventUrl } from "../../constants/pathUrl.js";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
// import Thumbnail from "../Thumbnail/Thumbnail.jsx";
// import { getOffer } from '../../actions/offers.js';

const EventDetails = ({ setNavbarBg }) => {
  // const { offer, offers, isLoading } = useSelector((state) => state.offers);
  const { id } = useParams();
  const event = events.filter(({ _id }) => _id === id)[0];
  // const otherOffer = offers.filter(({ _id }) => _id !== id);

  const handleSubmit = () => {
    return;
  };
  useEffect(() => {
    setNavbarBg("");
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <div className="bg-primary h-[800px] relative caret-transparent">
        <div className="m-auto overflow-hidden">
          <img
            src={event.mainImg}
            alt="chandra events"
            className="w-full h-[800px] object-cover transition-all ease-out duration-1000`}"
          />
          <div className="flex flex-col w-1/2 rounded-xl absolute ss:bottom-20 bottom-48 sm:left-24 left-10">
            <div
              className={`${styles.title} font-bold md:text-5xl sm:text-7xl ss:text-6xl text-4xl mb-10`}
            >
              {event.title}
            </div>
            <div className={`${styles.title} ss:text-2xl text-xl mb-10 ml-2`}>
              {event.detail}
            </div>
            <Link to={bookingUrl}>
              <div
                className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:text-shadow-none hover:bg-white hover:text-secondary border-2 border-secondary`}
              >
                {event.butt}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap text-center mt-20 text-5xl font-bold">
        {event.subject}
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-5/12">
          <div class="mt-20 text-4xl font-bold">{event.inner}</div>
          <div class="text-xl py-10">{event.fidata}</div>
          <img
            src={event.dataImg}
            alt="chandra events"
            className="ss:w-[800px] w-11/12 ss:h-[600px] h-[400px] object-cover rounded-xl"
          />
          <div class="text-xl py-10">{event.sedata}</div>
        </div>
        <div className="mt-20">
          {event.otherImg?.map((img, index) => (
            <img
              src={img}
              key={index}
              alt="chandra events"
              className="ss:w-[700px] w-11/12 ss:h-[500px] h-[450px] object-cover rounded-xl ss:mx-5 mx-0 my-5 "
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-[10rem] mb-[4rem] text-center text-4xl font-bold">
        Request for a Proposal
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center ">
        <form
          className="flex flex-col justify-start gap-4 w-full px-[20rem] "
          onSubmit={handleSubmit}
        >
          <span className={`${styles.headText}`}>Contact Info</span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Prefix"
  
              />
              <TextField
                required
                id="outlined-required"
                label="Prefix"
  
              />
            </div>
            <TextField
                required
                id="outlined-required"
                label="Prefix"
  
              />
          </Box>
          {/* <div className="flex py-2">
            <div className={`${styles.flexCenter}`}>
              <TextField
              
                inputProps={{ style: styles.prefix }}
                InputLabelProps={{
                  style: { fontSize: "13px", marginTop: "2px" },
                }}
                label="Prefix"
                variant="outlined"
                required
              />
              <TextField
                inputProps={{ style: styles.fistName }}
                label="First Name"
                variant="outlined"
                required
              />
              <TextField
                inputProps={{ style: styles.textField }}
                label="Last Name"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                inputProps={{ style: styles.textField }}
                label="Mobile phone"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                inputProps={{ style:styles.textField }}
                label="Email Address"
                variant="outlined"
                required
                helperText="This is the Email we will send your confirmation to."
                fullWidth
              />
            </div>
            <span className={`${styles.headText} flex flex-row flex-wrap`}>
              Company Information
            </span>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
