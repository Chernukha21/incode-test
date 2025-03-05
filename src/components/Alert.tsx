import Alert from 'react-bootstrap/Alert';
import {useState} from "react";

function LinksExample({textInAlert}: {textInAlert: string}) {
    const [show, setShow] = useState<boolean>(true);
    return (
        <Alert variant={'light'} onClose={() => setShow(false)} dismissible>
            {textInAlert}
            <div className="d-flex justify-content-end">
            </div>
        </Alert>
    );
}

export default LinksExample;