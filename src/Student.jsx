const Student = (props) => {
  return (
    <>
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
    </>
  )
}

export default Student