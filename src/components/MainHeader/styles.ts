import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: solid 1px ${props => props.theme.colors.gray};
`;

export const Profile = styled.div``;
export const Welcome = styled.h3``;
export const UserName = styled.span``;
