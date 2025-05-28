/**
 * Tags component displays an array of tags in styled containers.
 * @param {string[]} tags - Array of tag strings to display.
 */

function Tags({ tags = [] }) {
  return (
    <div className="tags">
      {tags.map((tag, idx) => (
        <div className="tags__container" key={idx}>
          <div className="tags__rectangle">
            <span className="tags__text">{tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tags;
