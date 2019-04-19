import styled from "@emotion/styled";
import { pixel, grid, display } from "~/lib/util";

export type BoxProps = {
  m?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  p?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  grid?: boolean;
  flex?: boolean;
  block?: boolean;
  inline?: boolean;
  iblock?: boolean;
  direction?: string;
  gap?: number;
  cols?: number;
  rows?: number;
  align?: string;
  items?: string;
  content?: string;
};

export default styled.div<BoxProps>`
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
