export const Gif = ({ title, url }) => {
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-between flex-column mb-3 border p-2 rounded">

            <div className="card" >
                <img src={url} className="card-img-top gif-img" alt={ title }/>

                    <div className="card-body">
                        <p className="card-text"> { title } </p>
                    </div>
            </div>

                <a href={ url } download="Acme Documentation (ver. 2.0.1).txt" className="btn btn-outline-success">Descargar</a>
        </div>
    )
}
