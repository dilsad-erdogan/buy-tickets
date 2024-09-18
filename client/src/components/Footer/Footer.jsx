import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Login",
        link: "/#login",
    },
    {
        id: 4,
        title: "My Tickets",
        link: "/#tickets",
    },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white mt-auto">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-6 pt-5">
                {/* Details sections */}
                <div className="py-8 px-8">
                    <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl text-purple-800 dark:text-purple-200">bu bilet</a>
                    <p className="text-purple-800 dark:text-purple-200 lg:pr-24 pt-3">Bu projede istediğiniz taşıttan, istediğiniz yerden istediğiniz yere bilet alabilirsiniz.</p>
                    <p className="text-purple-800 dark:text-purple-200 mt-4">Made with 💕 by The Dilşad Rukiye Erdoğan</p>
                </div>

                {/* Footer sections */}
                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                    {/* Link col */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3 text-purple-800 dark:text-purple-200">Important Links</h1>
                        <ul className="space-y-3">
                            {FooterLinks.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link} className="text-purple-800 dark:text-purple-200 duration-300">- {data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Creater address */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto text-purple-800 dark:text-purple-200">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Selçuklu / Konya</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <FaMobileAlt />
                            <p>+90 507 184 52 46</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaGithub className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer