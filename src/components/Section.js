
export default function Section({ bg, title, desc, reverse }) {
    return (
        <>
            <div className={`row bg-light p-5 rounded-3 m-5`}>
                <div className="col-lg-10 mx-auto">
                    <div className={`row ${reverse && 'flex-row-reverse'}`}>
                        <div className="col-lg-6">
                            <img src={bg} alt="" width={'100%'} />
                        </div>
                        <div className="col-lg-6 mt-5 pt-5">
                            <h4 className="fw-bold">{title}</h4>
                            <p>{desc}</p>
                            <button className="btn btn-success py-3 px-4">Start a Project with us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
