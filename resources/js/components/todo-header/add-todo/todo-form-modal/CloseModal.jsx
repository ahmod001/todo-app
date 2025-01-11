import Button from "../../../library/Button";

const CloseModal = ({...props}) => {
    return (
        <Button variant="ghost" {...props}>
            Close
        </Button>
    );
};

export default CloseModal;
