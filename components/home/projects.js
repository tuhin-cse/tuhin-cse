const Projects = () => {
    return (
        <div className="pt-28 pb-12 container">
            <h3 className="section-title">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(5).fill(0)?.map((item, index) => (
                    <div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects