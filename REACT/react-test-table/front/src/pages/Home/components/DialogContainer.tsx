import React, { useEffect, useState } from 'react';
import { Dialog } from './../../../shared/components/Dialog/Dialog';

export const DialogContainer: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pos, setPos] = useState<string>('center');
    const dialogContent = () => (
        <>
            <div className='dialog-ct'>
                <div className='dialog-header'>
                    <span className='dialog-title'>Dialog Title</span>
                    <button onClick={() => setOpenModal(false)}>X</button>
                </div>
                <div className='dialog-content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam nisi, iusto, nesciunt maxime aspernatur tempora
                        dignissimos quia perferendis maiores architecto pariatur
                        corrupti officiis quae, facere cupiditate id assumenda
                        laudantium ex!
                    </p>
                </div>
                <div className='flex row-reverse'>
                    <button onClick={() => setOpenModal(false)} type='button'>CLOSE ME</button>
                </div>
            </div>

        </>
    );
    const handleDialog = (pos: string) => { 
        setPos(pos);
        setOpenModal(true);
    }

    useEffect(() => {
        const keyEvent = (): void => {
            window.addEventListener('keyup', (event) => {
                if (event.key == 'Escape') setOpenModal(false);
            });
        };

        keyEvent();
    }, []);


    return (
        <>
            <h2>Dialog</h2>
            <div className='dialog-btn-ct'>
                <div className='flex wrap gap-10px'>
                    <button className='btn-open-dialog' onClick={() => handleDialog('center')}>Center</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('top')}>Top</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('right')}>Right</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('bottom')}>Bottom</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('left')}>Left</button>
                    </div>

                <div className='flex wrap gap-10px'>
                    <button className='btn-open-dialog' onClick={() => handleDialog('top-right')}>Top Right</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('top-left')}>Top Left</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('bottom-right')}>Bottom Right</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('bottom-left')}>Bottom Left</button>
                </div>

                <div className='flex wrap gap-10px'>
                    <button className='btn-open-dialog' onClick={() => handleDialog('full')}>Full</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('full-top')}>Full Top</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('full-right')}>Full Right</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('full-bottom')}>Full Bottom</button>
                    <button className='btn-open-dialog' onClick={() => handleDialog('full-left')}>Full Left</button>
                </div>
            </div>

            <Dialog styles='flex' position={pos} open={openModal} html={dialogContent()} />
        </>
    );
}
