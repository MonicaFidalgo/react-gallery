function Details() {
  const { data } = this.props.location;
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{data.title}</h3>
      <img src={data.img} alt="git-icon" style={{ height: "200px" }} />
    </div>
  );
}

export default Details;
