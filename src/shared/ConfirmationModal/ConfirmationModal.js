import React from 'react';

const ConfirmationModal = ({title, message, setDeletedDortor, successAction, modalData}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmedModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=> successAction(modalData)} htmlFor="confirmedModal" className="btn">YAY</label>
                        <button onClick={()=> setDeletedDortor(null)} className='btn btn-warning btn-outline'>Cencel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;