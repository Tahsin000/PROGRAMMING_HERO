
import HeroSecvtion from './HeroSection';
import ChefSection from './ChefSection';
import About from '../About/About';
import Services from '../Services/Services';
import Aos from 'aos';
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import img1 from ''

const Home = () => {
    Aos.init();
    return (
        <div >
            {/* Hero Section */}
            <HeroSecvtion>  </HeroSecvtion>
            {/* Chef section */}
            <ChefSection>  </ChefSection>
            {/* About Section */}
            <About></About>
            {/* Services Section */}
            <Services></Services>
        </div>
    );
};

export default Home;