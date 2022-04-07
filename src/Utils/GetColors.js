const colorText = (string) =>
  string.split("").map((el, i) =>
    i % 3 === 0 ? (
      <span className="pink" key={i}>
        {el}
      </span>
    ) : (
      <span key={i}>{el}</span>
    )
  );

export default colorText;
