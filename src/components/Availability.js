import { AvailabilityWrap, Next, AvailabilityForm, CheckIn, Option, Op, Icon, Options, AvailabilityTitle } from '../styles/Availability.style'
import { Button } from '../styles/Button.style'
// import { AiOutlineDown } from 'react-icons/ai'
// import { useState } from 'react'

function Availability({ color, backgroundHoverColor, iconColor }) {
    // on Submit links to airbnb page that checks if bnb is available on those dates
    const submitForm = () => {
      var apartmentNumber = document.querySelector("#apartmentNumber").value || "34943853";
        var checkIn = document.querySelector("#checkIn").value || "";
        var checkOut = document.querySelector("#checkOut").value || "";
        if (checkOut <= checkIn) {
          checkIn = ""
          checkOut = ""
        }

        var guests = document.querySelector("#guests").value || "1";

        // builds the link
        var link =
            "https://www.airbnb.co.uk/rooms/" +
            apartmentNumber +
            "?&guests=" +
            guests +
            "&check_in=" +
            checkIn +
            "&check_out=" +
            checkOut;

        // opens the link built
        window.open(link);
    }

    return (
        <AvailabilityWrap>
            <AvailabilityForm height={'max-content'} >
                <AvailabilityTitle>
                    <h2>Check Availability</h2>
                    <Icon rotate="rotate(270deg)" />
                </AvailabilityTitle>

                <div style={{display: "flex", width: "100%", justifyContent: "space-between", fontSize: "20px", marginTop: "1rem" }} >
                    <h6 style={{width: "33%"}}>Which Apartment?</h6>
                    <div style={{display: "flex", justifyContent: "space-between", width:"30%", }}>
                        <h6>From...</h6>
                        <h6>Until</h6>
                    </div>
                    <h6 style={{ width: "33%" }}>How Many?</h6>
                </div>

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
                            <input type="date" id="checkIn" />
                        </Op>
                        <Next />
                        <Op>
                            <input type="date" id="checkOut" />
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
