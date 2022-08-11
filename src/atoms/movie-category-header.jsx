import { upperCaseFirstCharacter } from "../utils/strings/uppercase-string";
const MovieCategoryHeader = ({ text }) => {
  return (
    <>
      <h3 className="c-heading-bravo">{upperCaseFirstCharacter(text)}</h3>
      <hr className="c-divider" />
    </>
  );
};

export default MovieCategoryHeader;
