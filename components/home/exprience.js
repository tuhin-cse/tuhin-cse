const Experience = () => {

    const experiences = [
        {
            period : "JUL 2021 - Present",
            company: "Appstick",
            role: "Full Stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci asperiores atque autem consequatur cumque cupiditate deserunt doloribus ducimus eaque earum eligendi error esse est eum eveniet excepturi exercitationem facere fugiat fugit hic illum impedit in incidunt ipsa ipsum iure laboriosam laborum libero magnam maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quas quia quibusdam quisquam quod quos ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde ut vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum."
        },
        {
            period: "NOV 2020 - MAY 2021",
            company: "Andit",
            role: "React Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci asperiores atque autem consequatur cumque cupiditate deserunt doloribus ducimus eaque earum eligendi error esse est eum eveniet excepturi exercitationem facere fugiat fugit hic illum impedit in incidunt ipsa ipsum iure laboriosam laborum libero magnam maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quas quia quibusdam quisquam quod quos ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde ut vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum."
        },
        {
            period: "JAN 2020 - OCT 2020",
            company: "Puredevs",
            role: "React Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci asperiores atque autem consequatur cumque cupiditate deserunt doloribus ducimus eaque earum eligendi error esse est eum eveniet excepturi exercitationem facere fugiat fugit hic illum impedit in incidunt ipsa ipsum iure laboriosam laborum libero magnam maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quas quia quibusdam quisquam quod quos ratione recusandae repellat reprehenderit repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde ut vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum."
        }
    ]

    return (
        <div className="pt-12 md:pt-28 pb-12 container">
            <h3 className="section-title">Experience</h3>
            <ul className="flex flex-col items-center gap-6">
                {experiences.map((item, index) => (
                    <li key={index} className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <div className="w-60">
                            <p className="text-sm text-text-alt w-60">{item.period}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-primary text-xl font-bold">{item.company}</h4>
                            <p className="text-text-alt">{item.role}</p>
                            <p className="text-sm text-text-alt">{item.description}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience