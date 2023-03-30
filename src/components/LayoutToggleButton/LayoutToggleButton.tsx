import { useSelector, useDispatch } from "react-redux";
import { getLayoutState, toggleLayout } from "@/context/layoutSlice";
import { Button } from "@chakra-ui/react";
import { TfiViewList, TfiViewGrid } from "react-icons/tfi";

export const LayoutToggleButton = () => {
  const layout = useSelector(getLayoutState);
  const dispatch = useDispatch();

  const icon = layout === "tiles" ? <TfiViewGrid /> : <TfiViewList />;

  return (
    <Button
      colorScheme='blue'
      variant='ghost'
      fontSize='20px'
      onClick={() => dispatch(toggleLayout())}
    >
      {icon}
    </Button>
  );
};
