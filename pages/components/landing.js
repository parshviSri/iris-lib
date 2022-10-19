/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Popup from "./popup";
import Register from "./register";

function Landing() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Iris</title>
          <meta property="og:title" content="messaging app" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-logo">
              <img alt="image" src="/iris-logo.jpeg" className="home-image" />
            </div>
            <div className="home-links-container">
              <a href="#features" className="home-link anchor">
                Home
              </a>
              <a href="#about-us" className="home-link1 anchor">
                About Us
              </a>
              <a href="#contact" className="home-link2 anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container">
              <ConnectButton className="home-cta-btn button anchor" />

              <div data-type="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image01"
                />
                <div data-type="CloseMobileMenu" className="home-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-mid">
                <div className="home-links-container1">
                  <a href="#features" className="home-link3 anchor">
                    features
                  </a>
                  <a href="#services" className="home-link4 anchor">
                    services
                  </a>
                  <a href="#about-us" className="home-link5 anchor">
                    About Us
                  </a>
                  <a href="#contact" className="home-link6 anchor">
                    contact
                  </a>
                </div>
                <button
                  className="home-cta-btn1 anchor button"
                  onClick={() => {
                    setTrigger(true);
                  }}
                >
                  Start Your Journey
                </button>
              </div>
              <div className="home-bot">
                <div className="home-social-links-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <h1 className="home-heading section-Heading">
            Send messages just with your wallet
          </h1>
          <div className="home-hero-text-container">
            <span className="home-text">
              <span>
                Iris provide peer-to-peer network with facilities like
                decentralisation, privacy, bot-free and easy accessible to any
                of your social media app without disclosing your identity . We
                provide text, image, voice and video messages.
              </span>
              <br></br>
              <br></br>
              <span>
                In this new world of web3 where you own your data it is
                important that your chats are private and you control who can
                access it.
              </span>
              <br></br>
              <br></br>
              <span>
                We make sure all our user are verified without disclosing or
                storing your identity
              </span>
              <br></br>
            </span>
            <button
              className="home-cta-btn2 button"
              onClick={() => {
                setTrigger(true);
              }}
            >
              Start Your Journey
            </button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjb25uZWN0fGVufDB8fHx8MTY2NTU1NzAyMw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=500"
            className="home-image02"
          />
        </div>
        <div className="home-section-separator"></div>
        <div id="features" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text09 section-Heading">Our Mission</h2>
            <span className="home-text10 section-Text">
              Our main mission is to provide free, decentralised , private form
              of communication to all the people of world
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHx3aHl8ZW58MHx8fHwxNjY1NTU3MjAy&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300"
                className="home-image03"
              />
              <span className="home-heading1 card-Heading">Why</span>
              <span className="home-text11 card-Text">
                Why not We claim we live in new world but are we really free? We
                can not control our money, data and even time
              </span>
            </div>
            <div className="home-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=200"
                className="home-image04"
              />
              <span className="home-heading2 card-Heading">What</span>
              <span className="home-text12 card-Text">
                Iris is just an attempt to make our communication more secure
                more user control and easy
              </span>
            </div>
            <div className="home-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image05"
              />
              <span className="home-heading3 card-Heading">How</span>
              <span className="home-text13">
                We uses blockchain for decentralised storage and
                cryptographically encrypt your message. 
              </span>
            </div>
          </div>
        </div>
        <div id="services" className="home-services">
          <div className="home-service-card">
            <div className="home-card-content">
              <img alt="image" src="/filecoin.jpeg" className="home-image06" />
              <h3 className="home-text14 bigCard-Heading">Filecoin/IPFS</h3>
              <span className="home-text15 card-Text">
                Decentralised storage and no third-party control
              </span>
              <button className="home-button button anchor">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card1">
            <div className="home-card-content1">
              <img alt="image" src="/worldcoin.png" className="home-image07" />
              <h3 className="home-text16 bigCard-Heading">Worldcoin</h3>
              <span className="home-text17 card-Text">
                For Proof of Personhood and make it no bot zone
              </span>
              <button className="home-button1 button">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card2">
            <div className="home-card-content2">
              <img alt="image" src="/epns.jpeg" className="home-image08" />
              <h3 className="home-text18 bigCard-Heading">PUSH</h3>
              <span className="home-text19 card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <button className="home-button2 button anchor">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card3">
            <div className="home-card-content3">
              <img alt="image" src="/filecoin.jpeg" className="home-image09" />
              <h3 className="home-text20 bigCard-Heading">Lit Protocol</h3>
              <span className="home-text21 card-Text">
                End-t-End Encryption and privacy from others to snoop around
              </span>
              <button className="home-button3 button anchor">READ MORE</button>
            </div>
          </div>
        </div>
        <div id="about-us" className="home-about-us">
          <div className="home-heading-container1">
            <h2 className="home-text22 section-Heading">
              What&apos;s the story behind our product?
            </h2>
            <span className="home-secondary-text section-Text">
              {" "}
              Iris is the greek goddess of messenger  and rainbowa
            </span>
            <button
              className="home-cta-btn3 button anchor"
              onClick={() => {
                setTrigger(true);
              }}
            >
              START YOUR  JOURNEY
            </button>
          </div>
          <div className="home-text-container">
            <span className="home-text23 section-Text">
              The idea of  Iris started with the journey of social media and its
              effect on our generation. We spent 30% of life on social media. No
              doubt it has decreased the distance between the people and create
              a global audience but still it has its own flaws. We are in the
              Web2 era where we have no control over our data the private
              company owns your whole social personality and your community.
              There is no privacy. They sell our chats and content to company
              and earn billion of dollars. We felt this need to be  change.
              There has to be a better way for this.
            </span>
            <span className="home-text24">
              With this vision we have created Iris. We decided to build it a
              web3 app which will be decentralised , private and easy
              application. our main motive is to bring as many Web2 users to
              Web3 and provide a better technical experience to them
            </span>
          </div>
          <button
            className="home-cta-btn4 button anchor"
            onClick={() => {
              setTrigger(true);
            }}
          >
            START BUILDING
          </button>
        </div>
        <div className="home-section-separator1"></div>
        <div id="contact" className="home-contact">
          <div className="home-content-container">
            <h2 className="home-text25 section-Heading">
              This is where to find us
            </h2>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading4">Remote</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="section-Text">Address</span>
                </div>
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon14"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="section-Text">Phone Nuber</span>
                </div>
              </div>
            </div>
            <div className="home-social-links-container1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGNvbnRhY3R8ZW58MHx8fHwxNjY1NTc3ODMw&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image10"
          />
        </div>
      </div>
      {trigger && <Popup><Register/></Popup>}
    </>
  );
}
export default Landing;
