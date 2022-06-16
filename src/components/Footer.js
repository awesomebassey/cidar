
export default function Footer() {
  const images = process.env.PUBLIC_URL + "/assets/images"
  return (
    <>
      <div className="container rounded-5 footer pt-5 pb-2 my-5 text-center">
        <div className="mt-5 pt-3 mb-3">
          <h1 className="text-center text-white">Want to start a project?</h1>
        </div>
        <button className="btn btn-lg cta py-3 px-5">Reach out to us <img src={images + "/footer-img.png"} alt="" width={'35px'} /></button>
        <div className="mt-4">
          <small className="text-secondary">Copyright &copy; CIDAR, {new Date().getFullYear()}. All rights reserved</small>
        </div>
      </div>
    </>
  )
}
