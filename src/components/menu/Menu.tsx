import './menu.scss'
import { Link } from 'react-router-dom'
import { menus } from '../../data'
const Menu = () => {
  return (
    <div className='menu'>
      {menus.map(item => (
        <div className='item' key={item.id}>
          <span className='title'>{item.title}</span>
          {item.listItems.map(listItem => (
            <Link key={listItem.id} to={listItem.url} className='listItem'>
              <img src={listItem.icon} alt='' />
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
