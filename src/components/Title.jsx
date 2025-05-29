function Title({ title, location }) {
  return (
    <div className="title-container">
      <div className="title-container__main">{title}</div>
      <div className="title-container__location">{location}</div>
    </div>
  );
}

export default Title;
