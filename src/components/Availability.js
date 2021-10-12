import { AvailabilityWrap, AvailabilityForm, Option, Icon, Options, AvailabilityTitle } from '../styles/Availability.style'
import { Button } from '../styles/Button.style'
import { AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

function Availability() {
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

  var [ show, setShow ] = useState(false)

  return (
    <AvailabilityWrap>
      <AvailabilityForm height={show ? "max-content" : "2rem"} padding={show ? "1rem" : ""} >
        <AvailabilityTitle>
          <h2>Check Availability</h2>
          <Icon rotate="rotate(270deg)" />
        </AvailabilityTitle>

        <Options>
          <Option>
            <label>Apartment No.</label>
            <select id="apartmentNumber">
              <option value="34943853">Apartment 1</option>
              <option value="23996662">Apartment 2</option>
              <option value="34943970">In The Attic</option>
            </select>
          </Option>

          <Option>
            <label>Check In</label>
            <input type="date" id="checkIn" placeholder="dd/mm/yyyy" />
          </Option>

          <Option>
            <label>Check Out</label>
            <input type="date" id="checkOut" placeholder="dd/mm/yyyy" />
          </Option>

          <Option>
            <label>Guests</label>
            <select id="guests">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </Option>
        </Options>

        <Button id="availabilitySubmit" padding="1rem 4rem" fontSize="18px">Search</Button>
      </AvailabilityForm>
      <Button onClick={() => setShow(show = !show)}>Show <AiOutlineDown/></Button>
    </AvailabilityWrap>
  )
}

export default Availability
