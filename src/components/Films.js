
const Films = ({ filmInfo }) => {
    return (
        <div className="film-container">
        {
            filmInfo.map(film => <img className="pic" src={film.image}/>)
        }
        </div>
    )
}
export default Films