import aboutimage from '../Images/about-JucQ-evo.jpg'
export const About = () => {
  return (
    <div className="container">
      <h1 className='title'>About</h1>
      <div className='about'>
        <div className='about-content'>
          <img src={aboutimage} alt='' width="100" />
        </div>
        <div className='about-content qoral' >
        <h1>My Name is Ali</h1>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <p>I'M Web <span>Developer</span> & UXI Design </p>
             <button className="btn btn-danger home-btn">Read More</button>
        </div>
      </div>

    </div>
  )
}