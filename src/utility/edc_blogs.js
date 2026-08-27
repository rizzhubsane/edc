const blogs = [
  {
    id: 1,
    title: "The Carbon Credit Revolution: The Currency Of The Future",
    author: "E-Cell IIT Delhi",
    description: "Innovative insights from the minds driving change.",
    image: "https://substackcdn.com/image/fetch/$s_!6vlm!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bb956c0-30af-4073-9ca2-16a5faab364e_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/the-carbon-credit-revolution-the"
  },
  {
    id: 2,
    title: "Harnessing Immersive Technology: The Growing Influence of Virtual Reality in Mental Health Treatment",
    author: "E-Cell IIT Delhi",
    description: "Entrepreneurship, leadership, and the power of ideas.",
    image: "https://substackcdn.com/image/fetch/$s_!aphZ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F23abcce0-c57e-4882-b1ac-b3d39bf1a886_1080x1080.png",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/harnessing-immersive-technology-the"
  },
  {
    id: 3,
    title: "STARTUP OF THE MONTH: INSPIRE AI",
    author: "E-Cell IIT Delhi",
    description: "Celebrating ideas that shape tomorrow.",
    image: "https://substackcdn.com/image/fetch/$s_!HIsQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc20021b6-4039-4c6b-8481-99f2e0a3eb2a_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/startup-of-the-month-inspire-ai"
  },
  {
    id: 4,
    title: "Innovative Space-tech Startups and Why You Should Care",
    author: "E-Cell IIT Delhi",
    description: "Unveiling the next big wave in technology and business.",
    image: "https://substackcdn.com/image/fetch/$s_!pvGj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcf62b46c-ab62-4e39-a2c2-b7f83be1d3bf_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/innovative-space-tech-startups-and"
  },
  {
    id: 5,
    title: "Brain Breakthroughs: How Brain-Computer Interfaces Are Redefining Human-Tech Interaction",
    author: "E-Cell IIT Delhi",
    description: "A dive into innovation, sustainability, and success.",
    image: "https://substackcdn.com/image/fetch/$s_!mgdE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F843ed693-b52b-4ea2-bd02-dfab0aed333a_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/brain-breakthroughs-how-brain-computer"
  },
  {
    id: 6,
    title: "ECONOMIC DIPLOMACY: THE FINE BALANCE OF TRADE POLICIES AND GEOPOLITICS",
    author: "E-Cell IIT Delhi",
    description: "Revolutionizing industries one idea at a time.",
    image: "https://substackcdn.com/image/fetch/$s_!3gaR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58c4d082-c541-4216-bf1b-6725444fc9d4_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/economic-diplomacy-the-fine-balance"
  },
  {
    id: 7,
    title: "MONACO: PLAYGROUND OF THE ELITE",
    author: "E-Cell IIT Delhi",
    description: "Exploring the entrepreneurial spirit shaping the future.",
    image: "https://substackcdn.com/image/fetch/$s_!qAUW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F76f4c3f4-cf04-41c2-ad02-dca1ea1e8383_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/monaco-playground-of-the-elite"
  },
  {
    id: 8,
    title: "Cheers to Deception? How Liquor Brands Navigate India's Advertising Ban",
    author: "E-Cell IIT Delhi",
    description: "From ideas to impact: stories that redefine progress.",
    image: "https://substackcdn.com/image/fetch/$s_!lLy-!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fab5e142c-3538-4148-825e-f575fa585df6_1080x1080.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/cheers-to-deception-how-liquor-brands"
  },
  {
    id: 9,
    title: "THE ESG REVOLUTION: A BEGINNER'S GUIDE TO SUSTAINABLE INVESTING IN INDIA",
    author: "E-Cell IIT Delhi",
    description: "Innovative insights from the minds driving change.",
    image: "https://substackcdn.com/image/fetch/$s_!hqf6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb95bd046-20ba-4b51-a4ae-f3cfc7d20946_1200x1200.heic",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/the-esg-revolution-a-beginners-guide"
  },
  {
    id: 10,
    title: "Balancing Dreams and Reality: The Deferred Placement Perspective",
    author: "E-Cell IIT Delhi",
    description: "The intersection of technology, innovation, and society.",
    image: "https://substackcdn.com/image/fetch/$s_!8Ees!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5fed41e5-323a-407a-8684-20fffaee38ff_992x748.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/balancing-dreams-and-reality-the"
  },
  {
    id: 11,
    title: "Supercharging Success: The Thrilling Journey from IIT Classrooms to Million-Dollar Marvels",
    author: "E-Cell IIT Delhi",
    description: "A dive into innovation, sustainability, and success.",
    image: "https://substackcdn.com/image/fetch/$s_!KGAp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffa6fedc5-31a3-459a-aaef-fd105f1bf2eb_2166x1239.png",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/supercharging-success-the-thrilling"
  },
  {
    id: 12,
    title: "How Years of Perseverance built an Innovative Biotech Startup out of India: In talks with Tuhin Bhowmick, Co-Founder, Pandorum Technologies.",
    author: "E-Cell IIT Delhi",
    description: "Exploring the entrepreneurial spirit shaping the future.",
    image: "https://substackcdn.com/image/fetch/$s_!XdeQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8c6fe225-5886-4608-b2fd-13a5a3bea9ac_1456x910.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/how-years-of-perseverance-built-an"
  },
  {
    id: 13,
    title: "All you need to know about building a startup straight out of college: In conversation with Adit Jain",
    author: "E-Cell IIT Delhi",
    description: "Revolutionizing industries one idea at a time.",
    image: "https://substackcdn.com/image/fetch/$s_!UXPU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe731d576-962f-4824-b816-ff776f36c561_1126x549.png",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/all-you-need-to-know-about-building"
  },
  {
    id: 14,
    title: "eDC Weekly!",
    author: "E-Cell IIT Delhi",
    description: "Unveiling the next big wave in technology and business.",
    image: "https://substackcdn.com/image/fetch/$s_!qT9p!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F79721472-f8ad-4057-9612-fb49f8b6d206_800x483.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/edc-weekly-13e"
  },
  {
    id: 15,
    title: "eDC Weekly! Ft. BECon'23 special!",
    author: "E-Cell IIT Delhi",
    description: "Celebrating ideas that shape tomorrow.",
    image: "https://substackcdn.com/image/fetch/$s_!fjtS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8a874964-e40c-4ea2-85f7-dc633517e4fd_1170x1158.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/edc-weekly-ft-becon23-special"
  },
  {
    id: 16,
    title: "eDC Weekly!",
    author: "E-Cell IIT Delhi",
    description: "Innovative insights from the minds driving change.",
    image: "https://substackcdn.com/image/fetch/$s_!QcMA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9c8597a3-7f4f-4dac-ae86-771fb33c08b1_1163x1280.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/edc-weekly-70a"
  },
  {
    id: 17,
    title: "eDC weekly",
    author: "E-Cell IIT Delhi",
    description: "From ideas to impact: stories that redefine progress.",
    image: "https://substackcdn.com/image/fetch/$s_!DKmf!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4709b2c4-f7e3-4c22-a8a7-873ce0721ddf_1600x1066.jpeg",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/edc-weekly"
  },
  {
    id: 18,
    title: "Coming soon",
    author: "E-Cell IIT Delhi",
    description: "Entrepreneurship, leadership, and the power of ideas.",
    image: "https://substackcdn.com/image/fetch/$s_!ch7j!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fedciitdelhi.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D-1215799191%26version%3D9",
    category: "Technology",
    postURL: "https://edciitdelhi.substack.com/p/coming-soon"
  }
]

export default blogs;