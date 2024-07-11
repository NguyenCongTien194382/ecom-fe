import React from 'react'
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleConfirm: (props: any) => void;
    title?: string,
    description?: string
}

const ModalConfirm: React.FC<ModalProps> = ({
    isOpen,
    handleConfirm,
    handleClose,
    description,
    title,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            size='md'
            placement='center'
        >
            <ModalContent>
                <ModalBody>
                    <div className='bg-white rounded-3xl p-6'>
                        <div className='font-semibold text-2xl text-app-primary text-center'>
                            {title}
                        </div>
                        <div className='text-app-secondary text-center mt-2 mb-8'>
                            {description}
                        </div>
                        <div className='flex gap-4'>
                            <div
                                className='py-3 px-6 bg-white rounded-full text-center border-2 border-primary w-full cursor-pointer'
                                onClick={handleClose}
                            >
                                Close
                            </div>
                            <div
                                className={`py-3 px-6 bg-white rounded-full text-center border-2 border-primary w-full cursor-pointer`}
                                onClick={handleConfirm}
                            >
                                Confirm
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalConfirm