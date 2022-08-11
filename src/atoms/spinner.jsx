const Spinner = ({ text }) => {
  return (
    <strong className="c-spinner" role="progressbar">
      {text}
    </strong>
  );
};

export default Spinner;
