import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import useAxios from '../../../axios';

function LikedUsers({ onClose, postId }) {
    const [likedUsers, setLikedUsers] = useState([]);
    const axiosInstance = useAxios();

    useEffect(() => {
        const fetchLikedUsers = async () => {
            try {
                const response = await axiosInstance.get(`User/liked-users/${postId}/`);
                setLikedUsers(response.data);
            } catch (error) {
                console.error('Error fetching liked users:', error);
            }
        };

        fetchLikedUsers();
    }, []);

    return likedUsers.length > 0 ? (
        <Modal isOpen={true} placement="center" onClose={onClose}>
            <ModalContent>
                <ModalHeader className="sm">Liked Users</ModalHeader>
                <ModalBody>
                    <ul>
                        {likedUsers.map(user => (
                            <li key={user.id}>{user.user_name}</li>
                        ))}
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="default" variant="default" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ) : null;
}

export default LikedUsers;
