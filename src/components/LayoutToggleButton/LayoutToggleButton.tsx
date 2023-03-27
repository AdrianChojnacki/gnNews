import { useSelector, useDispatch } from "react-redux";
import { getLayoutState, toggleLayout } from "@/context/layoutSlice";
import { TfiViewList, TfiViewGrid } from "react-icons/tfi";
import { Button } from "@chakra-ui/react";

export const LayoutToggleButton = () => {
  const layout = useSelector(getLayoutState);
  const dispatch = useDispatch();

  const icon = layout === "list" ? <TfiViewGrid /> : <TfiViewList />;

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
