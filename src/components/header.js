import React from "react"
import { Link } from "gatsby"
import logo from '../images/logo-designcode.svg';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
      <div className="headerGroup">
        <Link to="/"><img src={logo} width="30"/></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <button><Link to="/buy">Buy</Link></button>
      </div>
    </div>
    )
  }
}

export default Header