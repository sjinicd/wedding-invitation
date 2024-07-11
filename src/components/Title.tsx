import { styled } from "@stitches/react";
import { Divider } from "antd";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "91%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
  backgroundColor: "rgba(254, 254, 254, 0.5)",
});

// const VideoBackground = styled("video", {
//   backgroundColor: "#aeb8b3 !important",
//   opacity: 0.9,
//   objectFit: "cover",
//   objectPosition: "center center",
//   width: "100%",
//   height: "100%",
//   minHeight: 480,
// });

const ImageWrapper = styled("div", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
  display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const ImageComponent = styled("img", {
    objectFit: "contain",
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontSize: "1.5vh",
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "3.5vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "2vh",
  opacity: 0.65,
  marginBottom: 24,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>
{/*       <VideoBackground autoPlay loop muted playsInline={true}> */}
{/*         <source src="./assets/BackgroundVideo.mp4" type="video/mp4" /> */}
{/*       </VideoBackground> */}
      <ImageWrapper>
            <ImageComponent src="./assets/Gallery_Photo_7.jpg" alt="Description of image" />
      </ImageWrapper>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br />
          {data?.location}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
