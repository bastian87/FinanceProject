import React, { SyntheticEvent } from 'react'

interface Props {
    onPortFolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortFolioDelete, portfolioValue }: Props) => {
    return <div>
        <form onSubmit={onPortFolioDelete}>
            <input hidden={true} value={portfolioValue} />
            <button>Delete</button>
        </form>
    </div>

};

export default DeletePortfolio