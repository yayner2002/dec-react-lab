import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  color: white;
  padding: 10px;
  border: 2px solid black;

  &:hover {
    background-color: darkblue;
  }
`;

const StyledBox = () => {
  return <Box>Styled Component</Box>;
};

export default StyledBox;