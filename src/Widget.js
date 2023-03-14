import React from "react";
import "./Widget.css";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Widget() {
  return (
    <>
      <div className="widget">
        <div className="widget__top">
          <div className="widget__header">
            <h4>LinkedIn News</h4>
            <AiFillInfoCircle />
          </div>
          <div className="widget__body">
            <ul className="widget__options">
              <li>
                <h4>Slaying Job Search</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>A Two Pizza Rule For Eating</h4>
                <p>2d ago * 2,55 readers</p>
              </li>
              <li>
                <h4>How To Handle A Workspace Breakup</h4>
                <p>2d ago * 3,12 readers</p>
              </li>
              <li>
                <h4>Flexi Leave Is The New Flexi</h4>
                <p>4d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Shorter Hour Boost Productivity</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget__bottom">
          <div className="widget__header">
            <h4>Today's Top Courses</h4>
            <AiFillInfoCircle />
          </div>
          <div className="widget__body">
            <ul className="widget__options">
              <li>
                <h4>Leading With A Heavy Heat</h4>
                <p>Kay Coly</p>
              </li>
              <li>
                <h4>Building Resilience</h4>
                <p>Tatian Kolovau</p>
              </li>
              <li>
                <h4>Critical Thinking For Better Juddgement</h4>
                <p>2d ago * 3,12 readers</p>
              </li>
              <li>
                <h4>Flexi Leave Is The New Flexi</h4>
                <p>4d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Shorter Hour Boost Productivity</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
