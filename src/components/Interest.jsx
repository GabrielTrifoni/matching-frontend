import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Interest({ projectId }) {
    const { token } = useAuth();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        async function fetchInterests() {
            try {
                const response = await axios.get(`http://localhost:3000/interests/project/${projectId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const { payload } = response.data;
                setInterests(payload);
            } catch (error) {
                console.error("Erro ao carregar interesses. ", error);
            }
        }

        fetchInterests();
    }, [projectId, token]);

    const handleInterestApproval = async (interestId, isApproved) => {
        const newStatus = isApproved ? 'APROVADO' : 'REPROVADO'

        try {
            await axios.patch(`http://localhost:3000/interests/${interestId}/updateStatus`, { status: newStatus }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setInterests(interests.map(interest =>
                interest.id === interestId ? { ...interest, status: newStatus } : interest
            ));
            alert(`Interesse ${isApproved ? 'aprovado' : 'reprovado'} com sucesso!`);
        } catch (error) {
            console.error("Erro ao atualizar interesse. ", error);
            alert("Erro ao atualizar interesse.");
        }
    };

    return (
        <div>
            {interests.length > 0 ? (
                interests.map(item => (
                    <div key={item.id}>
                        <span>Aluno: {item.user.fullname}</span><br />
                        <span>Motivo de interesse: {item.reason}</span><br />
                        {item.status === 'EM_ANALISE' ? (
                            <>
                                <span>Status: Em análise</span><br/>
                                <Button
                                    variant="success"
                                    onClick={() => handleInterestApproval(item.id, true)}
                                    disabled={item.status === 'APROVADO' || item.status === 'REPROVADO'}
                                >
                                    Aprovar
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => handleInterestApproval(item.id, false)}
                                    disabled={item.status === 'APROVADO' || item.status === 'REPROVADO'}
                                >
                                    Reprovar
                                </Button>
                                <br />
                            </>
                        ) : (
                            <p>Status: {item.status === 'APROVADO' ? 'Aprovado' : 'Reprovado'}</p>
                        )}
                    </div>
                ))
            ) : (
                <p>Não há interesses para este projeto.</p>
            )}
        </div>
    );
}
