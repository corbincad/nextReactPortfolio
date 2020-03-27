export default function index() {
    return (
        <>

            <div className="jumbotron">

                <div
                    id="headlineName">
                    Corbin Herrera
            </div>
            </div>

            <div className=".container">

                <div className="row">

                    <div className="col-md-4">
                    
                        <img className="image-fluid" src="static/images/portfolioPicture.jpg" alt="Corbin Herrera" />

                    </div>

                    <div id="bioParagraph" className="col-md-8">
                        I was born and raised in Texas with all the love and support I could ask for.
                        I was rather quiet as a child, but very active, preferring to put my energy into physical accomplishments that to apply my brain.
                        A lot of things came pretty easily to me, so I never had to try all that hard at anything to get by.
                        From an early age, I had an aptitude for gymnastics, and found myself on a competitive team in junior high, but this required more work to keep up on my studies than I was willing to put in, my grades fell, and my mom put an end to it.
                        I grew up in the age of Guitar Hero, and my love of that game turned into a bonafide ability to play the guitar.
                        When I was 22, I had a son. He's my everything and my reason for attending this class.  I want to give him the life he deserves, and that means growing up and applying my brain and realizing my actual potential.
                </div>
                </div>

                <div id="animation" className="row">

                    <div id="arrowAnim">
                        <div className="arrowSliding">
                            <div className="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div className="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div className="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div className="arrow"></div>
                        </div>
                    </div>

                </div>
            </div>


            <footer className="py-4 bg-dark text-white-50">
                <div className="container text-center">
                    <a id="footerText" href="https://github.com/corbincad" target="_blank">GITHUB</a>
                    <a id="footerText" href="/contact">GET IN TOUCH!</a>
                    <a id="footerText" href="https://mwattsup.github.io/groupProject1/">FIRST PROJECT</a>
                    <a id="footerText" href="/personal">PERSONAL STUFF</a>
                    <a id="footerText" href="https://serene-tundra-35845.herokuapp.com/">SECOND PROJECT (HEROKU)</a>
                </div>
            </footer>
     </>
    );
}
