import { AvailabilityWrap, Next, AvailabilityForm, CheckIn, Option, Op, Icon, Options, AvailabilityTitle } from '../styles/Availability.style'
import { Button } from '../styles/Button.style'
// import { AiOutlineDown } from 'react-icons/ai'
// import { useState } from 'react'

function Availability({ color, backgroundHoverColor, iconColor }) {
    const submitForm = () => {
      var apartmentNumber = document.querySelector("#apartmentNumber").value || "34943853";
        var checkIn = document.querySelector("#checkIn").value || "";
        var checkOut = document.querySelector("#checkOut").value || "";
        if (checkOut <= checkIn) {
          checkIn = ""
          checkOut = ""
        }

        var guests = document.querySelector("#guests").value || "1";

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
                        <select id="apartmentNumber" placeholder="Apartment Number">
                            <option value="34943853">Apartment 1</option>
                            <option value="23996662">Apartment 2</option>
                            <option value="34943970">In The Attic</option>
                        </select>
                    </Option>

                    <CheckIn>
                        <Op>
                            <input type="date" id="checkIn" placeholder="dd/mm/yyyy"/>
                        </Op>
                        <Next />
                        <Op>
                            <input type="date" id="checkOut" placeholder="dd/mm/yyyy"/>
                        </Op>
                    </CheckIn>

                    <Option>
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

                <Button id="availabilitySubmit" onClick={() => submitForm()} padding="1rem 4rem" fontSize="18px" style={{borderRadius: "4px", maxWidth: "30rem", margin: "0 auto"}}>Search</Button>
            </AvailabilityForm>
        </AvailabilityWrap>
    )
}

export default Availability
