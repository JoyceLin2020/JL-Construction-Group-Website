import React, { Component } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "../style/HomePage.scss";
import posed from "react-pose";
import AboutUs from "./AboutUsPage";

const MainText = posed.div({
  left: { x: -200, opacity: 0, transition: { duration: 500 } },
  right: { x: 0, opacity: 1, transition: { duration: 500 } },
});

const MainImage = posed.div({
  left: { x: 0, opacity: 1, transition: { duration: 500 } },
  right: { x: 500, opacity: 0, transition: { duration: 500 } },
});

const AboutUsTitle = posed.div({
  top: { y: -100, opacity: 0, transition: { duration: 1000 } },
  bottom: { y: 0, opacity: 1, transition: { duration: 1000 } },
});

const AboutUsPara = posed.div({
  top: { y: 0, opacity: 1, transition: { duration: 1000 } },
  bottom: { y: 100, opacity: 0, transition: { duration: 1000 } },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
      triggerAboutUsAnimation: false,
    };
  }

  componentDidMount() {
    this.setState({ showContent: true });
  }

  render() {
    const { showContent, triggerAboutUsAnimation } = this.state;
    const handleOnDragStart = (e) => e.preventDefault();
    return (
      <div>
        <div className="main-content">
          <MainText
            pose={showContent ? "right" : "left"}
            className="main-text"
            style={{ float: "left", flex: 1, textAlign: "left" }}
          >
            <p>Looking to do industrial construction?</p>
            <p>We've got you covered!</p>
            <p>We are JL Construction Group</p>
          </MainText>
          <MainImage
            pose={showContent ? "left" : "right"}
            style={{ float: "right" }}
            className="cover-image"
          ></MainImage>
        </div>
        <ScrollTrigger
          onEnter={() => {
            this.setState({ triggerAboutUsAnimation: true });
          }}
        >
          <div className="about-us-content">
            <AboutUsTitle
              pose={triggerAboutUsAnimation ? "bottom" : "top"}
              style={{ fontSize: "24px", marginBottom: "20px" }}
            >
              About Us
            </AboutUsTitle>
            <div>
              <AboutUsPara
                pose={triggerAboutUsAnimation ? "top" : "bottom"}
                style={{
                  float: "left",
                  width: "56%",
                  textAlign: "left",
                  padding: "16px",
                }}
              >
                Get the power you need, when you need it with the licensed
                professionals at JL Electrical. As a trusted electrician in
                Toronto, we handle jobs of all types from panel upgrades to
                complete wiring for new builds. If you want a safety-focused
                technician to handle your wiring, lighting and security systems,
                give us a call for a quote. If you have a problem that can’t
                wait, we are pleased to offer 24-7 service for electrical
                emergencies. We are here to handle your installations, repairs,
                maintenance and inspections. Whether you are a homeowner,
                property manager or industrial customer, you can count on
                precision work that is done in a timely and cost-effective
                manner. For bigger jobs like renovations and new construction,
                you can rest assured we will help you stay on schedule and
                within budget. Do you need light fixtures or a new thermostat
                installed? Are you ready to hook-up a hot tub or planning a
                renovation? Give us a call to get started!
              </AboutUsPara>
              <AboutUsPara
                pose={triggerAboutUsAnimation ? "top" : "bottom"}
                style={{
                  width: "40%",
                  float: "right",
                  zIndex: -1,
                }}
              >
                <AliceCarousel mouseTrackingEnabled buttonsDisabled={true}>
                  <img
                    src={require("../images/3.jpg")}
                    onDragStart={handleOnDragStart}
                    className="yours-custom-class"
                    width="100%"
                    height="100%"
                    style={{ zIndex: -1 }}
                  />
                  <img
                    src={require("../images/5.jpg")}
                    onDragStart={handleOnDragStart}
                    className="yours-custom-class"
                    width="100%"
                    height="100%"
                    style={{ zIndex: -1 }}
                  />
                  <img
                    src={require("../images/13.jpg")}
                    onDragStart={handleOnDragStart}
                    className="yours-custom-class"
                    width="100%"
                    height="100%"
                    style={{ zIndex: -1 }}
                  />
                </AliceCarousel>
              </AboutUsPara>
            </div>
          </div>
        </ScrollTrigger>
        <div className="contact-content">
          <div>
            <div className="contact-info">
              <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
              <p className="contact-text">
                JL Construction Group
                <br />
                Address Here
                <br />
                Address Here
              </p>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              <p className="contact-text">1 (416) 453-4862</p>
            </div>
            <div className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p className="contact-text">jlconstructiongp@yahoo.ca</p>
            </div>
          </div>
          <form action="mailto:j352lin@uwaterloo.ca" method="post" enctype="text/plain">
Name:<br/>
<input type="text" name="name"/><br/>
E-mail:<br/>
<input type="text" name="mail"/><br/>
Comment:<br/>
<input type="text" name="comment" size="50"/><br/><br/>
<input type="submit" value="Send"/>
<input type="reset" value="Reset"/>
</form>
        </div>
      </div>
    );
  }
}

export default Home;
