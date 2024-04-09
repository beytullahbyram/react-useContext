import { useEffect } from 'react';
import { useNavigationApi } from '../hooks/useNavigationApi';


const SomeComponent = () => {
    const { open, close } = useNavigationApi();

    useEffect(() => {
        console.info("SomeComponent won't re-render on navigation expand/collapse, even though it uses Context");
    });

    return (
        <div>
            <button onClick={open}>Expand nav</button>
            <button onClick={close}>Collapse nav</button>
        </div>
    );
};

export default SomeComponent