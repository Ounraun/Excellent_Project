import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MeetingRoomBooking.module.css";

const MeetingRooms = () => {
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    navigate("/booking-confirm");
  };

  return (
    <div className={styles.meetingRoomsContainer}>
      <h1 className={styles.pageTitle}>Meeting rooms page</h1>

      {/* ตารางการจอง */}
      <div className={styles.bookingTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Room</th>
              <th className={styles.th}>Emp name</th>
              <th className={styles.th}>Time</th>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Round</th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>3</td>
              <td className={styles.td}>Emp 1</td>
              <td className={styles.td}>11.00am -12.00 am</td>
              <td className={styles.td}>12/01/2025</td>
              <td className={styles.td}>1hr.</td>
              <td className={styles.td}>
                <Link to="/rebooking" className={styles.rebookingLink}>
                  Rebooking
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.td}>3</td>
              <td className={styles.td}>Emp 4</td>
              <td className={styles.td}>13.00am -15.00 am</td>
              <td className={styles.td}>12/01/2025</td>
              <td className={styles.td}>2hr.</td>
              <td className={styles.td}>
                <Link to="/rebooking" className={styles.rebookingLink}>
                  Rebooking
                </Link>
              </td>
            </tr>
            {/* เพิ่มแถวข้อมูลอื่นๆ ตามตัวอย่าง */}
          </tbody>
        </table>
      </div>

      {/* ฟอร์มการจอง */}
      <div className={styles.bookingForm}>
        <h2>Booking meeting room</h2>

        <div className={styles.formGroup}>
          <label className={styles.label}>epm id / email</label>
          <input
            type="email"
            placeholder="id / email"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>emp name</label>
          <div className={styles.nameInputs}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="surname" className={styles.input} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Room type</label>
          <select className={styles.select}>
            <option value="">room number</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>meeting date</label>
          <div className={styles.dateInputs}>
            <select className={styles.select}>
              <option>dd</option>
            </select>
            <select className={styles.select}>
              <option>mm</option>
            </select>
            <select className={styles.select}>
              <option>yyyy</option>
            </select>
          </div>
        </div>

        <div className={`${styles.formGroup} ${styles.timeGroup}`}>
          <div>
            <label className={styles.label}>time : start</label>
            <div className={styles.timeInputs}>
              <select className={styles.select}>
                <option>hh</option>
              </select>
              <select className={styles.select}>
                <option>mm</option>
              </select>
            </div>
          </div>
          <div>
            <label className={styles.label}>time : finish</label>
            <div className={styles.timeInputs}>
              <select className={styles.select}>
                <option>hh</option>
              </select>
              <select className={styles.select}>
                <option>mm</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.additionalEmails}>
          <div className={styles.formGroup}>
            <label className={styles.label}>epm id / email</label>
            <input
              type="email"
              placeholder="id / email"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>epm id / email</label>
            <input
              type="email"
              placeholder="id / email"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>epm id / email</label>
            <input
              type="email"
              placeholder="id / email"
              className={styles.input}
            />
          </div>
        </div>

        <button className={styles.addMore}>+ add more</button>

        <button
          className={styles.confirmBooking}
          onClick={handleConfirmBooking}
        >
          Confirm booking
        </button>
      </div>
    </div>
  );
};

export default MeetingRooms;
