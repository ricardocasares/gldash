import styled from "@emotion/styled";
import { pixel, grid, display } from "../lib/util";

export default styled.div`
  margin: ${pixel("m")};
  margin-top: ${pixel("mt")};
  margin-left: ${pixel("ml")};
  margin-right: ${pixel("mr")};
  margin-bottom: ${pixel("mb")};
  padding: ${pixel("p")};
  padding-top: ${pixel("pt")};
  padding-left: ${pixel("pl")};
  padding-right: ${pixel("pr")};
  padding-bottom: ${pixel("pb")};
  display: ${display};
  flex-direction: ${({ direction }) => direction};
  grid-gap: ${pixel("gap")};
  grid-template-rows: ${grid("rows")};
  grid-template-columns: ${grid("cols")};
  align-items: ${({ align }) => align};
  justify-items: ${({ items }) => items};
  justify-content: ${({ content }) => content};
`;
