import './App.css';
import Input from './components/input'
import profile from './images/k.webp';
import google from './images/g-icon.png';

function App() {
  return (
    <div className="container mb-5">
      
      <section className="row mb-5">
        <div className="image-section col-sm-12 col-lg-6 position-relative p-0">
          <picture>
          <img
              src={profile}
              alt="Lovely birds"
              class="img-fluid w-100 h-100"
            />
          </picture>
          <div 
            className="image-content text-center position-absolute top-50 start-0 text-white mt-5 pt-5"
          >
            <h3 className="mt-5">Maecenas mattis egestas</h3>
            <p className="ms-md-5 ms-lg-5">
             Erdum et malesuada fames ac ante ipsum primis in foucibus uspendisse porta
            </p>
          </div>
        </div>
        <div className="signup-section col-sm-12 col-lg-6 bg-white p-5">
          <h2 className="text-center pb-5 mt-5 mb-5">Lovebirds</h2>
          <div className="signp">
            <h5 className="text-secondary text-center pb-4 fs-4 ">
              Welcome to Lovebirds
            </h5>
            <form className="p-3" id="form">
                <Input type={'Email'} 
                placeholder= {'Enter your name'}
                id = {'name'}
                label= {'Name'}/>
                <Input type={'Password'}
                placeholder= {'Enter your password'}
                id = {'password'}
                label= {'Password'}/>
                
              <div className="text-end pt-2">
                <a
                  href="#"
                  className="text-opacity-75 text-decoration-none fs-6 text-success"
                  >Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-lg ps-5 pe-5 btn-secondary rounded-pill mx-auto mt-4 d-block"
                >
                Sign in
              </button>
            </form>
            <div className="relative pb-4 main-line">
              <p className="text-center absolute line">or</p>
            </div>
            <div className="google d-flex flex-row justify-content-center align-items-center mb-4">
              <img
                src={google}
                alt="Google Icon"
                className="img-fluid me-2"
              />
              <span>Sign in with Google</span>
            </div>
            <div className="text-secondary text-opacity-75 text-center">
              <p>
                New Lovebirds?
                <a href="#" className="text-opacity-75 text-success pb-1 text-decoration-none border-bottom border-2">Create Account</a>
              </p>
            </div>
            
          </div>
        </div>
      </section>
   
    </div>
  );
}

export default App;
