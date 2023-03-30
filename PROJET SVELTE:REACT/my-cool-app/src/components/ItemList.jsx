import React from 'react';
import Item from './Item';

const ItemList = ({ games, onAddToCart }) => {
    return (
        <div>
            {games.map(game => (
                <Item
                    key={game.id}
                    game={game}
                    onAddToCart={() => onAddToCart(game)}
                />
            ))}
        </div>
    );
};

export default ItemList;
