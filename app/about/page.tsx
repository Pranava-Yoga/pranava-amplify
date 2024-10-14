import Image from 'next/image';
import { PageWrapper } from '@/components/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Pranava Institute</h1>
        
        <div className="mb-12 flex items-start">
          <div className="w-1/3 mr-6">
            <Image
              src="/images/VCS.png"
              alt="Yogacharya Chandrasekhar Pranava"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Yogacharya Chandrasekhar Pranava</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founder, Pranava Institute
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              MSc Psychology, MBA-HRM, Diploma in Yoga
            </p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Professional Background</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            Yogacharya Chandrasekhar Pranava has been practicing yoga since 1990 and began teaching in 1996. He holds a Master's degree in Psychology (MSc-Psy) from S.V University and a Master's in Business Administration with a focus on Human Resource Management (MBA-HRM). His formal yoga education includes a certificate course from S.V. Yoga Adyana Kendra (1995-96) and a Diploma in Yoga from Sri Visweshara Yoga Research International, Tirupati, Andhra Pradesh (1996-97).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Founding of Pranava Yoga Kendra</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            In 1997, Yogacharya Pranava established "Pranava Yoga Kendra" in Nellore, marking the beginning of his professional career as a yoga instructor. He has served as a Training Consultant for numerous institutions, including top private schools, District Institute of Educational Training-Pallipadu, District Sports Authority, District Youth Center, and R.T.C Staff College in Nellore district, as well as SHAR, Sricity Tirupati district, and Hyderabad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Teaching Philosophy and Reach</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            Yogacharya Pranava's teaching is deeply rooted in the principles of Patanjali Yoga Sutra, with a focus on overcoming mental conditioning as a key to eliminating human unhappiness. He has instructed approximately 5000 students, including school students, youth, and middle-aged individuals, both locally and internationally. His influence extends to the U.S., U.K., Middle East, and East Asian countries.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            He has shared his expertise through various media channels, including TV-9, Shakshi, Eenadu, Andhrajyothi, and Vartha, covering topics such as spirituality, philosophy, health management, and self-improvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Current Focus</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            Based in Nellore, Yogacharya Chandrasekhar Pranav conducts daily classes and workshops while serving as a Yoga-life skills trainer for top management and corporate groups in Hyderabad and Nellore. His teachings encompass diverse traditional styles including Hatha, Asthanga, Karma, and Jnana Yoga, with a particular emphasis on Asthanga Yoga (Vinyasa, Power).
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
            Yogacharya Pranav is available for consultancy work, lectures, demonstrations, and special events, aiming to foster a knowledgeable yoga community for the betterment of society.
          </p>
        </section>

        <div className="text-center mt-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            "Sarveyjana Sukinobavanthu"
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            May all beings be happy and free
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
