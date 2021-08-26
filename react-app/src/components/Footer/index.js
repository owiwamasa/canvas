import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-name'>Created By Owen Iwamasa</div>
            <div className='footer-info-container'>
                <a href='owiwamasa@gmail.com'>
                    <i className="far fa-envelope" />
                </a>
                <a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
                    <i className="fab fa-linkedin" />
                </a>
                <a href='https://github.com/owiwamasa'>
                    <i className="fab fa-github" />
                </a>
            </div>
        </div>
    )
}

export default Footer
