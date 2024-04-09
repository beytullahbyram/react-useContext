import { AdjustableColumnsBlock } from "../components/AdjustableColumnsBlock";
import SomeComponent from "../components/SomeComponent";
import { AnotherVerySlowComponent, VerySlowComponent } from "../components/VerySlowComponent";

export const MainPart = () => {
    return (
        <>
            <SomeComponent />
            <VerySlowComponent />
            <AnotherVerySlowComponent />
            <AdjustableColumnsBlock />
        </>
    );
};
