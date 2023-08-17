import footer from '../assets/images/footer.png'

function Footer() {
    return (
      <footer className='footer'>
        <div><img src={footer} className="footer-img" alt="footer" /></div>       
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  export default Footer