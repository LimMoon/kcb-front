import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";

const eventTest = [
    {
        name: "위드코로나 문화프로그램",
        startDate: "2021.11.06",
        eventImage: "~"
    }, {
        name: "2021 인터내셔널 비어 챔피언십",
        startDate: "2021.11.06",
        endDate: "2021.11.20",
        eventImage: "~"
    }, {
        name: "서울집시 캔 릴리즈 데이",
        startDate: "2021.11.06",
        endDate: "2021.11.18",
        eventImage: "~"
    }
];

const EventsPanel = () => {
    const [active, setaAtive] = useState(0);
    return (
        <>
            <Typography variant="h5" component="h5" style={{ color: '#ffffff' }}>
                Events
            </Typography>
            <ItemsCarousel
                infiniteLoop={false}
                gutter={12}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={2}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={active}
                requestToChangeActive={value => setaAtive(value)}
                rightChevron={">"}
                leftChevron={"<"}
            >
                {Array.from(new Array(5)).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            height: 200,
                            background: "url(https://placeimg.com/380/200/nature)"
                        }}
                    />
                ))}
            </ItemsCarousel>
        </>
    )
}
export default EventsPanel;