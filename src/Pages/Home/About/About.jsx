import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-white my-6">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='lg:relative lg:w-1/2'>
                    <img src={person} className="lg:w-2/3 rounded-lg shadow-2xl " />
                    <img src={parts} className="lg:w-1/2 rounded-lg lg:absolute top-1/2 right-5 lg:border-8 lg:border-white" />
                </div>

                <div className='lg:w-1/2'>
                    <h1 className="text-xl font-bold text-orange-500">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p className="py-5">The majority have suffered alteration in some form, by injected humour, or randomizes words which do not look even slightly believable. </p>
                    <button className="btn bg-orange-500 border-0 btn-md">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;