import { Toggle } from "./Toggle";
import { Navigation } from "./navigation";
import { Wrapper } from "./wrapper";

export const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <Toggle />
        <Navigation />
      </Wrapper>
    </>
  );
};
