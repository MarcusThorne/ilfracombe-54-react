import { HygieneWrap } from "../styles/Hygiene.style"
import hygieneImg from '../img/hygiene.jpg'
import cautionImg from '../img/caution.jpg'
import limitImg from '../img/limit.jpg'

function Hygiene() {
  return (
    <HygieneWrap>
      <div>
        <img src={hygieneImg} alt="Hygiene" />
        <h1>Hygiene</h1>
        <p>Hygiene is extremely important to us at ilfracombe no 54, which is why we spent considerable amounts of time cleaning our apartments regularly. During this pandemic we've really upped our game in the cleaning department, everything is wiped down and dis-infected before every visit, so you can rest easy knowing that you're in a completely safe enviroment.</p>
      </div>
      <div>
        <img src={cautionImg} alt="Precautions" />
        <h1>Precautions</h1>
        <p>As you know, everywhere has been taking there procautions to provide the heighest standard of hygiene possible. We take this precautions very seriously to keep everyone safe. So bare in mind that if we believe our apartments to be a threat all bookings will be canceled until further notice.</p>
      </div>
      <div>
        <img src={limitImg} alt="Limit" />
        <h1>Limitations</h1>
        <p>The rule of six still applys to our apartments, we ask you not to exceed this number. The surrounding areas are starting to open up and limitations to ilfracombe are starting to ease, so your holiday will be filled with fun as normal.</p>
      </div>
    </HygieneWrap>
  )
}

export default Hygiene
