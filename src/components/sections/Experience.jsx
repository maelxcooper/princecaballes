import styled from "styled-components";
import { sectionHeading } from "../styles/styles";

const StyledHeading = styled.h2`
  ${sectionHeading};
  &::before {
    counter-increment: section 2;
  }
`;

const Experience = () => {
  return (
    <div
      id="experience"
      className="max-w-[1200px] w-full mx-auto py-16 px-6 md:px-14"
    >
      <StyledHeading className="md:text-3xl text-2xl font-bold font-montserrat text-[var(--light-slate)] mt-[10px] mb-[40px] mx-0">
        Where I've Worked{" "}
      </StyledHeading>
    </div>
  );
};

export default Experience;
