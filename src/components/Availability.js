import { AvailabilityWrap, Next, AvailabilityForm, CheckIn, Option, Op, Icon, Options, AvailabilityTitle } from '../styles/Availability.style'
import { Button } from '../styles/Button.style'
// import { AiOutlineDown } from 'react-icons/ai'
// import { useState } from 'react'

function Availability({ color, backgroundHoverColor, iconColor }) {
  var submitButton = document.querySelector("#availabilitySubmit");

  if (submitButton) {
    submitButton.addEventListener("click", () => {
      var apartmentNumber = document.querySelector("#apartmentNumber").value || "";
      var checkIn = document.querySelector("#checkIn").value || "";
      var checkOut = document.querySelector("#checkOut").value || "";
      var guests = document.querySelector("#guests").value || "";

      var link =
        "https://www.airbnb.co.uk/rooms/" +
        apartmentNumber +
        "?&guests=" +
        guests +
        "&check_in=" +
        checkIn +
        "&check_out=" +
        checkOut;

      window.open(link);
    });
  }

  return (
    <AvailabilityWrap>
      <AvailabilityForm height={'max-content'} >
        <AvailabilityTitle>
          <h2>Check Availability</h2>
          <Icon rotate="rotate(270deg)" />
        </AvailabilityTitle>

        <Options>
          <Option>
            <select id="apartmentNumber" placeholder="Apartment Number" >
              <option value="34943853">Apartment 1</option>
              <option value="23996662">Apartment 2</option>
              <option value="34943970">In The Attic</option>
            </select>
          </Option>

          <CheckIn>
            <Op>
              <input type="date" id="checkIn" placeholder="Check In" />
            </Op>
            <Next />
            <Op>
              <input type="date" id="checkOut" placeholder="Check Out" />
            </Op>
          </CheckIn>

          <Option>
            <select id="guests">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
            </select>
          </Option>
        </Options>

        <Button id="availabilitySubmit" padding="1rem 4rem" fontSize="18px" style={{borderRadius: "4px", maxWidth: "30rem", margin: "0 auto"}}>Search</Button>
      </AvailabilityForm>
      {/* <Button style={{borderRadius: "10px", display:"flex", justifyContent:"center", alignItems: "center"}} color={color} backgroundHoverColor={backgroundHoverColor} onClick={() => setShow(show = !show)}>{ show ? "Hide" : "Show" }<AiOutlineDown style={{fontSize: "20px", marginLeft: "1rem"}} /></Button> */}
    </AvailabilityWrap>
  )
}

export default Availability
