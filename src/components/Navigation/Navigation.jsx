import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={style.nav}>
        <div className="logo"><img src="images/brand_logo.png" alt="Logo"/></div>
        <ul className={style.navItems}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation