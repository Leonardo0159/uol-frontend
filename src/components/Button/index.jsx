export const Button = ({ children, onClick, disabled }) => {
    return (
        <button
            className="bg-action-medium rounded-radius-300 p-squish-sm text-base text-neutral-lightest font-regular hover:bg-action-light active:bg-action-dark disabled:bg-action-lightest disabled:cursor-not-allowed"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
