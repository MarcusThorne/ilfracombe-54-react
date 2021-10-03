import { AvailabilityForm } from '../styles/Availability.style'
import { Option } from '../styles/Availability.style'
import { Options } from '../styles/Availability.style'
import { Button } from '../styles/Button.style'

function Availability() {
  return (
    <AvailabilityForm>
      <h2>Check Availability</h2>

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
  )
}

export default Availability
