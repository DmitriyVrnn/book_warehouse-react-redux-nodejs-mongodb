import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';

const Modal = ({title, isOpen, onCancel, children}) => {
    return (
        <>
            { isOpen && <Portal>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <button className="modal-btn-back" onClick={onCancel}>
                                <i className="fas fa-arrow-circle-left"></i></button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    )
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal window',
    isOpen: false,
    onCancel: () => {},
    children: null,
};

export default Modal

