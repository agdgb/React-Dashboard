import Single from '../single/Single'
import { singleUser } from '../../data'

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser }/>
    </div>
  )
}

export default User