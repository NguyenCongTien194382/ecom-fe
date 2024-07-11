'use client'

import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const PreviewImage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalBody>
                        <div>
                            {/* <div classN>FAPAS RELAXED COME TEE</div> */}
                            <div className='flex gap-3 divide-x-1'>
                                <div>
                                    <span>SKU:</span>
                                    <span className='font-semibold'>ATF240402103</span>
                                </div>
                                <div>
                                    <span>Tình trạng:</span>
                                    <span className='font-semibold'>Còn hàng</span>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PreviewImage