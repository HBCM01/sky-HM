const PageHeader = ({ text }) => {
  return (
    <>
      <div
        className="c-tile__title c-heading-bravo u-margin-all "
        style={{ textAlign: "center" }}
      >
        {text}
      </div>
      <hr className="c-divider" />
    </>
  );
};

export default PageHeader;
