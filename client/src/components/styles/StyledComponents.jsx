import { Skeleton, keyframes, styled } from '@mui/material'
import { Link as LinkComponent } from 'react-router-dom';
import { gray, grayColor, matBlack } from '../../constants/color';

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0,0,0,0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1
});

export const Link = styled(LinkComponent)`
text-decoration: none;
color: black;
padding: 1rem;
&:hover {
  background: ${gray};
}
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`

export const Searchfield = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border-radius: 3.5rem;
  outline: none;
  border: none;
  background-color:${grayColor};
  font-size: 1.1rem;
`

export const CurveButton = styled("button")`
padding: 1rem 2rem;
cursor: pointer;
border-radius: 3.5rem;
outline: none;
border: none;
background-color:${matBlack};
font-size: 1.1rem;
color: white;
&:hover {
  background-color: rgba(0,0,0,0.8);
}
`
export const bounceAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.5); }
100% { transform: scale(1); }
`;

export const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));