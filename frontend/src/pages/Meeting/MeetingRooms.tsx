import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MeetingRooms.css";

const MeetingRooms = () => {
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    navigate("/booking-confirm");
  };

  return (
    <div className="meeting-rooms-container">
      <h1 className="page-title">Meeting rooms page</h1>

      {/* ตารางการจอง */}
      <div className="booking-table">
        <table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Emp name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Round</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>Emp 1</td>
              <td>11.00am -12.00 am</td>
              <td>12/01/2025</td>
              <td>1hr.</td>
              <td>
                <Link to="/rebooking" className="rebooking-link">
                  Rebooking
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Emp 4</td>
              <td>13.00am -15.00 am</td>
              <td>12/01/2025</td>
              <td>2hr.</td>
              <td>
                <Link to="/rebooking" className="rebooking-link">
                  Rebooking
                </Link>
              </td>
            </tr>
            {/* เพิ่มแถวข้อมูลอื่นๆ ตามตัวอย่าง */}
          </tbody>
        </table>
      </div>

      {/* ฟอร์มการจอง */}
      <div className="booking-form">
        <h2>Booking meeting room</h2>

        <div className="form-group">
          <label>epm id / email</label>
          <input type="email" placeholder="id / email" />
        </div>

        <div className="form-group">
          <label>emp name</label>
          <div className="name-inputs">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="surname" />
          </div>
        </div>

        <div className="form-group">
          <label>Room type</label>
          <select>
            <option value="">room number</option>
          </select>
        </div>

        <div className="form-group">
          <label>meeting date</label>
          <div className="date-inputs">
            <select>
              <option>dd</option>
            </select>
            <select>
              <option>mm</option>
            </select>
            <select>
              <option>yyyy</option>
            </select>
          </div>
        </div>

        <div className="form-group time-group">
          <div>
            <label>time : start</label>
            <div className="time-inputs">
              <select>
                <option>hh</option>
              </select>
              <select>
                <option>mm</option>
              </select>
            </div>
          </div>
          <div>
            <label>time : finish</label>
            <div className="time-inputs">
              <select>
                <option>hh</option>
              </select>
              <select>
                <option>mm</option>
              </select>
            </div>
          </div>
        </div>

        <div className="additional-emails">
          <div className="form-group">
            <label>epm id / email</label>
            <input type="email" placeholder="id / email" />
          </div>
          <div className="form-group">
            <label>epm id / email</label>
            <input type="email" placeholder="id / email" />
          </div>
          <div className="form-group">
            <label>epm id / email</label>
            <input type="email" placeholder="id / email" />
          </div>
        </div>

        <button className="add-more">+ add more</button>

        <button className="confirm-booking" onClick={handleConfirmBooking}>
          Confirm booking
        </button>
      </div>
    </div>
  );
};

export default MeetingRooms;
