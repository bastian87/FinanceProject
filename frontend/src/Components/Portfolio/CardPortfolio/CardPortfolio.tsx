import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortFolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortFolioDelete }: Props) => {
    return (
        <>
            <h4>{portfolioValue}</h4>
            <DeletePortfolio onPortFolioDelete={onPortFolioDelete} portfolioValue={portfolioValue} />
        </>
    );
};

export default CardPortfolio