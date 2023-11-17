const Experience = () => {

    const experiences = [
        {
            period: "JUL 2021 - Present",
            company: "Appstick",
            role: "Full Stack Developer",
            descriptions: [
                "Designing and developing user-friendly web applications using the MERN stack.",
                "Creating and maintaining databases using MongoDB.",
                "Building and managing RESTful APIs using Express.js.",
                "Developing and implementing web-based user interfaces using React.js.",
                "Integrating front-end components with back-end services.",
                "Testing and debugging applications to ensure their quality and performance.",
                "Deploying applications to cloud-based platforms such as AWS or Heroku."
            ]
        },
        {
            period: "NOV 2020 - MAY 2021",
            company: "Andit",
            role: "React Developer",
            descriptions: [
                "Designing and developing user-friendly web interfaces using React.js.",
                "Building reusable components and libraries for future use.",
                "Implementing responsive web design principles to ensure that the application is optimized for all devices and screen sizes.",
                "Writing clean, efficient, and maintainable code that adheres to industry standards.",
                "Testing and debugging,",
                "Continuously researching and learning new technologies.",
                "Working with back-end developers to integrate front-end"
            ]
        },
        {
            period: "JAN 2020 - OCT 2020",
            company: "Puredevs",
            role: "React Developer",
            descriptions: [
                "Analyzing user needs and requirements to determine the functionality and features required for a custom WordPress plugin.",
                "Designing and developing custom WordPress plugins using PHP, JavaScript, and WordPress APIs.",
                "Testing and debugging WordPress plugins to ensure their quality and performance.",
                "Collaborating with cross-functional teams to identify and prioritize features and functionality for WordPress plugins."
            ]
        }
    ]

    return (
        <div className="container section" id="s-experience">
            <h3 className="section-title">Experience</h3>
            <ul className="flex flex-col items-start md:items-center gap-6">
                {experiences.map((item, index) => (
                    <li key={index} className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-1/2 pt-1">
                            <p className="text-sm text-text-alt w-60">{item.period}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-primary text-xl font-bold">{item.company}</h4>
                            <p className="text-text-alt">{item.role}</p>
                            <ul className="list-disc pl-3.5 md:w-[600px]">
                                {item?.descriptions?.map((desc, index) => (
                                    <li key={index} className="text-sm text-text-alt">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience