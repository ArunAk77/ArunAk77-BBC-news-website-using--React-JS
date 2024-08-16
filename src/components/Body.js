import React from 'react';
import './body.css';


const Data = () => {
    return (
        <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-5  col1">
                    <video id='vid' src='https://videos.pexels.com/video-files/10464571/10464571-uhd_2732_1440_25fps.mp4' alt='Video' controls autoPlay muted />
                        <h3 style={{color:"black",backgroundColor:"white",borderRadius:'10px'}}>Reporter</h3>
                        <hr></hr>
                        <h5 style={{backgroundColor:"white",fontWeight:"30px",padding:"10px"}}>a journalist who uses investigation and research to gather the details of a story or event, and deliver the facts to the public through a medium or platform.</h5>
                        <button style={{borderRadius:"10px"}}>Visit</button>
                </div>
                <div class="col-2 colC">
                    {/* <p>Hii</p>
                    <p>Hello</p>
                    <p>News</p>
                    <p>News</p>
                    <p>News</p> */}
                </div>
                <div class="col-5  col2">
                <video id='vid'  src='https://videos.pexels.com/video-files/5286261/5286261-hd_1920_1080_30fps.mp4' alt='Video' controls autoPlay muted  />
                <h3 style={{color:"black",backgroundColor:"white",borderRadius:'10px'}}>Kolkata Rape Case</h3>
                <hr></hr>
                        <h5 style={{backgroundColor:"white",fontWeight:"30px",padding:"10px"}}>Tens of thousands of women in West Bengal state marched through the streets on Wednesday night in protest against the rape and murder of a trainee doctor at a state-run hospital in Kolkata last week.</h5>
                        <button style={{borderRadius:"10px"}}>Visit</button>
                </div>
            </div>
        </div>
        <br></br>
        <div class="container">
            <div class="row">
                <div class="col-4  col1">
                    <video id='vid2' src='https://videos.pexels.com/video-files/3433789/3433789-hd_1920_1080_25fps.mp4' alt='Video' controls muted autoPlay/>
                        <h3 style={{color:"black",backgroundColor:"white",borderRadius:'10px'}}>Cyber Security </h3>
                        <hr></hr>
                        <h5 style={{backgroundColor:"white",fontWeight:"30px",padding:"10px"}}>These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware</h5>
                        <button style={{borderRadius:"10px"}}>Visit</button>
                </div>
                <div class="col-4  col2">
                <video id='vid2' src='https://videos.pexels.com/video-files/3941289/3941289-uhd_2560_1440_30fps.mp4' alt='Video' controls muted autoPlay  />
                <h3 style={{color:"black",backgroundColor:"white",borderRadius:'10px'}}>Massive Concerts</h3>
                <hr></hr>
                        <h5 style={{backgroundColor:"white",fontWeight:"30px",padding:"10px"}}>Even further, it's the biggest U.S.-based Boxscore in 18 years, and the second-biggest ever in the 30-year-plus history of Billboard Boxscore in North America (and biggest ever in California), behind Bruce Springsteen's 10-show marathon at Giants Stadium in East Rutherford, N.J. (38.7 million).</h5>
                        <button style={{borderRadius:"10px"}}>Visit</button>
                </div>
                <div class="col-4  col3">
                <video id='vid2' src='https://videos.pexels.com/video-files/4761738/4761738-uhd_2732_1440_25fps.mp4' alt='Video' controls muted autoPlay  />
                <h3 style={{color:"black",backgroundColor:"white",borderRadius:'10px'}}>MMA Fighting</h3>
                <hr></hr>
                        <h5 style={{backgroundColor:"white",fontWeight:"30px",padding:"10px"}}>Mixed martial arts, also known as MMA, is a term for the combat sport in which two competitors attempt to achieve dominance over one another by utilizing three general tactics: striking, finishing holds, and control.</h5>
                        <button style={{borderRadius:"10px"}}>Visit</button>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Data;