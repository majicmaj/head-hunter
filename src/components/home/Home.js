import React from "react";
import "./Home.css";
import Tilt from "react-tilt";

export default function Home() {
  return (
    <div className="Home">
      <section className="line">
        <div className="left">
          <h1>Find Your Dream Job.</h1>
        </div>
        <div className="right" />
      </section>
      <section className="">
        <h1>Our Services</h1>
        <div className="line">
          <Tilt options={{ max: 10 }} className="service">
            <h1>Build your Resume</h1>
            <p className="block">
              Our interactive resume builder helps you present yourself with
              your best foot forwards.
            </p>
          </Tilt>
          <Tilt options={{ max: 10 }} className="service">
            <h1>Select Jobs</h1>
            <p className="block">
              Filter through job listings curated based on your experience and
              set up auto-apply.
            </p>
          </Tilt>
          <Tilt options={{ max: 10 }} className="service">
            <h1>Get Interviews</h1>
            <p className="block">
              Skip straight to the technical assements and interivews.
            </p>
          </Tilt>
        </div>
      </section>
    </div>
  );
}
