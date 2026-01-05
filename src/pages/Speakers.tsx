
import SpeakerCard from "../components/speakerCard";
import WilfriedImrichImg from "../assets/Speakers/WilfriedImrich.png";
import NarayananNImg from "../assets/Speakers/Narayanan.N.png";
import ManojChangatImg from "../assets/Speakers/ManojChangat.png";
import RogersMathewImg from "../assets/Speakers/RogersMathew.png";
import MathewCFrancisImg from "../assets/Speakers/MathewCFrancis.png";
import DeepakRajendraprasadImg from "../assets/Speakers/Deepak Rajendraprasad.png";
import AmbatVijayakumarImg from "../assets/Speakers/AmbatVijayakumar.png";
import AparnaLakshmananSImg from "../assets/Speakers/AparnaLakshmananS.png";
import KishoriPNarayankarImg from "../assets/Speakers/KishoriPNarayankar.png";

function Speakers() {
    const speakerList = [
        {
            name: "Wilfried Imrich",
            title: "Montanuniversität Leoben, Austria",
            description: "Chair of Applied Mathematics, Department of Mathematics and Information Technology.",
            image: WilfriedImrichImg,
        },
        {
            name: "Narayanan N",
            title: "Indian Institute of Technology Madras (IIT Madras)",
            description: "Department of Mathematics, Chennai, India.",
            image: NarayananNImg,
        },
        {
            name: "Manoj Changat",
            title: "Formerly Senior Professor and Head",
            description: "Department of Futures Studies, University of Kerala.",
            image: ManojChangatImg,
        },
        {
            name: "Rogers Mathew",
            title: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
            description: "Department of Computer Science & Engineering.",
            image: RogersMathewImg,
        },
        {
            name: "Mathew C. Francis",
            title: "Indian Institute of Technology Palakkad (IIT Palakkad)",
            description: "Department of Computer Science & Engineering.",
            image: MathewCFrancisImg,
        },
        {
            name: "Deepak Rajendraprasad",
            title: "Indian Institute of Technology Palakkad (IIT Palakkad)",
            description: "Department of Computer Science & Engineering.",
            image: DeepakRajendraprasadImg,
        },
        {
            name: "Ambat Vijayakumar",
            title: "Cochin University of Science and Technology (CUSAT)",
            description: "Department of Mathematics, Kochi, Kerala, India.",
            image: AmbatVijayakumarImg,
        },
        {
            name: "Aparna Lakshmanan S",
            title: "Cochin University of Science and Technology (CUSAT)",
            description: "Department of Mathematics, Kochi, Kerala, India.",
            image: AparnaLakshmananSImg,
        },
        {
            name: "Kishori P. Narayankar",
            title: "Mangalore University",
            description: "Mangalagangothri, Karnataka, India.",
            image: KishoriPNarayankarImg,
        },
    ];

    return (
        <div className="min-h-[70vh]">
            <div className="relative max-w-6xl mx-auto px-6 py-12">

                {/* Header Section */}
                <div className="relative text-center space-y-4 mb-12">
                    <h1 className="text-3xl font-bold text-purple-900 md:text-4xl">Speakers</h1>
                    <p className="mx-auto max-w-2xl text-base text-gray-700">
                        Meet our distinguished speakers who will share their expertise and insights on graphs, algorithms, and emerging applications.
                    </p>
                </div>

                {/* Speakers Grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {speakerList.map((speaker) => (
                        <SpeakerCard
                            key={speaker.name}
                            name={speaker.name}
                            title={speaker.title}
                            description={speaker.description}
                            image={speaker.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Speakers;