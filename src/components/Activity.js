import { ActivityWrap, Next, Info } from '../styles/Activities.style'

function Activity({name, image}) {
  return(
    <ActivityWrap image={image}>
      <p>{name}</p>
      <button><Next /></button>
      <Info />
    </ActivityWrap>
  )
}

export default Activity
