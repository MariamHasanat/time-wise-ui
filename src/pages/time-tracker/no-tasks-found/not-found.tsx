const NoTaksFound = () => {
  return (
    <div style={{ "margin": "100px auto", "display": "flex", "alignItems": "center", "flexDirection": "column", "justifyContent": "center" }}>
      <img width={100} src='empty-box.png' alt='empty' />
      <p>no records yet</p>
    </div>
  )
}
export default NoTaksFound;