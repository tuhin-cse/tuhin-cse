import {SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact} from "react-icons/si";
import {MdLaunch} from "react-icons/md";

const Projects = () => {

    const projects = [
        {
            title: "Car2Go",
            description: "Car2Go is the ride-sharing platform, offering a seamless experience for both users and drivers. Real-Time Booking Support for various payment methods, including credit/debit cards and digital wallets. Precise GPS tracking for accurate pick-ups and drop-offs. Integrated navigation to guide drivers to the pick-up and drop-off locations.",
            link: "https://codecanyon.net/item/car2go-one-stop-ride-share-platform-user-web-app-driver-web-app-admin-panel-mern/47336807?s_rank=3"

        },
        {
            title: "Taxstick",
            description: "Taxstick is a web-based solution that provides a complete online-based tax management system. It provides a full company website with admin, account, and user panels where each individual can manage their tax file management easily. Any organization involved in tax management may use the solution in accordance with their demands because it is entirely dynamic as well as easy to customize.",
            link: "https://codecanyon.net/item/taxstick-tax-filing-management-system/41455834"
        },
        {
            title: "01Supplies",
            description: "01Supplies is a robust multi-vendor system allowing multiple sellers to register and manage their own stores. Efficient product listing and management system for vendors to add, edit, and remove products. Integrated secure payment gateways to facilitate safe and reliable transactions. Real-time order tracking and status updates",
            link: "https://01supplies.com/"
        }
    ]


    return (
        <div className="container section" id="s-projects">
            <h3 className="section-title">Projects</h3>
            <div className="flex flex-wrap justify-center -mx-2">
                {projects?.map((item, index) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={index}>
                        <div className="project h-full">
                            <div>
                                <p className="text-center font-bold text-xl text-primary mb-1">{item.title}</p>
                                <p className="text-center text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <div className="flex justify-center gap-2.5 text-primary">
                                    <SiNodedotjs size={22}/>
                                    <SiExpress size={22}/>
                                    <SiReact size={22}/>
                                    <SiNextdotjs size={22}/>
                                    <SiMongodb size={22}/>
                                </div>
                                <a className="link" href={item.link} target="_blank">
                                    <MdLaunch size={24}/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects