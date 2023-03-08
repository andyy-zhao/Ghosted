import React, { useEffect, useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";
import { getAverageSentLength, getAverageReceivedLength, getLeftOnReadTimes } from '../../utils/Api';

export const CardSlider = () => {

  const [data, setData] = useState(null);
  const ref = React.useRef(StackedCarousel);
  //   function onNext(){
  //      ref.current?.goBack(), 5000;
  // }

  useEffect(() => {

    const updateData = async () => {
      const result = await getAverageSentLength();
      const receivedLength = await getAverageReceivedLength();
      const leftOnRead = await getLeftOnReadTimes();

      setData([
        {
          image: "https://picsum.photos/200/300/?random=1",
          text: `Average Sent Characters Per Message: ${result[0].avg_message_length}`
        },
        {
          image: "https://picsum.photos/200/300/?random=12",
          text: `Average Received Characters Per Message: ${receivedLength[0].avg_message_length}`
        },
        {
          image: "https://picsum.photos/200/300/?random=13",
          text: `Times Left On Read: ${leftOnRead[0].count}`
        },
        {
          image: "https://picsum.photos/200/300/?random=15",
          text: `Here's a random image`
        },
        {
          image: "https://picsum.photos/200/300/?random=10",
          text: `Here's a random image`
        }
      ]);
    };
    updateData();
  },[]);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        {data ? (
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={450}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  disableSwipe
                  customScales={[1, 0.85, 0.7, 0.55]}
                  transitionTime={450}
                />
              );
            }}
          />
        ) : (
          <div>Loading... it may take up to 15 seconds</div>
        )}
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab className="card-button right" size="small" onClick={stuff}>
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};
