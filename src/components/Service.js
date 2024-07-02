const Service = ({}) => {
  return (
    <article className="service" key={data.id}>
      <span className="service-icon">
        <i className={data.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{data.title}</h4>
        <p className="service-text">{data.text}</p>
      </div>
    </article>
  )
}
export default Service
